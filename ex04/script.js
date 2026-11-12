const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
const p3 = document.querySelector("#p3")



function calculerTTC(prixHT){
    let TVA = prixHT * 20 / 100
    let TTC = prixHT + TVA
    return TTC;  // ila hydna return function 3atrj3 lina undefined
}
console.log(calculerTTC(100))

// const calculerTTC = (prixHT) => {
//     let TVA = prixHT * 20 / 100
//     let TTC = prixHT + TVA
//     return TTC;
// }
// console.log(calculerTTC(100))

function afficherPrix(selector, prixHT){

    selector.textContent = `HT : ${prixHT} DH · TTC : ${calculerTTC(prixHT)} DH`
}
afficherPrix(p1, 100)
afficherPrix(p2, 45)
afficherPrix(p3, 320)


//  return hya li katsmh ll function trj3 lina natij
