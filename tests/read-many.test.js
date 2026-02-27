import { prismaClient } from '../src/prisma-client'

describe("Prisma Client", () => {
    it('should can read many fields data', async () => {
      const customers = await prismaClient.customer.findMany({})
      console.info('customers:', customers)

       expect(customers.length).toBe(5)
    })
    
})
