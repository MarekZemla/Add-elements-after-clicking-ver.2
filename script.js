const btn = document.querySelector("button");
const Contener = document.querySelector("ul");

let number = 1;

const AddLi = function(){
    const Li = document.createElement("li");
    Li.textContent = number;
    if (number % 3 == 0) {
    Li.classList.add("big");
 }
    Contener.appendChild(Li);
    number += 2 ; 
}

btn.addEventListener("click", AddLi)