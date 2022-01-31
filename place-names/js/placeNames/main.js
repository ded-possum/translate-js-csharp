// Put your code here
const names = ["Nashville", "Hong Kong", "The backyard", "Earth", "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

console.log(names)

for (let name of names) {
    console.log(`${name}`)
}

console.log ("")

const theNames = names.filter(n => n.startsWith("The"))
console.log("'The' Place Names")
for (let name of theNames) {
console.log(name)}
console.log(theNames)