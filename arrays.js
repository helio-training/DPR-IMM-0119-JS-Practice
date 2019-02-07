const people = require('./people.json')
const loggingFunc = message => console.log(message)
const eachingFunc = (func, index) => func(`You are at index ${index}`)

const myCollection = [
    loggingFunc,
    loggingFunc,
    loggingFunc
]

const main = () => {
    people.forEach( person => 
        person.quotes.forEach( quote => loggingFunc(`${person.name} said "${quote}"`) )
        // person.quotes.forEach( quote => loggingFunc(person.name + ' said "' + quote + '"') )
    )
}

// const main = () => {
//     people.forEach(person => loggingFunc(`All: ${person.name}`))
//     const oldPeople = people.filter(person => person.birthYear < 1940)
//     oldPeople.forEach(person => loggingFunc(`Old: ${person.name}`))
// }

// const main = () => {
//     myCollection.forEach(eachingFunc)
//     for (let i = 0; i < myCollection.length; i++){
//         myCollection[i](`You are at index ${i}, again`)
//     }
// }

main()