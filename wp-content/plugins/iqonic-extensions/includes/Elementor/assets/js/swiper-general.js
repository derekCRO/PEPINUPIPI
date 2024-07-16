(function ($) {
    "use strict";
    $(window).ready(function () {
        swiperSliders();
    });
})(jQuery);

function swiperSliders() {
    if (jQuery(document).find('.ele-widget-swiper.swiper').length > 0) {

        jQuery(document).find('.ele-widget-swiper.swiper').each(function (e) {

            let slider = jQuery(this);
            var navNext = (slider.data('navnext')) ? "#" + slider.data('navnext') : "";
            var navPrev = (slider.data('navprev')) ? "#" + slider.data('navprev') : "";
            var pagination = (slider.data('pagination')) ? "#" + slider.data('pagination') : "";
            var sliderAutoplay = slider.data('autoplay');
            if (sliderAutoplay) {
                sliderAutoplay = {
                    delay: slider.data('autoplay')
                };
            }
            var iqonicPagination = {
                el: pagination,
                clickable: true
            };

            var breakpoint = {
                // when window width is >= 0px
                0: {
                    slidesPerView: slider.data('mobile'),
                },
                676: {
                    slidesPerView: slider.data('mobile'),
                },
                // when window width is >= 767px
                768: {
                    slidesPerView: slider.data('tab'),
                },
                // when window width is >= 1024px
                1025: {
                    slidesPerView: slider.data('laptop'),
                },
                // when window width is >= 1366px
                1366: {
                    slidesPerView: slider.data('slide'),
                },
            }
           
            var sw_config = {
                loop: slider.data('loop'),
                speed: slider.data('speed'),
                spaceBetween: slider.data('spacebtslide'),
                slidesPerView: slider.data('slide'),
                centeredSlides: slider.data('center'),
                mousewheel: slider.data('mousewheel'),
                autoplay: sliderAutoplay,
                navigation: {
                    nextEl: navNext,
                    prevEl: navPrev
                },
                pagination: (slider.data('pagination')) ? iqonicPagination : "",
                breakpoints: breakpoint
            };
            var swiper = new Swiper(slider[0], sw_config);
        });

        /* Resize window on load */
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 500);

    }
}
