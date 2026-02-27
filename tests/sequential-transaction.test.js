import { prismaClient } from '../src/prisma-client'

describe("Prisma Client", () => {
    it('should can execute sequential transaction', async () => {
       const [annas, purwo] = await prismaClient.$transaction([
        prismaClient.customer.create({
            data: {
                id: "1",
                name: "Annas",
                email: "annas@a.com",
                phone: "0812"
            }
        }),
        prismaClient.customer.create({
            data: {
                id: "2",
                name: "Purwo",
                email: "purwo@p.com",
                phone: "0813"
            }
        })
       ])

       expect(annas.name).toBe("Annas")
       expect(purwo.name).toBe("Purwo")
    })
    
})
