function tagFunction(array, ...args){
    console.info(array)
    console.info(args)
}

test("tag function sql", () => {
    const nama = "annas"
    const alamat = "jogja"

    tagFunction`SELECT * FROM users WHERE name = ${nama} AND address = ${alamat}`
})