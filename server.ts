import { Handler, serve } from "std/http/server.ts";
import { decode } from "std/encoding/base64.ts";
import { extract_usk, instantiate } from "./lib/rs_lib.generated.js";
await instantiate();

const pk = decode(Deno.readTextFileSync("master.key"))
const sk = decode(Deno.env.get("IBKEM_SECRET_KEY")!)
const handler: Handler = (req) => {
  const pk_match = new URLPattern({ pathname: "/master_pk" }).exec(req.url);
  if (pk_match) {
    return new Response(pk);
  }
  const at_match = new URLPattern({ pathname: "/at/:at" }).exec(req.url);
  if (at_match) {
    const { at } = at_match.pathname.groups;
    const at_date = Date.parse(at)
    if (isNaN(at_date)) {
      return new Response("Invalid date", {status: 400})
    }
    if(Date.now() < at_date) {
      return new Response("It is not the time")
    } else {
      const usk = extract_usk(sk, at);
      return new Response(usk);
    }
  }
  return new Response(`
  Usage:
  /master_pk to get the master public key
  /at/<date> to get the secret key for the given date
  `);
};

serve(handler);
