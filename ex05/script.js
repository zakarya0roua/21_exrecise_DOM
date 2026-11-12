const moins = document.querySelector("#moins")
const valeur = document.querySelector("#valeur")
const plus = document.querySelector("#plus")
const reset = document.querySelector("#reset")

let compteur = 0;

plus.addEventListener("click", afficher => {
    compteur++
    afficher(compteur)
})
moins.addEventListener("click", afficher => {
    compteur--
    if(compteur < 0) {
        compteur = 0
        return
    }
    afficher(compteur)
    console.log(compteur)
})
reset.addEventListener("click", afficher => {
    compteur = 0
    afficher(compteur)
})

function afficher(compteur){
    valeur.textContent = compteur
}