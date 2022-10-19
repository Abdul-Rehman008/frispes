// Find spaces
$('.spaceLocation').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
//   Our spaces 
$('.ourSpaces').slick({
    dots: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    appendArrows:'.spaces-slider-arrow',
    prevArrow:'<img src="./img/rightArrow.svg" class="img-fluid me-4 prevBtn rotation-180 button space-color-left d-none" />',
    nextArrow:'<img src="./img/rightArrow.svg" class="img-fluid nextBtn button space-color-right d-none" />',
    slidesToShow: 3,
    slidesToScroll: 4,
    autoPlay: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                arrows: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: true,
            }
        },
    ]
});

// Reviews
$('.peopleReviews').slick({
    dots: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 4,
    appendArrows:'.reviews-silder-btn',
    prevArrow:'<img src="./img/rightArrow.svg" class="img-fluid me-4 rotation-180 review-color-left d-none" />',
    nextArrow:'<img src="./img/rightArrow.svg" class="img-fluid review-color-right d-none" />',
    autoPlay: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                arrows: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                 arrows: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                 arrows: true,
            }
        },
    ]
});
// Gallery
$('.gallery-slider').slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: "350px",
    arrows: true,
    appendArrows:'.gallery-silder-btn',
    prevArrow:'<img src="./img/rightArrow.svg" class="img-fluid me-4 rotation-180 gallery-color-left d-none" />',
    nextArrow:'<img src="./img/rightArrow.svg" class="img-fluid gallery-color-right d-none" />',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            centerPadding: "10px",
             arrows: true,
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            centerPadding: "10px",
             arrows: true,
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "10px",
             arrows: true,
        }
    },
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: "10px",
             arrows: true,
        }
    },
    {
        breakpoint: 1550,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "120px",
             arrows: true,
        }
    },
]
});

let screen = document.querySelector("#screen");
let btns = document.querySelectorAll(".button");
let count = 01;
btns.forEach((items) => {
    items.addEventListener("click", () => {
        if (items.classList.contains("nextBtn")) {
            count++;
            if (count > 04) {
                count = 1;
            }
        } else if (items.classList.contains("prevBtn")) {
            count--;
            if (count < 1) {
                count = 4;
            }
        }
        screen.innerText = `0${count}`;
    });
});


// tabbing

let homeTab = document.querySelector('#v-pills-home-tab');
let profileTab = document.querySelector('#v-pills-profile-tab');
let msgTab = document.querySelector('#v-pills-messages-tab');
let cafeTab = document.querySelector('#v-pills-cafe-tab');
let spaceTab = document.querySelector('#v-pills-OutdoorSpaces-tab');

let display = document.querySelector("#screen1");
let displayCounter = 1;

let active1 = document.querySelector('.tabAct-1');
let active2 = document.querySelector('.tabAct-2');
let active3 = document.querySelector('.tabAct-3');
let active4 = document.querySelector('.tabAct-4');
let active5 = document.querySelector('.tabAct-5');


homeTab.addEventListener("click", () => {
    active1.classList.add("tab-active");
    if (active1.classList.contains("tab-active")) {
        displayCounter = `1`;
    } 
    if (active2.classList.contains("tab-active") || active3.classList.contains("tab-active") || active4.classList.contains("tab-active") || active5.classList.contains("tab-active")) {
        active2.classList.remove("tab-active");
        active3.classList.remove("tab-active");
        active4.classList.remove("tab-active");
        active5.classList.remove("tab-active");
    }
    screen1.innerText = displayCounter;
});

profileTab.addEventListener("click", () => {
    active2.classList.add("tab-active");
    if (active2.classList.contains("tab-active")) {
        displayCounter = `2`;
    }
    if (active1.classList.contains("tab-active") || active3.classList.contains("tab-active") || active4.classList.contains("tab-active") || active5.classList.contains("tab-active")) {
        active1.classList.remove("tab-active");
        active3.classList.remove("tab-active");
        active4.classList.remove("tab-active");
        active5.classList.remove("tab-active");
    }
    screen1.innerText = displayCounter;
});

msgTab.addEventListener("click", () => {
    active3.classList.add("tab-active");
    if (active3.classList.contains("tab-active")) {
        displayCounter = `3`;
    }
    if (active1.classList.contains("tab-active") || active2.classList.contains("tab-active") || active4.classList.contains("tab-active") || active5.classList.contains("tab-active")) {
        active1.classList.remove("tab-active");
        active2.classList.remove("tab-active");
        active4.classList.remove("tab-active");
        active5.classList.remove("tab-active");
    }
    screen1.innerText = displayCounter;
});

cafeTab.addEventListener("click", () => {
    active4.classList.add("tab-active");
    if (active4.classList.contains("tab-active")) {
        displayCounter = `4`;
    }
    if (active1.classList.contains("tab-active") || active2.classList.contains("tab-active") || active3.classList.contains("tab-active") || active5.classList.contains("tab-active")) {
        active1.classList.remove("tab-active");
        active2.classList.remove("tab-active");
        active3.classList.remove("tab-active");
        active5.classList.remove("tab-active");
    }
    screen1.innerText = displayCounter;
});

spaceTab.addEventListener("click", () => {
    active5.classList.add("tab-active");
    if (active5.classList.contains("tab-active")) {
        displayCounter = `5`;
    }
    if (active1.classList.contains("tab-active") || active2.classList.contains("tab-active") || active4.classList.contains("tab-active") || active3.classList.contains("tab-active")) {
        active1.classList.remove("tab-active");
        active2.classList.remove("tab-active");
        active4.classList.remove("tab-active");
        active3.classList.remove("tab-active");
    }
    screen1.innerText = displayCounter;
});

let spaceLeft = document.querySelector('.space-left');
let spaceRight = document.querySelector('.space-right');
let leftColorSpace = document.querySelector('.space-color-left');
let rightColorSpace = document.querySelector('.space-color-right');

spaceLeft.addEventListener("click", () => {
    if ((spaceLeft.style.display = "block")) {
        spaceLeft.style.display = "none";
        leftColorSpace.style = "display: block !important"
        spaceRight.style.display = "block";
        rightColorSpace.style.display = "none";
    }
});

spaceRight.addEventListener("click", () => {
    if ((spaceRight.style.display = "block")) {
        spaceRight.style.display = "none";
        rightColorSpace.style= "display: block !important";
        spaceLeft.style.display = "block";
        leftColorSpace.style.display = "none";
    }
});
//  gallery section

let galleryLeft = document.querySelector('.gallery-left');
let galleryRight = document.querySelector('.gallery-right');
let leftColorGallery = document.querySelector('.gallery-color-left');
let rightColorGallery = document.querySelector('.gallery-color-right');

galleryLeft.addEventListener("click", () => {
    if ((galleryLeft.style.display = "block")) {
        galleryLeft.style.display = "none";
        leftColorGallery.style = "display: block !important"
        galleryRight.style.display = "block";
        rightColorGallery.style.display = "none";
    }
});

galleryRight.addEventListener("click", () => {
    if ((galleryRight.style.display = "block")) {
        galleryRight.style.display = "none";
        rightColorGallery.style= "display: block !important";
        galleryLeft.style.display = "block";
        leftColorGallery.style.display = "none";
    }
});

// review section

let reviewLeft = document.querySelector('.review-left');
let reviewRight = document.querySelector('.review-right');
let leftColorReview = document.querySelector('.review-color-left');
let rightColorReview = document.querySelector('.review-color-right');

reviewLeft.addEventListener("click", () => {
    if ((reviewLeft.style.display = "block")) {
        reviewLeft.style.display = "none";
        leftColorReview.style = "display: block !important"
        reviewRight.style.display = "block";
        rightColorReview.style.display = "none";
    }
});

reviewRight.addEventListener("click", () => {
    if ((reviewRight.style.display = "block")) {
        reviewRight.style.display = "none";
        rightColorReview.style= "display: block !important";
        reviewLeft.style.display = "block";
        leftColorReview.style.display = "none";
    }
});