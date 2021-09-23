import { listenAndServe } from "https://deno.land/std@0.109.0/http/server.ts";

const headers = new Headers({
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*",
});

listenAndServe(":8080", () => new Response("Hello World", { headers }));
