let slideNumber = 1;
presentImages(slideNumber);

function moveSlide(n) {
    presentImages(slideNumber += n);
}

function presentSlide(n) {
    presentImages(slideNumber = n);
}

function presentImages(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let pages = document.getElementsByClassName("page");

    if (n > slides.length) {
        slideNumber = 1
    }

    if (n < 1) {
        slideNumber = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < pages.length; i++) {
        pages[i].className = pages[i].className.replace(" active", "");
    }

    slides[slideNumber-1].style.display = "block";
    pages[slideNumber-1].className += " active";
}
