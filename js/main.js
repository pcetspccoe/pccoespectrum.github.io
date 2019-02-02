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
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: false,
    },
    loop: true,
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
    else if(scroll<600){
        $('#spectrum-logo').fadeOut('100')
    }
    // else if(scroll>3000){
    //     $('#spectrum-logo').css('top','29vh');
    //     $('#spectrum-logo').css('right','7em');
    //     $('#spectrum-logo').css('height','17vh');
    //     $('#spectrum-logo').css('left','0');
        

    // }
});

// full page .js
// $(document).ready(function() {
// 	$('#container').fullpage({
// 		//options here
// 		autoScrolling:true,
// 		scrollHorizontally: true
// 	});
// });
