import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { decodeBase64 } from "@std/encoding/base64";
import { extract_usk, instantiate } from "./lib/rs_lib.generated.js";
await instantiate();

const pk = decodeBase64(await Deno.readTextFile("master.key"));
const sk = decodeBase64(Deno.env.get("IBKEM_SECRET_KEY")!);

const app = new Hono();
app.use(
  "/",
  cors({
    origin: "*",
    allowMethods: ["GET"],
  }),
);
app.get("/master_pk", (c) => c.body(pk.buffer as ArrayBuffer));
app.get("/at/:at", (c) => {
  const at = c.req.param("at");
  const at_date = Date.parse(at);
  if (isNaN(at_date)) {
    c.status(400);
    return c.text("Invalid date");
  }
  if (Date.now() < at_date) {
    return c.text("It is not the time");
  } else {
    const usk: Uint8Array = extract_usk(sk, at);
    return c.body(usk.buffer as ArrayBuffer);
  }
});
app.get("/", (c) => {
  return c.text(`
  Usage:
  /master_pk to get the master public key
  /at/<date> to get the secret key for the given date
  `);
});
Deno.serve({ port: 8000 }, app.fetch);
