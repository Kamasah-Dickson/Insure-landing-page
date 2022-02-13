const toggle = document.getElementById("toggle-open")
const mobileMenu = document.getElementById("menu-mobile")

console.log(toggle)
console.log(mobileMenu)


toggle.addEventListener("click",() =>{
  mobileMenu.classList.toggle("open-mobile")
})