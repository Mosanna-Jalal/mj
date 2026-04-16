import type { NextConfig } from "next";

// Clear any injected standalone config from other Next.js processes (e.g. IDE extensions)
// This prevents __NEXT_PRIVATE_STANDALONE_CONFIG from corrupting this project's build
delete process.env.__NEXT_PRIVATE_STANDALONE_CONFIG;
delete process.env.__NEXT_PRIVATE_ORIGIN;

const nextConfig: NextConfig = {
  output: undefined, // explicitly not standalone
};

export default nextConfig;
