// array of objects
const slides = [
    // object
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    // object
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    // object
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    // object
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
    }
];
// initial position of the slides array
let currentSlidePosition = 0

function slideshow(index) {
    // selects the specified classes in HTML document
    const sliderImage = document.querySelector(".banner-img")
    const sliderTagLine = document.querySelector(".description")
// used concatenation + operator to indicate path for images
sliderImage.src = "./assets/images/slideshow/" + slides[index].image
// indicated path for the descriptions for each slide
sliderTagLine.innerHTML = slides[index].tagLine  

// indicates to index which dot is dot_selected
selectedDots(index);
}

function addedDots () {
    // selects the already existing div with class:"dots" in HTML
    let dotsContainer = document.querySelector(".dots")
    for (let i = 0; i < slides.length; i ++) {
        // creates the new element span
        let dot = document.createElement("span")
        // adds created span as child to parent dotsContainer
        dotsContainer.appendChild(dot)
        // adds properties to .dot from css
        dot.classList.add("dot")
        // adds dot_selected to first slide which is on position 0
        if (i === 0) {
            dot.classList.add('dot_selected');
        }

        dot.addEventListener("click", function () {
            // i is the dot position clicked minus currentSlidePosition = number of pôsitions to move
            moveSlide(i - currentSlidePosition);
        });
    }
}
// calls for addedDots to be displayed
addedDots()
// function with loop condition to add and remove dot_selected
function selectedDots(selector) {
    // variable which selects all the dots dynamically created in js
    const dots = document.querySelectorAll('.dot');
    // for loop initializes i to 0, checks if i is less than length of dots and increments i after each iteration
    for (let i = 0; i < dots.length; i++) {
        if (i === selector) {
            dots[i].classList.add('dot_selected');
        } else {
            dots[i].classList.remove('dot_selected');
        }
    }
}


function moveSlide(position) {
//Example: currentSlidePosition = (0 + 1 + 4) % 4 will display second slide
    currentSlidePosition = (currentSlidePosition + position + slides.length) % slides.length
    // slideshow function receives currentSlidePosition result and send it to function slideshow(index)
    slideshow(currentSlidePosition)
}

function nextSlide() {
    moveSlide(+1)
}

function prevSlide() {
    moveSlide(-1)
}
// selects .arrow_right from html and on click will activate function nextSlide to add 1 position to function moveSlide
const arrowRight = document.querySelector(".arrow_right").addEventListener("click", nextSlide)
// selects .arrow_left from html and on click will activate function prevSlide to rest 1 position from function moveSlide
const arrowLeft = document.querySelector(".arrow_left").addEventListener("click", prevSlide)
