
import { httpBatchLink, loggerLink, createTRPCProxyClient } from "@trpc/client";
import { type AppRouter } from "@/server/api/root";

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    loggerLink(),
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ]
});

export default client
