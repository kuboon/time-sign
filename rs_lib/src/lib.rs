use ibe::kem::cgw_kv::*;
use ibe::kem::IBKEM;
use ibe::Compress;
use ibe::Derive;
use js_sys::Uint8Array;
use wasm_bindgen::prelude::*;

trait JsBind: Compress {
  fn to_js(&self) -> Uint8Array {
    Uint8Array::from(self.to_bytes().as_ref())
  }
  fn from_js(key: Uint8Array) -> Self {
    Self::from_bytes(&Self::output(key)).unwrap()
  }
  fn output(key: Uint8Array) -> Self::Output;
}

impl JsBind for PublicKey {
  fn output(key: Uint8Array) -> Self::Output {
    key.to_vec().try_into().unwrap()
  }
}
impl JsBind for SecretKey {
  fn output(key: Uint8Array) -> Self::Output {
    key.to_vec().try_into().unwrap()
  }
}
impl JsBind for UserSecretKey {
  fn output(key: Uint8Array) -> Self::Output {
    key.to_vec().try_into().unwrap()
  }
}
impl JsBind for CipherText {
  fn output(key: Uint8Array) -> Self::Output {
    key.to_vec().try_into().unwrap()
  }
}

#[wasm_bindgen]
pub fn setup(f: &js_sys::Function) {
  let mut rng = rand::thread_rng();
  let (pk, sk) = CGWKV::setup(&mut rng);
  f.call2(&JsValue::null(), &pk.to_js(), &sk.to_js()).unwrap();
}

#[wasm_bindgen]
pub fn extract_usk(sk_js: Uint8Array, id: &str) -> Uint8Array {
  let sk = SecretKey::from_js(sk_js);
  let mut rng = rand::thread_rng();
  let kid = <CGWKV as IBKEM>::Id::derive(id.as_bytes());
  let usk = CGWKV::extract_usk(None, &sk, &kid, &mut rng);
  usk.to_js()
}

#[wasm_bindgen]
pub fn encaps(pk_js: Uint8Array, id: &str) -> Uint8Array {
  let mut rng = rand::thread_rng();
  let kid = <CGWKV as IBKEM>::Id::derive(id.as_bytes());
  let (ct, _ss) = CGWKV::encaps(&PublicKey::from_js(pk_js), &kid, &mut rng);
  ct.to_js()
}
#[wasm_bindgen]
pub fn decaps(usk_js: Uint8Array, ct_js: Uint8Array) -> Uint8Array {
  let ss = CGWKV::decaps(
    None,
    &UserSecretKey::from_js(usk_js),
    &CipherText::from_js(ct_js),
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
  }
}
