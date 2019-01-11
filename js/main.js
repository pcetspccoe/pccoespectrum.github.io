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

/*******SWAL*******/

$('#brain-dasher-card').click(()=>{ 
    Swal({
        title: 'Brain Dasher',
        text: 'Tempor dolore cupidatat pariatur incididunt in ut fugiat nostrud sint minim sunt dolore adipisicing magna est deserunt consequat do officia occaecat.',
        type: 'info',
        confirmButtonText: 'Register',
        showCancelButton: 'true',
        cancelButtonText: 'Close',
    }).then((result) => {
        if (result.value) {
            var win = window.open('http://stackoverflow.com/', '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        }
    })
})

$('#paper-persentation-card').click(()=>{ 
    Swal({
        title: 'Paper Presentation',
        text: 'Tempor dolore cupidatat pariatur incididunt in ut fugiat nostrud sint minim sunt dolore adipisicing magna est deserunt consequat do officia occaecat.',
        type: 'info',
        confirmButtonText: 'Register',
        showCancelButton: 'true',
        cancelButtonText: 'Close',
    }).then((result) => {
        if (result.value) {
            var win = window.open('http://stackoverflow.com/', '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        }
    })
})

$('#c-coder-card').click(()=>{ 
    Swal({
        title: 'C Coder',
        text: 'Tempor dolore cupidatat pariatur incididunt in ut fugiat nostrud sint minim sunt dolore adipisicing magna est deserunt consequat do officia occaecat.',
        type: 'info',
        confirmButtonText: 'Register',
        showCancelButton: 'true',
        cancelButtonText: 'Close',
    }).then((result) => {
        if (result.value) {
            var win = window.open('http://stackoverflow.com/', '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        }
    })
})

$('#catapult-card').click(()=>{ 
    Swal({
        title: 'Catapult',
        text: 'Tempor dolore cupidatat pariatur incididunt in ut fugiat nostrud sint minim sunt dolore adipisicing magna est deserunt consequat do officia occaecat.',
        type: 'info',
        confirmButtonText: 'Register',
        showCancelButton: 'true',
        cancelButtonText: 'Close',
    }).then((result) => {
        if (result.value) {
            var win = window.open('http://stackoverflow.com/', '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        }
    })
})

$('#treasure-card').click(()=>{ 
    Swal({
        title: 'Treasure Hunt',
        text: 'Tempor dolore cupidatat pariatur incididunt in ut fugiat nostrud sint minim sunt dolore adipisicing magna est deserunt consequat do officia occaecat.',
        type: 'info',
        confirmButtonText: 'Register',
        showCancelButton: 'true',
        cancelButtonText: 'Close',
    }).then((result) => {
        if (result.value) {
            var win = window.open('http://stackoverflow.com/', '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        }
    })
})

$('#short-movie-card').click(()=>{ 
    Swal({
        title: 'Short Movie Making',
        text: 'Tempor dolore cupidatat pariatur incididunt in ut fugiat nostrud sint minim sunt dolore adipisicing magna est deserunt consequat do officia occaecat.',
        type: 'info',
        confirmButtonText: 'Register',
        showCancelButton: 'true',
        cancelButtonText: 'Close',
    }).then((result) => {
        if (result.value) {
            var win = window.open('http://stackoverflow.com/', '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        }
    })
})

$('#model-making-card').click(()=>{ 
    Swal({
        title: 'Model Making',
        text: 'Tempor dolore cupidatat pariatur incididunt in ut fugiat nostrud sint minim sunt dolore adipisicing magna est deserunt consequat do officia occaecat.',
        type: 'info',
        confirmButtonText: 'Register',
        showCancelButton: 'true',
        cancelButtonText: 'Close',
    }).then((result) => {
        if (result.value) {
            var win = window.open('http://stackoverflow.com/', '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        }
    })
})

$('#robo-soccer-card').click(()=>{ 
    Swal({
        title: 'Robo Soccer',
        text: 'Tempor dolore cupidatat pariatur incididunt in ut fugiat nostrud sint minim sunt dolore adipisicing magna est deserunt consequat do officia occaecat.',
        type: 'info',
        confirmButtonText: 'Register',
        showCancelButton: 'true',
        cancelButtonText: 'Close',
    }).then((result) => {
        if (result.value) {
            var win = window.open('http://stackoverflow.com/', '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        }
    })
})

$('#electrica-card').click(()=>{ 
    Swal({
        title: 'Electrica',
        text: 'Tempor dolore cupidatat pariatur incididunt in ut fugiat nostrud sint minim sunt dolore adipisicing magna est deserunt consequat do officia occaecat.',
        type: 'info',
        confirmButtonText: 'Register',
        showCancelButton: 'true',
        cancelButtonText: 'Close',
    }).then((result) => {
        if (result.value) {
            var win = window.open('http://stackoverflow.com/', '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        }
    })
})

$('#aero-modelling-card').click(()=>{ 
    Swal({
        title: 'Aero Modelling',
        text: 'Tempor dolore cupidatat pariatur incididunt in ut fugiat nostrud sint minim sunt dolore adipisicing magna est deserunt consequat do officia occaecat.',
        type: 'info',
        confirmButtonText: 'Register',
        showCancelButton: 'true',
        cancelButtonText: 'Close',
    }).then((result) => {
        if (result.value) {
            var win = window.open('http://stackoverflow.com/', '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        }
    })
})

// clock
