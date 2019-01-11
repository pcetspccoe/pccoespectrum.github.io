var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  swiper.on('slideChange',()=>{
      console.log('slide')
  })