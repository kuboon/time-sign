import { instantiate, setup } from "./lib/rs_lib.generated.js";
await instantiate();

const [pk, sk] = setup();
Deno.writeTextFileSync("secret.json", JSON.stringify({pk, sk}));
