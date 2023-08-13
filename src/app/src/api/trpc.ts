import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client"
import type { AppRouter } from "../../../server/api/root"

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    loggerLink(),
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
})

export default trpc
