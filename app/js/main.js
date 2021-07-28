$(function() {

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        ratedFill: "#ffa726",
        readOnly: true
    });

    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",

        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function() {
        $('.product__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });

    $('.icon-th-large').on('click', function() {
        $('.product__item').removeClass('list');
        $('.icon-th-list').removeClass('active');
        $('.icon-th-large').addClass('active');
    });

    $('.solo-product__content-tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.solo-product__content-tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.solo-product__content-tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('input[type="file"], select').styler();

    $('.header__bottom-menu-btn').on('click', function() {
        $('.header__bottom-menu-list').slideToggle();
    });
    $('.header__btn-menu').on('click', function() {
        $('.header__top-inner-box').toggleClass('active');
    });

    var mixer = mixitup('.products__inner-box');
});