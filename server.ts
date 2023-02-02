import { serve } from "std/http/server.ts";
import { Hono } from "https://deno.land/x/hono@v3.0.0-rc.9/mod.ts"
import { cors } from "https://deno.land/x/hono@v3.0.0-rc.9/middleware.ts"
import { decode } from "std/encoding/base64.ts";
import { extract_usk, instantiate } from "./lib/rs_lib.generated.js";
await instantiate();

const pk = decode(await Deno.readTextFile("master.key"))
const sk = decode(Deno.env.get("IBKEM_SECRET_KEY")!)

const app = new Hono()
app.use('/', cors({
  origin: '*',
  allowMethods: ['GET']
}))
app.get('/master_pk', c => c.body(pk))
app.get('/at/:at', c => {
  const at = c.req.param('at')
  const at_date = Date.parse(at)
  if (isNaN(at_date)) {
    c.status(400)
    return c.text("Invalid date")
  }
  if(Date.now() < at_date) {
    return c.text("It is not the time")
  } else {
    const usk = extract_usk(sk, at);
    return c.body(usk);
  }
})
app.get('/', c => {
  return c.text(`
  Usage:
  /master_pk to get the master public key
  /at/<date> to get the secret key for the given date
  `)
})
serve(app.fetch)
