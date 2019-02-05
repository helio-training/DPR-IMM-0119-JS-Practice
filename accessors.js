// Exploring Var, Let, Const

const usingLet = (y) => {
    let x = 5
    console.log('First:', x)
    x = 10
    console.log('Second:', x)
    // let x = 15
    console.log('Third:', y)
    x = x + 5
    console.log('Fourth:', x)
}

const usingConst = () => {
    const x = 5
    console.log('First:', x)
    x = 10
    console.log('Second:', x)
}

{
    var x = 5
}
const usingVar = () => {
    console.log(x)
}

const main = () => {
    // let z = 15
    // usingLet(z)
    // Showing why you should use Const with Functions
    // usingLet = () => {console.log("Break the system")}
    // usingLet(z)
    // usingConst()
    let x = 6
    console.log(x)
    usingVar()
}

main()