import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "demo", "production"])
      .default("demo"),
  },

  clientPrefix: "PUBLIC_",

  client: {},

  runtimeEnv: {},

  emptyStringAsUndefined: true,
});
