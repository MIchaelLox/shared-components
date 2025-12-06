import { apiGet } from "../lib";

test("apiGet throws on non-OK response", async () => {
  // mock fetch
  const originalFetch = global.fetch;
  global.fetch = (async () =>
    new Response(null, { status: 500, statusText: "Server error" })) as any;

  await expect(apiGet("/test")).rejects.toThrow(/API error/);

  global.fetch = originalFetch!;
});
