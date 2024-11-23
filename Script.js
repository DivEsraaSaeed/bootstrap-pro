new Swiper('.card-wrapper', {
        loop: true,
        spaceBetween: 30,

        // If we need pagination
        pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
        },

        breakpoints: {
                0: {
                        sludesPerView: 1
                },
                320: {
                        sludesPerView: 2
                },
                768: {
                        sludesPerView: 4
                },
                1024: {
                        sludesPerView: 8
                },
        }
});