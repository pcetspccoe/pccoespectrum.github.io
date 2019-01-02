const scroll1=()=>{
    console.log('click')
    $('#ba1').css('transform','rotate(180deg)')
    setInterval(() => {
        $('#ba1').css('transform', 'rotate(0deg)')
    }, 900);
    $('html, body').animate({
        scrollTop: $(".about-us").offset().top
    }, 1200);
}

// event-swiper

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    
    pagination: {
        el: '.swiper-pagination',
    },
});
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll>663)
    {
        $('#spectrum-logo').fadeIn('100')
    }
    else{
        $('#spectrum-logo').fadeOut('100')
    }
});