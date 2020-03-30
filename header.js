// when user scrolls down page, at a certain point, 
// add a class to make the header white 

const headerTag = document.querySelector("header")

const toggleHeader = function () {
    const pixels = window.pageYOffset

    if (pixels > 60) {
        headerTag.classList.add("scrolled")
    } else {
        headerTag.classList.remove("scrolled")
    }
}

//on load 
toggleHeader()

// on scroll 
document.addEventListener("scroll", function () {
    toggleHeader()
})