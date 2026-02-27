import { prismaClient } from '../src/prisma-client'

describe("Prisma Client", () => {
    it('should be able to delete data customer ', async () => {
        const customer = await prismaClient.customer.delete({
            where: {
                id: "1"
            }
        })

        console.info('customer.name:', customer.name)

        expect(customer.id).toBe("1")
        expect(customer.email).toBe("annas@annas.annas")
        expect(customer.phone).toBe("08121212")
        expect(customer.name).toBe("Annas Nurdin")
    })
})
