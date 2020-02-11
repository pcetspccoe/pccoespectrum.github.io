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
    title:"To register online visit the link and fill in the required details. You'll be redirected to the Paytm Payment Gateway",
    imageUrl: '../images/paytm.jpeg',
    imageAlt: 'http://m.p-y.tm/pccoes_nr'

  }).then(res=>{
    if(res)
    window.location.href='http://m.p-y.tm/pccoes_nr'
})
})
$('.home').click(()=>{
  window.location.href='/'
})



