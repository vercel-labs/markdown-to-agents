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
              // Have text/markdown or text/plain but before any text/html
              // Note, that Claude Code currently requests text/plain
              value:
                "(?=.*(?:text/plain|text/markdown))(?!.*text/html.*(?:text/plain|text/markdown)).*",
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
