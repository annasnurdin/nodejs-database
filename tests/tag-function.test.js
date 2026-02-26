function tagFunction(array, ...args){
    console.info(array)
    console.info(args)
}

test("Tag Function", () => {
    const name = "annas"
    const age = 90

    tagFunction`Hello ${name}! This is Tag Function ${age}!`
})