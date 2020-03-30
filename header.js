// when user scrolls down page, at a certain point, 
// add a class to make the header white 

const headerTag = document.querySelector("header")

const toggleHeader = function () {
    const pixels = window.pageYOffset

    if (pixels > 64) {
        headerTag.classList.add("scrolled")
    } else {
        headerTag.classList.remove("scrolled")
    }
}

const fadeBox = function () {
    // pixels is how far youve scrolled 
    const pixels = window.pageYOffset
    //weighted it by dividing by 1000 so it fades in a lot slower 
    const alpha = Math.min(pixels / 1000, 0.5)

    headerTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`
}

//on load 
fadeBox()
toggleHeader()

// on scroll 
document.addEventListener("scroll", function () {
    toggleHeader()
    fadeBox()
})