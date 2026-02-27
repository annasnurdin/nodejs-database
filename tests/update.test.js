import { prismaClient } from '../src/prisma-client'

describe("Prisma Client", () => {
    it('should be able to update data', async () => {
        const customer = await prismaClient.customer.update({
            data: {
                name: "Annas Nurdin"
            },
            where: {
                id: "1"
            }
        })

        expect(customer.id).toBe("1")
        expect(customer.email).toBe("annas@annas.annas")
        expect(customer.phone).toBe("08121212")
        expect(customer.name).toBe("Annas Nurdin")
    })
})
