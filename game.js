let health = 100
let enemyName = 'Frank'
let hits = 0

// function slap() {
//     health--
//     hits++
//     update()
//     console.log(slap)
// }

// function punch() {
//     health -= 5
//     hits++
//     update()
//     console.log(punch)
// }

// function kick() {
//     health -= 10
//     hits++
//     update()
//     console.log(kick)
// }

let attackType = {
    punch: { type: 'Punch', health: 1 },
    sword: { type: 'Sword', health: 5 },
    mace: { type: 'Mace', health: 10 },
}

function attack(atkChoice) {
    let chosenAtk = attackType[atkChoice]
    console.log(chosenAtk)
    health -= chosenAtk.health
    hits++
    update()
}

function enemyHeal() {
    health += 20
}

function update() {
    let btnElem = document.getElementById('health').innerText = health.toString()
    document.getElementById('hits').innerText = hits.toString()
    setInterval(enemyHeal, 5000)
    console.log(enemyHeal)
}

update()