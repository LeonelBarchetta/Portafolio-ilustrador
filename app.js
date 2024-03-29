const menu = document.getElementById("menu")
const cerrar = document.getElementById("cerrar")
const nav = document.getElementById("nav")


menu.addEventListener("click", ()=>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
})
