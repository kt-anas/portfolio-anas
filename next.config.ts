import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "wp.aqlova.com",
            },
        ],
    },
};

export default nextConfig;
