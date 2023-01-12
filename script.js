// 
// Navgetion Bar Scrol
// 
window.addEventListener("scroll", ()=>{
    let nav = document.querySelector("header")
    nav.classList.toggle("sticky", window.scrollY > 40)
} )

const link = document.querySelectorAll(".links a");
const sec = document.querySelectorAll("section");

function navActiveScroll (){
    let len = sec.length;
    while (--len && window.scrollY + 200 < sec[len].offsetTop){}
    link.forEach(link => link.classList.remove("active"));
    link[len].classList.add("active")
}
navActiveScroll()
window.addEventListener("scroll", navActiveScroll)

//swiper
const swiper = new Swiper('.home-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

new Swiper('.our-swiper', {
    speed: 400,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
    320: {
        slidesPerView: 2,
        spaceBetween: 40
    },
    480: {
        slidesPerView: 3,
        spaceBetween: 60
    },
    640: {
        slidesPerView: 4,
        spaceBetween: 80
    },
    992: {
        slidesPerView: 6,
        spaceBetween: 120
    }
    }
});