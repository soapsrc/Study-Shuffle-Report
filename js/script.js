document.addEventListener('contextmenu', event => event.preventDefault());

// Wrap every letter in a span
var textWrapper3 = document.querySelector('.ml13');
textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter3'>$&</span>");
// Wrap every letter in a span
var textWrapper2 = document.querySelector('.ml16');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml12 .letter',
        opacity: 0,
    })
    .add({
        targets: '.ml13 .letter3',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 300 + 30 * i
    })
    .add({
        targets: '.ml16 .letter2',
        translateY: [-100, 0],
        easing: "easeInOutElastic",
        duration: 1200,
        delay: (el, i) => 30 * i
    }, '-=1')
    .add({
        targets: '.ml12 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 1000,
        delay: (el, i) => 500 + 30 * i
    }, '-=1')

window.onscroll = function() { myFunction() };

var header = document.getElementById("myheader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

function button1() {
    window.open('https://www.figma.com/file/17X9niDSoSJPE4SCrRaKBX/CPSC-581-Project-2?node-id=0%3A1', '_blank')
}

function button2() {
    window.open('https://cloud.protopie.io/p/edec27bf7e', '_blank')
}

function button3() {
    window.open('https://github.com/soapsrc/study-shuffle', '_blank')
}

// Images Area Images
let imagesAreaImages = document.querySelectorAll('.images-area img');
// Images Area First Image
let imagesAreaFirstImage = document.querySelector('.images-area .firstImage');

// Previous And Next Buttons
let previousBtn = document.querySelector('.previous-btn');
let nextBtn = document.querySelector('.next-btn');

// Pagination Area 
let paginationArea = document.querySelector('.pagination-area');

// Current Image Count
let currentImageCount = 1;

// Slider Controler Function
let sliderController;
// Create Pagination Spans Function
let createPaginationSpans;

// Every Click On Buttons
previousBtn.addEventListener('click', previousImage);
nextBtn.addEventListener('click', nextImage);


// Previous Image Function
function previousImage() {
    // If The currentImageCount Is 1
    if (currentImageCount === 1) {
        return false;
    } else { // Else
        // Minus One From currentImageCount
        currentImageCount--;
        // Call Function sliderController();
        sliderController();

    };
};

// Next Image Function
function nextImage() {
    // If The currentImageCount Is imagesAreaImages.length
    if (currentImageCount === imagesAreaImages.length) {
        return false;
    } else { // Else
        // Plus One To currentImageCount
        currentImageCount++;
        // Call Function sliderController();
        sliderController();
    };
};

// Create Pagination Spans [Circls] Function
(function createPaginationSpans() {
    // Loop On All The Images Slider
    for (var i = 0; i < imagesAreaImages.length; i++) {
        // Create Span 
        let paginationSpan = document.createElement('span');
        // Append The Span
        paginationArea.appendChild(paginationSpan)
    };
})();

// Slider Controler Function
(sliderController = function() {
    // Get All The pagination Spans
    let paginationCircls = document.querySelectorAll('.pagination-area span');

    // Call Remore All Active Class Function
    removeAllActive(paginationCircls);

    // Call Remore Active Button Function
    activeButton();

    // The currentImageCount Minus One
    let currentImageMinusOne = currentImageCount - 1;

    // Set Active Class On Current Pagination
    paginationCircls[currentImageMinusOne].classList.add('active');

    // Move The images Area First Image
    imagesAreaFirstImage.style.marginLeft = `-${45 * currentImageMinusOne}vh`;
})();

// Remove All Active Class Function
function removeAllActive(targetElement) {
    for (var i = 0; i < targetElement.length; i++) {
        targetElement[i].classList.remove('active');
    };
};

// Check Active Button Function
function activeButton() {
    // If The Current Image Count Equle 1
    currentImageCount === 1 ?
        // Hide The Previous Button
        previousBtn.classList.add('disabled') :
        // Else: Show The Previous Button
        previousBtn.classList.remove('disabled');

    // If The Current Image Count Equle imagesAreaImages.length
    currentImageCount === imagesAreaImages.length ?
        // Hide The Next Button
        nextBtn.classList.add('disabled') :
        // Else: Show The Next Button
        nextBtn.classList.remove('disabled');
};

// Move Slider Image Every 3 Second 
setInterval(() => {
    // If The Current Image Count Not Equle imagesAreaImages.length
    if (currentImageCount != imagesAreaImages.length) {
        // Plus One
        currentImageCount++;
        // Call Function sliderController();
        sliderController();
    } else { // else
        // Make currentImageCount Equle 1
        currentImageCount = 1;
        // Call Function sliderController();
        sliderController();
    };
}, 3000);

// :)


// Images Area Images
let imagesAreaImages2 = document.querySelectorAll('.images-area2 img');
// Images Area First Image
let imagesAreaFirstImage2 = document.querySelector('.images-area2 .firstImage2');

// Previous And Next Buttons
let previousBtn2 = document.querySelector('.previous-btn2');
let nextBtn2 = document.querySelector('.next-btn2');

// Pagination Area 
let paginationArea2 = document.querySelector('.pagination-area2');

// Current Image Count
let currentImageCount2 = 1;

// Slider Controler Function
let sliderController2;
// Create Pagination Spans Function
let createPaginationSpans2;

// Every Click On Buttons
previousBtn2.addEventListener('click', previousImage2);
nextBtn2.addEventListener('click', nextImage2);


// Previous Image Function
function previousImage2() {
    // If The currentImageCount2 Is 1
    if (currentImageCount2 === 1) {
        return false;
    } else { // Else
        // Minus One From currentImageCount2
        currentImageCount2--;
        // Call Function sliderController2();
        sliderController2();

    };
};

// Next Image Function
function nextImage2() {
    // If The currentImageCount2 Is imagesAreaImages2.length
    if (currentImageCount2 === imagesAreaImages2.length) {
        return false;
    } else { // Else
        // Plus One To currentImageCount2
        currentImageCount2++;
        // Call Function sliderController2();
        sliderController2();
    };
};

// Create Pagination Spans [Circls] Function
(function createPaginationSpans2() {
    // Loop On All The Images Slider
    for (var i = 0; i < imagesAreaImages2.length; i++) {
        // Create Span 
        let paginationSpan = document.createElement('span');
        // Append The Span
        paginationArea2.appendChild(paginationSpan)
    };
})();

// Slider Controler Function
(sliderController2 = function() {
    // Get All The pagination Spans
    let paginationCircls = document.querySelectorAll('.pagination-area2 span');

    // Call Remore All Active Class Function
    removeAllActive2(paginationCircls);

    // Call Remore Active Button Function
    activeButton2();

    // The currentImageCount2 Minus One
    let currentImageMinusOne = currentImageCount2 - 1;

    // Set Active Class On Current Pagination
    paginationCircls[currentImageMinusOne].classList.add('active');

    // Move The images Area First Image
    imagesAreaFirstImage2.style.marginLeft = `-${45 * currentImageMinusOne}vh`;
})();

// Remove All Active Class Function
function removeAllActive2(targetElement) {
    for (var i = 0; i < targetElement.length; i++) {
        targetElement[i].classList.remove('active');
    };
};

// Check Active Button Function
function activeButton2() {
    // If The Current Image Count Equle 1
    currentImageCount2 === 1 ?
        // Hide The Previous Button
        previousBtn2.classList.add('disabled') :
        // Else: Show The Previous Button
        previousBtn2.classList.remove('disabled');

    // If The Current Image Count Equle imagesAreaImages2.length
    currentImageCount2 === imagesAreaImages2.length ?
        // Hide The Next Button
        nextBtn2.classList.add('disabled') :
        // Else: Show The Next Button
        nextBtn2.classList.remove('disabled');
};

// Move Slider Image Every 3 Second 
setInterval(() => {
    // If The Current Image Count Not Equle imagesAreaImages2.length
    if (currentImageCount2 != imagesAreaImages2.length) {
        // Plus One
        currentImageCount2++;
        // Call Function sliderController2();
        sliderController2();
    } else { // else
        // Make currentImageCount2 Equle 1
        currentImageCount2 = 1;
        // Call Function sliderController2();
        sliderController2();
    };
}, 3000);

// :)