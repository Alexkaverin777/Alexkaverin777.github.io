$(function(){

$('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: ' <img src="img/arrowLeft.svg" alt="arrowRight" class="slic-arrow-left">',
    nextArrow: ' <img src="img/arrowRight.svg" alt="arrowRight" class="slic-arrow-right">',
    asNavFor: '.slider-dots'
});

$('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider'
});

$('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ' <img src="img/arrowLeft.svg" alt="arrowRight" class="slic-arrow-left">',
    nextArrow: ' <img src="img/arrowRight.svg" alt="arrowRight" class="slic-arrow-right">',
    asNavFor: '.surf-map-slider'
});

 $('.surf-map-slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.surf-slider',

})

// $shit.on('beforeChange', (e, slick, currentSlide, nextSlide) => {
//     console.log('beforeChange', nextSlide);
// })



// window.setTimeout(() => {
//     $shit.slick('slickGoTo', 5);
// }, 5000);

// const $slider = document.getElementById('surf-map-slider');

// $slider.addEventListener('click', e => {
//     e.preventDefault();
//     const $target = e.target;
//     if (!$target.classList.contains('map-dots__circle')) {
//         return;
//     }

//     const $activeElem = $slider.querySelector('.activ-circle');
//     $activeElem && $activeElem.classList.remove('activ-circle');

//     $target.nextElementSibling.classList.add('activ-circle')
// })
});

