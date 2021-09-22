import home from "../pages/estoque.js"
const main = document.querySelector(".container-principal")
window.addEventListener("load",() => {
    main.appendChild(home())
} )