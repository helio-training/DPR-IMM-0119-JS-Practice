const add = (...alias) => { // Rest Operator
    console.log(alias)
    return alias.reduce((accumulator, current) => accumulator + current)
}

const createUser = (first, last, speak) => {
    return {
        firstName: first, lastName: last, speak
    }
}

const main = () => {
    const args = [5, 10, 15, 20, 30]
    console.log(args)
    console.log(...args)
    const result = add(...args) // Spread Operator
    console.log(result)
    // console.log(add(2, 3))
    // const sayName = () => {console.log('Hello World')}
    // const user = createUser('Wesley', 'Cutting',  sayName)
    // console.log(user)
    // user.speak()
}

main()