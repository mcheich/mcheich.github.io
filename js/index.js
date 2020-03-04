
setUpPage();

function setUpPage() {
    addSliderEventListeners();
    addNavHideEventListeners();
    AddCollapseEventListeners();
}

/**
 * Image Carousel Code
 * 
 * Example followed from https://www.w3schools.com/howto/howto_js_slideshow.asp
 * The exmample use some inline JS in the html document,
 * I moved all the JS components to this file.
 */
function addSliderEventListeners() {

    let slideIndex = 1;
    showSlides(slideIndex);

    /**
     * Next / Previous Controls
     */
    let nextButton = document.querySelector('.next');
    let prevButton = document.querySelector('.prev');
    nextButton.addEventListener('click', function () { plusSlides(1); });
    prevButton.addEventListener('click', function () { plusSlides(-1); });

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    /**
     * Dots Controls
     */
    document.querySelector('#slide1').addEventListener('click', function () { currentSlide(1); });
    document.querySelector('#slide2').addEventListener('click', function () { currentSlide(2); });
    document.querySelector('#slide3').addEventListener('click', function () { currentSlide(3); });

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    /**
     * Shuffle slides
     */
    function showSlides(n) {
        var i;
        let slides = document.querySelectorAll(".mySlides_fade");
        let dots = document.querySelectorAll(".dot");

        //Wrap slides back to 1
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}

/**
 * Remove the Navigation bar when "magnet" button pressed
 */
function addNavHideEventListeners() {
    const removeNavButton = document.querySelector(".close");
    removeNavButton.addEventListener('click', function () { removeNav() });

    function removeNav() {

        let navBar = document.querySelectorAll("nav a");
        if (navBar[0].style.display === "none") {
            for (let i = 0; i < navBar.length - 1; i++) {
                navBar[i].style.display = "flex";
                navBar[i].fade
            }
            document.querySelector("nav").style.backgroundColor = "#555";
            document.querySelector("nav").style.justifyContent = "center";
        } else {
            for (let i = 0; i < navBar.length - 1; i++) {
                navBar[i].style.display = "none";
            }
            document.querySelector("nav").style.backgroundColor = "transparent";
            document.querySelector("nav").style.justifyContent = "flex-end";
        }
    }
}

/**
 * Creates collapsable and expandable text below projects
 */
function AddCollapseEventListeners() {

    let coll = document.querySelectorAll('.collapsible');

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function () {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

//Modal can be opened
const modalTriggerElement = document.querySelector('#modal-trigger');

const modalTriggerClickHandler = function () {
    console.log(document.body.className);
    document.body.classList.toggle('modal-open');
}

modalTriggerElement.addEventListener('click', modalTriggerClickHandler);


//Modal can be closed
const modalCloseButton = document.querySelector('#modal button');

const modalCloseButtonClickhandler = function () {
    console.log(document.body.classList);
    document.body.classList.toggle('modal-open');
    console.log(document.body.className);
}


modalCloseButton.addEventListener('click', modalCloseButtonClickhandler);





