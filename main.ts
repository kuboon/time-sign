import { serve } from "https://deno.land/std@0.145.0/http/server.ts";
import { instantiate } from "./lib/rs_lib.generated.js";

const { setup, encaps, decaps } = await instantiate();

serve((req: Request) => {
  const { pathname } = new URL(req.url);
  if (pathname.startsWith("/setup")) {
    let pk: Uint8Array, sk: Uint8Array;
    setup((pk_: Uint8Array, sk_: Uint8Array) => {
      pk = pk_;
      sk = sk_;
      console.log(pk, sk)
      const ct = encaps(pk, "Hello World");
    })
    console.log(pk, sk)
  }
  return new Response('setup');
})
