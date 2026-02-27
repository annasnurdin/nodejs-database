import { prismaClient } from '../src/prisma-client'

describe("Prisma Client", () => {
    it('should can create and select fileds', async () => {
        const customer = await prismaClient.customer.findMany({
            select: {
                id: true, 
                name: true
            }
        })

        console.info('customer:', customer)
    })
})