import { prismaClient } from '../src/prisma-client'

describe("Prisma Client", () => {
    it('should can delete many fields data', async () => {
      const { count } = await prismaClient.customer.deleteMany({
        where: {
            name: "Annas"
        }
      })

       expect(count).toBe(1)
    })
    
})
