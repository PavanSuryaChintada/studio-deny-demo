import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Monorepo / multiple lockfiles: trace Prisma and shared deps from studio deny/, not the repo root.
const studioDenyRoot = path.join(__dirname, "..");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["@prisma/client", "prisma"],
  outputFileTracingRoot: studioDenyRoot,
};

export default nextConfig;
