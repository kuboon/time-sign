use ibe::kem::kiltz_vahlis_one::*;
use ibe::kem::IBKEM;
use ibe::Derive;
use wasm_bindgen::prelude::*;

const ID: &'static str = "email:w.geraedts@sarif.nl";
pub fn kem() {
  let mut rng = rand::thread_rng();

  // Derive an identity (specific to this scheme).
  let kid = <KV1 as IBKEM>::Id::derive_str(ID);

  // Generate a public-private-keypair for a trusted third party.
  let (pk, sk) = KV1::setup(&mut rng);

  // Extract a private key for an identity / user.
  let usk = KV1::extract_usk(Some(&pk), &sk, &kid, &mut rng);

  // Generate a random message and encrypt it with the public key and an identity.
  let (c, k) = KV1::encaps(&pk, &kid, &mut rng);

  // Decrypt the ciphertext of that message with the private key of the user.
  let k2 = KV1::decaps(None, &usk, &c).unwrap();

  assert_eq!(k, k2);
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
  return a + b;
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn it_works() {
    let result = add(1, 2);
    assert_eq!(result, 3);
  }
}
