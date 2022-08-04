import { instantiate, encaps, decaps } from "./lib/rs_lib.generated.js";
import { decode } from "std/encoding/base64.ts";
await instantiate();

export async function encrypt(mpk: Uint8Array, id: string, r: ReadableStream,  w: WritableStream){
  const [ct_, ss_] = await encaps(mpk, id);
  const ct = decode(ct_);
  const ss = decode(ss_);
  const writer = w.getWriter();
  writer.write(ct);
  const reader = r.getReader();
  const pump = async () => {
    const { value, done } = await reader.read();
    if (done) {
      reader.releaseLock();
      writer.close();
      return;
    }
    const ct = aes_encrypt(ss, value);
    writer.write(ct);
    await pump();
  }
  await pump();
}

export async function decrypt(usk: Uint8Array, r: ReadableStream, w: WritableStream){
  const ss = decaps(usk);
  await dec(r, w);
}
