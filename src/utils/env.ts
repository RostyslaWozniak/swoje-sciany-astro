import { env } from "src/env";

export const IS_LOCAL_PROJECT = env.NODE_ENV === "development";
export const IS_DEMO_PROJECT = env.NODE_ENV === "demo";
