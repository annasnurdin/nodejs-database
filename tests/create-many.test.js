import { prismaClient } from '../src/prisma-client'

describe("Prisma Client", () => {
    it('should can create many data', async () => {
      const { count } = await prismaClient.customer.createMany({
        data: [
            {
                id: "annas",
                email:"annas@aa.com",
                phone: "123",
                name: "Annas2"
            },
            {
                id: "purwo",
                email:"purwo@pp.com",
                phone: "321",
                name: "Purwo2"
            }
        ]
      })

       expect(count).toBe(2)
    })
    
})
