import { prismaClient } from '../src/prisma-client'

describe("Prisma Client", () => {
    it('should can update many fields data', async () => {
      const { count } = await prismaClient.customer.updateMany({
        data: {
            email: "annasaja@a.com"
        },
        where: {
            name: "Annas"
        }
      })

       expect(count).toBe(1)
    })
    
})
