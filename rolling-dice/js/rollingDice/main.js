// Put your code here
console.log("Let's roll some dice, baby!")
console.log("---------------------------")

for (let i = 0; i < 5; i++) {
    let die1 = Math.floor(Math.random()*6) +1
    let die2 = Math.floor(Math.random()*6) +1

    if (die1 === die2) {
        console.log(`${die1} + ${die2} = ${die1 + die2}. Doubles!`)
    } else {
        console.log(`${die1} + ${die2} = ${die1 + die2}.`)
    }
}