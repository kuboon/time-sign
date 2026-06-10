# time-sign

```ts
import { decrypt, encrypt } from "https://raw.githubusercontent.com/kuboon/time-sign/main/client/mod.ts";
import { serve } from "https://deno.land/std@0.176.0/http/server.ts";

const port = 8080;
const server = 'https://time-sign.kbn.one'

const handler = async (request: Request): Response => {
  const time = '2023-04-01'
  const mpk = await fetch(server + '/master_pk')
  
  const plain = new TextEncoder().encode('秘密')
  const enc = await encrypt(mpk, time, plain);

  const usk = await fetch(server + `/at/${time}`)
  const body = await decrypt(usk, enc)

  return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
```
