import { Handler, serve } from "std/http/server.ts";
import { decode, encode } from "std/encoding/base64.ts";
import { extract_usk, instantiate } from "./lib/rs_lib.generated.js";
import secrets from "./secret.json" assert { type: "json" }

const { encaps, decaps } = await instantiate();
const pk = decode(secrets.pk)
const sk = decode(secrets.sk)
const handler: Handler = (req) => {
  const at_match = new URLPattern({ pathname: "/at/:at" }).exec(req.url);
  if (at_match) {
    const { at } = at_match.pathname.groups;
    const at_date = Date.parse(at)
    if (isNaN(at_date)) {
      return new Response("Invalid date", {status: 400})
    }
    if(Date.now() < at_date) {
      // future
      const [ct, ss] = encaps(pk, at);
      return new Response(JSON.stringify({ct, ss}))
    } else {
      // past
      const usk = extract_usk(sk, at);
      const ct = Uint8Array.from([]);
      const ss = decaps(usk, ct);
      return new Response(JSON.stringify({ct, ss}))
    }
  }
  return new Response("at");
};

serve(handler);
