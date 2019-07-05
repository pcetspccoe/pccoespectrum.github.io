// intialize
$('html, body').animate({
    scrollTop: $(".landing").offset().top
}, 1200);



/**********Open Gallery**********/

function team() {
    const win = window.open('../pages/gallery.html', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
}

/**************clickOnDownArrow**************/


const scroll0=()=>{
    $('html, body').animate({
        scrollTop: $(".landing").offset().top
    }, 1200);
    $('.container').css('filter','blur(0px)');
    $('.lay').fadeOut(500)
    if($(window).width()<777)
    $('.ham').css('visibility','visible');
    $('body').css('overflow-y','auto')
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
    $('.container').css('filter','blur(0px)');
    $('.lay').fadeOut(500)
    if($(window).width()<777)
    $('.ham').css('visibility','visible');
    $('body').css('overflow-y','auto')
}
const scroll2=()=>{
    $('html, body').animate({
        scrollTop: $(".events").offset().top
    }, 1200);
    $('.container').css('filter','blur(0px)');
    $('.lay').fadeOut(500)
    if($(window).width()<777)
    $('.ham').css('visibility','visible');
    $('body').css('overflow-y','auto')
}
const scroll3=()=>{
    $('html, body').animate({
        scrollTop: $(".map").offset().top
    }, 1200);
    $('.container').css('filter','blur(0px)');
    $('.lay').fadeOut(500)
    if($(window).width()<777)
    $('.ham').css('visibility','visible');
    $('body').css('overflow-y','auto')
}
const scroll4=()=>{
    $('html, body').animate({
        scrollTop: $(".contact_us").offset().top
    }, 1200);
    $('.container').css('filter','blur(0px)');
    $('.lay').fadeOut(500)
    if($(window).width()<777)
    $('.ham').css('visibility','visible');
    $('body').css('overflow-y','auto')
}
const scroll5=()=>{
    $('html, body').animate({
        scrollTop: $(".map").offset().top
    }, 1200);
    $('.container').css('filter','blur(0px)');
    $('.lay').fadeOut(500)
    if($(window).width()<777)
    $('.ham').css('visibility','visible');
    $('body').css('overflow-y','auto')
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
        if(screen.width>800)
            $('.landing').css('background-position-y','-'+scroll*0.09+'vh')
        $('#spectrum-logo').fadeOut('100')
        $('.dock').css('background','none')
        $('.dock ').css('top','2vh')
    }
    if(scroll>750 && screen.width>800){
        $('.events').css('background-position-y','-'+scroll*0.09+'vh')
    }
    if(scroll>950 && screen.width>800){
        $('.map').css('background-position-y','-'+scroll*0.05+'vh')
    }
    if(scroll>1050 && screen.width>800){
        $('.contact_us').css('background-position-y','-'+scroll*0.0005+'vh')
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
  document.getElementById("demo-mob").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "31st March, 2019";
    document.getElementById("demo-mob").innerHTML = "31st March, 2019";
  }
}, 1000);


const mob_show =() =>{
    $('body').css('overflow-y','hidden')
    $('.ham').css('visibility','hidden');
    $('.lay').fadeIn(100)
    $('.container').css('filter','blur(3px)');
    
}

$('.cut').click(()=>{
    $('body').css('overflow-y','auto')
    $('.ham').css('visibility','visible');
    $('.container').css('filter','blur(0px)');
    $('.lay').fadeOut(100)
})

$(".register").click(()=>{
    Swal.fire({
      title:"To register online please install our PCCOE's Spectrum 2019 App from Playstore",
      imageUrl: '../images/swal-logo.png',
      imageAlt: 'playstore',
       
  
    }).then(res=>{
        if(res)
        window.location.href='https://play.google.com/store/apps/details?id=pcets.com.pccoe.spectrum'
    })
  })
