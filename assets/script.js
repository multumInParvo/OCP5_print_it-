const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// initial position of image/slide 
let currentSlidePosition = 0;

function changeSlide(position) {
    currentSlidePosition = (currentSlidePosition + position + slides.length) % slides.length;
    carrousel(currentSlidePosition);
}

// calls changeSlide function and goes 1 position back
function previousSlide() {
    changeSlide(-1);
}

// calls changeSlide function and goes 1 position next
function nextSlide() {
    changeSlide(1);
}

function carrousel(positionOrder) {
    const sliderImage = document.querySelector('#banner .banner-img');
    const sliderTagLine = document.querySelector('#banner p');
    const sliderDots = document.querySelectorAll('.dots .dot');

    sliderImage.src = `./assets/images/slideshow/${slides[positionOrder].image}`;
    sliderTagLine.innerHTML = slides[positionOrder].tagLine;

    for (let i = 0; i < sliderDots.length; i++) {
        if (i === positionOrder) {
            sliderDots[i].classList.add('dot_selected');
        } else {
            sliderDots[i].classList.remove('dot_selected');
        }
    }
}

// looks for .arrow_left selector and goes to previous slide when clicked
document.querySelector('.arrow_left').addEventListener('click', previousSlide);

// looks for .arrow_right selector and goes to next slide when clicked
document.querySelector('.arrow_right').addEventListener('click', nextSlide);

const dots = document.querySelectorAll('.dots .dot');
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
        carrousel(i);
    });
}
