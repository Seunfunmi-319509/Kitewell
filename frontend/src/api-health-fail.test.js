import { describe, expect, it } from "vitest";
import { fetchHealth } from "./api";
import { vi } from "vitest";

describe("fetchHealth", () => {
  it("rejects with 'Backend health check failed' when res.ok is false", async () => {
    global.fetch = vi.fn().mockRejectedValue({
      ok: false,
      status: 500,
    });

    await expect(fetchHealth()).rejects.toThrow("Backend health check failed");
  });
});