import { prismaClient } from '../src/prisma-client'

describe("Prisma Client", () => {
    it('should can do aggregate function', async () => {
        const result = await prismaClient.product.aggregate({
            _min: {
                price: true,
                stock: true
            },
            _max: {
                price: true,
                stock: true
            }
        })
        console.info('result:', result)
    })
})