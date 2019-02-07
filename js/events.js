var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  hashNavigation: {
      watchState: true,
  },
//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//   },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
swiper.keyboard.enable()
swiper.on('slideChange', () => {
  console.log('slide')
})

// swap

$(".btnPush").click(()=>{
  Swal.fire({
    title:"To register online please install our PCCOE's Spectrum 2019 App from Playstore",
    imageUrl: '../images/swal-logo.png',
    imageAlt: 'playstore'

  })
})



