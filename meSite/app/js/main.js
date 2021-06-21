

const btnMenu = document.querySelector(".header-open-menu"),
      headerMenu = document.querySelector(".header__menu-nav"),
      $body = document.querySelector("body"),
      headerLink = document.querySelectorAll(".header__link"),
      headerOverlayMenu = document.querySelector('.header__overlay-menu');
      headerWrapperMenu = document.querySelector('.header__wrapper-menu');

const openMenu = (e) => {
  e.preventDefault();
    headerMenu.classList.add("open-menu");
    $body.style.overflowY = "hidden";

    headerMenu.addEventListener("touchmove", function (e) {
      e.preventDefault();
    });
};

const closeMenu = (e) => {
     const target = e.target;
     const test = target.closest('.header__overlay-menu');
     console.log(target);
  headerMenu.classList.remove("open-menu");

  $body.style.overflowY = "auto";
};

btnMenu.addEventListener("click", openMenu);
headerWrapperMenu.addEventListener("click", closeMenu);


for (let e of headerLink)
  e.addEventListener("click", function (n) {
    n.preventDefault();
    const t = e.getAttribute("href");
    $body.style.position = "static";

    document.querySelector(t).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  const swiperSkills = new Swiper('.skills-wrapper', {
    effect: "cube",
    grabCursor: true,
    autoplay: {
      delay: 2000,
    },
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  })

  const swiperSertifacate = new Swiper(".certificate__wrapper-slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const swiperPortfolio = new Swiper(".portfolio__slider-wrapper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 640px
      320:{
        slidesPerView: 1,
      },      
      1280: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    }


  });

