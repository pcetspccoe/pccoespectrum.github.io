// intialize
$('html, body').animate({
    scrollTop: $(".landing").offset().top
}, 1200);




/**************clickOnDownArrow**************/
const scroll0=()=>{
    $('html, body').animate({
        scrollTop: $(".landing").offset().top
    }, 1200);
}
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
const scroll2=()=>{
    $('html, body').animate({
        scrollTop: $(".events").offset().top
    }, 1200);
}
const scroll3=()=>{
    $('html, body').animate({
        scrollTop: $(".map").offset().top
    }, 1200);
}
const scroll4=()=>{
    $('html, body').animate({
        scrollTop: $(".contact_us").offset().top
    }, 1200);
}
const scroll5=()=>{
    $('html, body').animate({
        scrollTop: $(".map").offset().top
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
        
        if (jQuery(window).width() > 780) {
            $('.dock ').css('background','#2b2a2dc9')
        $('.dock ').css('top','0')
        $('.dock ').css('height','8vh')
        }  

    }
    else if(scroll<600){
        $('#spectrum-logo').fadeOut('100')
        $('.dock').css('background','none')
        $('.dock ').css('top','2vh')
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
// timer
// Set the date we're counting down to
var countDownDate = new Date("Mar 31, 2019 :00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


const mob_show =() =>{
    $('.ham').css('visibility','hidden');
    $('.container').css('filter','blur(3px)');
    $('.lay').css('display','block')
}

$('.cut').click(()=>{
    $('.ham').css('visibility','visible');
    $('.container').css('filter','blur(0px)');
    $('.lay').css('display','none')
})

$(".register").click(()=>{
    Swal.fire({
      title:"To register online please install our PCCOE's Spectrum 2019 App from Playstore",
      imageUrl: '../images/swal-logo.png',
      imageAlt: 'playstore'
  
    })
  })