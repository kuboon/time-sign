import { serve } from "https://deno.land/std@0.145.0/http/server.ts";
import { instantiate } from "./lib/rs_lib.generated.js";

const { add } = await instantiate();

serve((_req: Request) => new Response(add(1, 2).toString()));
