const incrementors = () => {
    let x = 4
    console.log("before", x)
    console.log(++x) // x = x + 1
    console.log("middle", x)
    console.log(x++) // x = x + 1
    console.log("after", x)
}

const assignments = () => {
    let x = 10
    let y = 2
    console.log('before', x, y)
    x <<= y // x = x * y
    console.log('middle', x, y)
    x >>= y // x = x * y
    x >>= y // x = x * y
    console.log('after', x, y)
}

const main = () => {
    // incrementors()
    assignments()
}

main()