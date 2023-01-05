import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "pv8y60vp"
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2022-11-16"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});