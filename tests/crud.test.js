import { prismaClient } from '../src/prisma-client'

describe("Prisma Client", () => {
    it('should be able to insert data', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "1",
                email: "annas@annas.annas",
                phone: "08121212",
                name: "annas"
            }
        })

        expect(customer.id).toBe("1")
        expect(customer.email).toBe("annas@annas.annas")
        expect(customer.phone).toBe("08121212")
        expect(customer.name).toBe("annas")
    })
})