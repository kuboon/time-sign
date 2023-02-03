import { instantiate, encaps, decaps } from "../lib/rs_lib.generated.js";
import { decode } from "https://deno.land/std@0.176.0/encoding/base64.ts";
import * as msgpack from "https://esm.sh/@msgpack/msgpack@2.8.0";
await instantiate();

export function missingFeature() {
  if (typeof Deno != "undefined") return null;
  if (typeof crypto == "undefined") return "crypto";
  const { subtle } = crypto;
  if (!subtle) return "crypto.subtle";
  if (!subtle.generateKey) return "crypto.subtle.generateKey";
  if (!subtle.encrypt) return "crypto.subtle.encrypt";
  if (!subtle.decrypt) return "crypto.subtle.decrypt";
  if (!subtle.wrapKey) return "crypto.subtle.wrapKey";
  if (!subtle.unwrapKey) return "crypto.subtle.unwrapKey";
  if (!subtle.importKey) return "crypto.subtle.importKey";
  if (!subtle.exportKey) return "crypto.subtle.exportKey";
  if (!crypto.getRandomValues) return "crypto.getRandomValues";
  return null;
}
const subtle = window.crypto?.subtle;

type EncData = {
  ct: Uint8Array
  iv: Uint8Array
  encrypted: Uint8Array
}

export async function encrypt(mpk: Uint8Array, id: string, plain: Uint8Array): Promise<Uint8Array>{
  const [ct_, ss_] = await encaps(mpk, id);
  const ct = decode(ct_);
  const ss = decode(ss_);
  const aeskey = await subtle.importKey(
    "raw",
    ss,
    "AES-CBC",
    true,
    ["encrypt"]);
  const iv: Uint8Array = crypto.getRandomValues(new Uint8Array(16));
  const encrypted = new Uint8Array(await aesEncrypt(aeskey, iv, plain));
  return msgpack.encode({ct, iv, encrypted});
}

export async function decrypt(usk: Uint8Array, enc: Uint8Array): Promise<ArrayBuffer> {
  const { ct, iv, encrypted } = msgpack.decode(enc) as EncData;
  const ss = await decaps(usk, ct);
  const aeskey = await subtle.importKey(
    "raw",
    ss,
    "AES-CBC",
    true,
    ["decrypt"]);
  return aesDecrypt(aeskey, iv, encrypted);
}

function aesEncrypt(key: CryptoKey, iv: Uint8Array, plain: ArrayBuffer) {
  return subtle.encrypt(
    {
      name: "AES-CBC",
      iv,
    },
    key,
    plain,
  );
}

function aesDecrypt(
  key: CryptoKey,
  iv: Uint8Array,
  encrypted: ArrayBuffer,
) {
  return subtle.decrypt(
    {
      name: "AES-CBC",
      iv,
    },
    key,
    encrypted,
  ) as Promise<ArrayBuffer>;
}
