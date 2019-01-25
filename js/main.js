/**************clickOnDownArrow**************/

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
$("#spectrum-logo").css('display','none');
AOS.init({ disable: 'mobile' });

/*******event-swiper*******/

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true,
    },
    loop:true,
    autoplay: {
        enabled: true,
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
});
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll>600)
    {
        $('#spectrum-logo').fadeIn('100')
    }
    else{
        $('#spectrum-logo').fadeOut('100')
    }
});

// full page .js
// $(document).ready(function() {
// 	$('#container').fullpage({
// 		//options here
// 		autoScrolling:true,
// 		scrollHorizontally: true
// 	});
// });