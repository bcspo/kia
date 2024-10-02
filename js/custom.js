$(function () {
    const mainVisualSlide = new Swiper('.main_visual_slide', {
        parallax: true,
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: '#main_visual .arrows .next',
            prevEl: '#main_visual .arrows .prev',
        },
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },

    });

    $('#footer .to_top a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1200)
    })

});
