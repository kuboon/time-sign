import { instantiate, setup } from "./lib/rs_lib.generated.js";
await instantiate();

const [pk, sk] = setup();
Deno.writeTextFileSync("master.key", pk);
console.log("Master key written to master.key. Copy secret key to env.IBKEM_SECRET_KEY ");
console.log(sk)
