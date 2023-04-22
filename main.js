let panels = document.querySelectorAll(".panel")
let bodyy = document.querySelector("body")

panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
        removeActiveClasses()
        panel.classList.add("active")
        panel.style.filter = "grayscale(0%)"
    })
    panel.addEventListener('mouseleave',()=>{
        removeActiveClasses()
        panel.style.filter = "grayscale(100%)"

    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}