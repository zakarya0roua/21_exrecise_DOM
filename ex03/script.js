const badge = document.querySelector("#badge");

// const stock = 0
const stock = 2;
// const  stock = 5

if (stock > 0) {
    badge.textContent = "Disponible";
    badge.classList.add("bg-green-200");
} else {
  badge.textContent = "Rupture";
  badge.classList.add("bg-red-200");
}

//operateur ternaire

// stock > 0
//   ? ((badge.textContent = "Disponible"), badge.classList.add("bg-green-200"))
//   : ((badge.textContent = "Rupture"), badge.classList.add("bg-red-200"));

if (stock >= 1 && stock <= 3) {
  badge.textContent = "Presque épuisé";
  badge.classList.add("bg-yellow-200");
} 


