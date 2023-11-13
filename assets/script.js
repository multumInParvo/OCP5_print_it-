const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
    }
];

let currentSlidePosition = 0 // initial position

function slideshow(index) {
    const sliderImage = document.querySelector(".banner-img")
    const sliderTagLine = document.querySelector(".description")
    sliderImage.src = "./assets/images/slideshow/" + slides[index].image
    sliderTagLine.innerHTML = slides[index].tagLine
    selectedDots(index);
}

function addedDots() {
    let dotsContainer = document.querySelector(".dots")
    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement("span") // creates the new element span
        dotsContainer.appendChild(dot) // adds created span as child to parent dotsContainer
        dot.classList.add("dot")
        if (i === 0) { // adds dot_selected to first slide which is on position 0
            dot.classList.add('dot_selected');
        }
        function clickEvent() { // clickEvent function handles the click event for dot. It can also be anonymous without name because it is not used anywhere else
            moveSlide(i - currentSlidePosition); // i is the dot position clicked minus currentSlidePosition = number of positions to move
        }
        dot.addEventListener("click", clickEvent)
    }
}
addedDots()

function selectedDots(selector) { // function with loop condition to add and remove dot_selected
    const dots = document.querySelectorAll('.dot');
    for (let i = 0; i < dots.length; i++) {
        if (i === selector) {
            dots[i].classList.add('dot_selected');
        } else {
            dots[i].classList.remove('dot_selected');
        }
    }
}

function moveSlide(position) { // calculates currentSlidePosition
    currentSlidePosition = (currentSlidePosition + position + slides.length) % slides.length
    slideshow(currentSlidePosition)
}
function nextSlide() {  // moves one position to right
    moveSlide(+1)
}
function prevSlide() { // moves one position to left
    moveSlide(-1)
}
// selects .arrow_right or .arrow_left from html and on click will activate function nextSlide or prevSlide to add or rest 1 position to function moveSlide
const arrowRight = document.querySelector(".arrow_right").addEventListener("click", nextSlide)
const arrowLeft = document.querySelector(".arrow_left").addEventListener("click", prevSlide)
