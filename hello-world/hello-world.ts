import { listenAndServe } from "https://deno.land/std@0.109.0/http/server.ts";

const headers = new Headers({
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
});

listenAndServe(
  ":8080",
  () => new Response(JSON.stringify({ message: "hi" }), { headers })
);
