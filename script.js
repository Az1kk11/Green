(function() {
    "use strict"
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
    new Swiper('.home-swiper', {
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
            clickable: true
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    new Swiper('.our-swiper', {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            // clickable: true
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
    new Swiper('.portfolio-swiper', {
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
            clickable: true
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    const imgLink = document.querySelectorAll(".portfolio-page .card .btn")
    const blackBox = document.querySelector(".portfolio-page .swiper-black")
    const xmark = document.querySelector(".portfolio-page .xmark i")
    imgLink.forEach((item)=>{
        item.addEventListener("click", ()=>{
            blackBox.classList.add("animeta")
        })
    })
    xmark.addEventListener("click", ()=>{
        blackBox.classList.remove("animeta")
    })


    function filterImg(){
        const btnLinks = document.querySelectorAll(".portfolio-page ul li")
        const filterLinks = document.querySelectorAll(".portfolio-page .cards .card")

        for(let i = 0; i < btnLinks.length; i++){
            btnLinks[i].addEventListener("click",()=>{
                for(let k = 0; k < btnLinks.length; k++){
                    btnLinks[k].classList.remove("active")
                }
                btnLinks[i].classList.add("active")


                let dataFilter = btnLinks[i].getAttribute('data-filter')

                for(let l = 0; l < filterLinks.length; l++){
                    filterLinks[l].classList.remove("active")
                    filterLinks[l].classList.add("hide")

                    if(filterLinks[l].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
                        filterLinks[l].classList.remove('hide')
                        filterLinks[l].classList.add('active')
                    }
                }
            })
        }
    }
    filterImg()
})()