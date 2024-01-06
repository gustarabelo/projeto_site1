const btnRed = document.querySelector(".saibamais")

btnRed.addEventListener("mouseenter", (e) => {

    btnRed.classList.add("scale")

})

btnRed.addEventListener("mouseleave", (e) => {

    btnRed.classList.remove("scale")

})