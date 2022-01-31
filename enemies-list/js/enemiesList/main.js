// Put your code here
console.log("My Enemies List!");
console.log("----------------");


const createEnemy = (firstName, lastName, isReallyHated, offenses) => {
    return {
      firstName: firstName,
      lastName: lastName,
      isReallyHated: isReallyHated,
      offenses:offenses
    };
  };

function getEnemies () {

    const joshua = createEnemy(
        "Joshua",
        "Flowers",
        true,
        [
            "Being a jerk to me in elementary school",
            "Not being nice to me in elementary school"
        ]
    )

    const darth = createEnemy(
        "Darth",
        "Vader",
        false,
        [
            "Cut off Luke's hand",
            "Murdered all those kids",
            "Unkind management practices"
        ]
    )

    const betty = createEnemy(
        "Betty",
        "Rudelady",
        true,
        [
            "Phone calls in the theater",
            "Phone calls on the bus",
            "Phone calls in line at the grocery store",
            "Poor conversationalist"
        ]
    )
    const lenon = createEnemy(
        "Leon",
        "Peck",
        false,
        [
            "Keeps giving me a hotplate"
        ]
    )

    const enemies = [joshua, darth, betty, lenon,]
return enemies 

}

const allTheEnemies = getEnemies()

for (let enemy of allTheEnemies) {
    if (enemy.isReallyHated)
    {
     console.log(`${enemy.firstName} ${enemy.lastName} (Really, really dislike!)`);
    }
    else
    {
     console.log(`${enemy.firstName} ${enemy.lastName}`);
    }
  }