const animatedTags = document.querySelectorAll("h2, h3, p, section.img, a.button")

// fade out on load 
animatedTags.forEach(tag => {
    tag.style.opacity = 0
})

// fade in 
const fadeIn = function () {  
    console.log("fade.in")
}

// on load, run fadeIn
fadeIn()

// on scroll, run fadeIn 
document.addEventListener("scroll", function () {
    fadeIn()
})

// on browser resize, run fadeIn 
window.addEventListener("resize", function () {
    fadeIn()
})