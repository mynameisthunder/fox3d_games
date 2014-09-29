$(function(){
    $('nav.main_nav a').smoothScroll({
        offset: -60
    });
    $('nav.mobile_nav a').smoothScroll({
        offset: -140,
        beforeScroll: function() {
            $('.mobile_nav').slideUp();
        }
    });

    onScroll();

    $('.menu_toggle').click(function(e) {
        e.preventDefault();
        $('.mobile_nav').slideToggle();
    });

    $(".slider").owlCarousel({
        singleItem: true
    });
});

function onScroll(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 40) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }
    });
}