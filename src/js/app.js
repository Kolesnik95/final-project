$( document ).ready(function() {
    //nav btn
    $('.nav__btn').click(function(){
        $('.nav').toggleClass('active');
    })

    $('.team').slick({
        arrows: false,
        dots: true
    });
});
