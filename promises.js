// Kitchen - Server
const chef = (order) => {
    let meal = new Promise((resolve, reject) => {
        setTimeout(() => { 
            if (order === 'Pizza'){
                resolve(`Enjoy your ${order}!`)
            } else{
                reject('We dropped your food.... Oops')
            }
            console.log('Promise Complete')
        }, 3000)
    })
    return meal 
}

// Table - Client
const guest = async () => {
    console.log('Sitting at Table')
    const order = await chef('Hamburger')
        .then((data) => {
            console.log(`${data}`);
            return data
        }).catch((error) => {
            console.log(error)
        })
    console.log('Ate food:', order)
}

const main = async () => {
    await guest()
    console.log('Left Eatery')
}

main()

// // Kitchen - Server
// const chef = () => {
//     let meal;
//     setTimeout(() => { meal = 'Pizza'; console.log('Food prepped:', meal); }, 3000)
//     console.log('Order received:', meal)
//     return meal
// }

// // Table - Client
// const guest = () => {
//     console.log('Sitting at Table')
//     const order = chef()
//     console.log('Ordered food:', order)
// }

// // Kitchen - Server
// const chef = () => {
//     setTimeout(() => {
//         console.log('Food prepped')
//     }, 5000)
// }

// // Table - Client
// const guest = () => {
//     console.log('Sitting at Table')
//     chef()
//     console.log('Ordered Food')
// }

