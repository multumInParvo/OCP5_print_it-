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

// carrousel function updates the displayed slide
function carrousel(index) {
    const sliderImage = document.querySelector('#banner .banner-img');
    const sliderTagLine = document.querySelector('#banner p');
    const sliderDots = document.querySelectorAll('.dots .dot');

    sliderImage.src = `./assets/images/slideshow/` + slides[index].image;
    sliderTagLine.innerHTML = slides[index].tagLine;

// if i equals to index, it adds class dot_selected, else i removes the class dot_selected
    for (let i = 0; i < sliderDots.length; i++) {
        if (i === index) {
            sliderDots[i].classList.add('dot_selected');
        } else {
            sliderDots[i].classList.remove('dot_selected');
        }
    }
}

function changeSlide(position) {
    currentSlidePosition = (currentSlidePosition + position + slides.length) % slides.length;
    // changeSlide calls carrousel and passes currentSlidePosition as argument to index parameter
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



// looks for .arrow_left selector and goes to previous slide when clicked
document.querySelector('.arrow_left').addEventListener('click', previousSlide);

// looks for .arrow_right selector and goes to next slide when clicked
document.querySelector('.arrow_right').addEventListener('click', nextSlide);

const sliderDots = document.querySelectorAll('.dots .dot');
for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].addEventListener('click', function() {
        carrousel(i);
    });
}
