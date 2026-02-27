import { prismaClient } from '../src/prisma-client'

describe("Prisma Client", () => {
    it('should can create and select fileds', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "xxx",
                email: "xxx@xxx.xxx",
                phone: "1212",
                name: "xxx"
            },
            select: {
                id: true, 
                name: true
            }
        })

        expect(customer.id).toBe("xxx")
        expect(customer.name).toBe("xxx")
        expect(customer.phone).toBeUndefined
    })
})