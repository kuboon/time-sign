use base64::prelude::*;
use ibe::kem::cgw_kv::*;
use ibe::kem::IBKEM;
use ibe::Compress;
use ibe::Derive;
use js_sys::Uint8Array;
use wasm_bindgen::prelude::*;

trait JsBind: Compress {
  fn to_base64(&self) -> String {
    BASE64_STANDARD_NO_PAD.encode(self.to_bytes().as_ref())
  }
  fn from_base64(s: &str) -> Self {
    let vec = BASE64_STANDARD_NO_PAD.decode(s).unwrap();
    let ct_option = Self::from_bytes(&Self::try_into(vec));
    ct_option.unwrap()
  }
  fn to_js(&self) -> Uint8Array {
    Uint8Array::from(self.to_bytes().as_ref())
  }
  fn from_js(key: Uint8Array) -> Self {
    Self::from_bytes(&Self::try_into(key.to_vec())).unwrap()
  }
  fn try_into(vec: Vec<u8>) -> Self::Output;
}
macro_rules! js_bind {
  ($i:ident) => {
    impl JsBind for $i {
      fn try_into(vec: Vec<u8>) -> Self::Output {
        vec.try_into().unwrap()
      }
    }
  };
  ($i:ident, $($j:ident),*) => {
    js_bind!($i);
    js_bind!($($j),*);
  }
}
js_bind!(PublicKey, SecretKey, UserSecretKey, CipherText);

#[wasm_bindgen]
pub fn setup() -> JsValue {
  let mut rng = rand::thread_rng();
  let (pk, sk) = CGWKV::setup(&mut rng);
  serde_wasm_bindgen::to_value(&(pk.to_base64(), sk.to_base64())).unwrap()
}

#[wasm_bindgen]
pub fn extract_usk(sk: Uint8Array, id: &str) -> Uint8Array {
  let sk = SecretKey::from_js(sk);
  let mut rng = rand::thread_rng();
  let kid = <CGWKV as IBKEM>::Id::derive(id.as_bytes());
  let usk = CGWKV::extract_usk(None, &sk, &kid, &mut rng);
  usk.to_js()
}

#[wasm_bindgen]
pub fn encaps(pk: Uint8Array, id: &str) -> JsValue {
  let mut rng = rand::thread_rng();
  let kid = <CGWKV as IBKEM>::Id::derive(id.as_bytes());
  let (ct, ss) = CGWKV::encaps(&PublicKey::from_js(pk), &kid, &mut rng);
  serde_wasm_bindgen::to_value(&(ct.to_base64(), BASE64_STANDARD_NO_PAD.encode(ss.0))).unwrap()
}
#[wasm_bindgen]
pub fn decaps(usk: Uint8Array, ct: Uint8Array) -> Uint8Array {
  let ss = CGWKV::decaps(
    None,
    &UserSecretKey::from_js(usk),
    &CipherText::from_js(ct),
  )
  .unwrap();
  Uint8Array::from(&ss.0 as &[u8])
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn it_works() {
    let mut rng = rand::thread_rng();
    let (pk, sk) = CGWKV::setup(&mut rng);
    encaps(pk.to_js(), "test");
    let _usk = extract_usk(sk.to_js(), "test");
    // decaps(usk, ct);
  }
}
