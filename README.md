Demo project for delivering markdown to agents and HTML to humans.

## Demo

Compare

```
 curl -H "Accept: text/markdown" https://markdown-to-agents.vercel.app/docs/getting-started
```

and

```
 curl -H "Accept: text/html" https://markdown-to-agents.vercel.app/docs/getting-started
```

## How it works

The rewrite in `next.config.ts` directs traffic asking for `text/markdown` to a route that returns markdown.

```typescript
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
};
```
