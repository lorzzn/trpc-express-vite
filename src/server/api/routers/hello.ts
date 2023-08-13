import { createTRPCRouter, publicProcedure } from '../trpc'
import { z } from 'zod'

export const helloRouter = createTRPCRouter({
  greeting: publicProcedure.input(z.object({
    name: z.string()
  }).nullish())
  .query(({ input }) => {
    return `Hello ${input?.name}`
  })
})
