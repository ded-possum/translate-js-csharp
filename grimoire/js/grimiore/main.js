// Put your code here
console.log("Do you believe in magic?")
console.log("------------------------")

const createSpell = ({ name, isEvil, energyRequired }) => {
    return { name, isEvil, energyRequired }
  }
  
  const createSpellBook = ( title, spells ) => {
    return { title, spells }
  }
  
  const displaySpellBook = book => {
    console.log(book.title);
    for (const spell of book.spells) {
      console.log(`  ${spell.name}`)
    }
  }
  
  const getAllSpells = () => {
    const allSpells = [
      createSpell({
        name: "Turn enemy into a newt",
        isEvil: true,
        energyRequired: 5.1
      }),
      createSpell({
        name: "Conjure some gold for a local charity",
        isEvil: false,
        energyRequired: 2.99
      }),
      createSpell({
        name: "Give a deaf person the ability to heal",
        isEvil: false,
        energyRequired: 12.2
      }),
      createSpell({
        name: "Make yourself emperor of the universe",
        isEvil: true,
        energyRequired: 100.0
      }),
      createSpell({
        name: "Convince your relatives your political views are correct",
        isEvil: false,
        energyRequired: 2921.5
      }),
    ]
    
    return allSpells
  }
  
  const makeGoodSpellBook = spells => {
    const goodBook = createSpellBook()
    goodBook.title = "Good Book"
    goodBook.spells = spells.filter(spell => !spell.isEvil);
  
    return goodBook;
  }

  const makeEvilSpellBook = spells => {
    const evilBook = createSpellBook()
    evilBook.title = "Evil Book";
    evilBook.spells = spells.filter(spell => spell.isEvil);
  
    return evilBook;
  }
  
  const allSpells = getAllSpells()
  const goodBook = makeGoodSpellBook(allSpells)
  const evilBook = makeEvilSpellBook(allSpells)


  displaySpellBook(goodBook)
  console.log("")
  displaySpellBook(evilBook)
