import { prismaClient } from '../src/prisma-client'

describe("Prisma Client", () => {
    it('should can execute interactive transaction', async () => {
       const [annas, purwo] = await prismaClient.$transaction(async (prisma) => {
        const annas = await prisma.customer.create({
            data: {
                id: "3",
                name: "Annas1",
                email: "annas1@a.com",
                phone: "08121"
            }
        })
        const purwo = await prisma.customer.create({
            data: {
                id: "4",
                name: "Purwo1",
                email: "purwo1@p.com",
                phone: "08131"
            }
        })

        return [annas, purwo]
       })

       expect(annas.name).toBe("Annas1")
       expect(purwo.name).toBe("Purwo1")
    })
    
})
