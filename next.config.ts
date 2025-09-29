import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: "/docs/:slug",
          destination: "/markdown/:slug",
          has: [
            {
              type: "header",
              key: "accept",
              value: "(.*)text/markdown(.*)",
            },
          ],
        },
      ],
    };
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/docs/getting-started",
        permanent: false,
      },
    ];
  },
  outputFileTracingIncludes: {
    "*": ["./docs/*.md"],
  },
};

export default nextConfig;
