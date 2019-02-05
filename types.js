const { add } = require ('./functions')

const printTypeOfTypes = () => {
    console.log(typeof NaN)
    console.log(typeof "Hello World")
    console.log(typeof true)
    console.log(typeof { name:'Wes', age:'nonya' })
    console.log(typeof [ 10, 5, 6])
    console.log(typeof null)
    console.log(typeof undefined)
    console.log(typeof main)
}

const printNotNumbers = (x = 10) => {
    console.log(x)
    console.log(10/x)
}

const main = () => {
    printTypeOfTypes()
    // printNotNumbers()
}

main()