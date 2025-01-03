import "server-only";

import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // يجب أن تكون false للسماح بالتحديثات
  token,
});

if (!writeClient.config().token) {
  throw new Error("The writeClient must be initialized with a write token");
}
