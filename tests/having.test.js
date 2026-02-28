import { prismaClient } from '../src/prisma-client'

describe("Prisma Client", () => {
    it('should can do aggregate function', async () => {
        const result = await prismaClient.product.groupBy({
            by: ["category"],
            _min: {
                price: true,
                stock: true
            },
            _max: {
                price: true,
                stock: true
            },
            having: {
                price: {
                    _avg: {
                        gt: 2000
                    }
                }
            }
        })
        console.info('result:', result)
    })
})