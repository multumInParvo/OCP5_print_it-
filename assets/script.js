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

let currentSlidePosition = 0

function slideshow(index) {
    const sliderImage = document.querySelector(".banner-img")
    const sliderTagLine = document.querySelector(".description")

sliderImage.src = "./assets/images/slideshow/" + slides[index].image
sliderTagLine.innerHTML = slides[index].tagLine  

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
// calls for addedDots
addedDots()

function selectedDots(selector) {
    const dots = document.querySelectorAll('.dot');

    for (let i = 0; i < dots.length; i++) {
        if (i === selector) {
            dots[i].classList.add('dot_selected');
        } else {
            dots[i].classList.remove('dot_selected');
        }
    }
}


function moveSlide(position) {
    currentSlidePosition = (currentSlidePosition + position + slides.length) % slides.length
    slideshow(currentSlidePosition)
}

function nextSlide() {
    moveSlide(+1)
}

function prevSlide() {
    moveSlide(-1)
}

const arrowRight = document.querySelector(".arrow_right").addEventListener("click", nextSlide)
const arrowLeft = document.querySelector(".arrow_left").addEventListener("click", prevSlide)
