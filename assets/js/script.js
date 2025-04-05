const logo_slider = new Swiper(".logo_slider", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 4,
    },
    480: {
      slidesPerView: 3,
    },
    300: {
      slidesPerView: 2,
    }
  },
});


const testimonial_sider = new Swiper(".testimonial_sider", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper(".product_slider", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".product_slider2", {
  loop: true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});




document.querySelectorAll('.video-custom').forEach(container => {
  const video = container.querySelector('video');
  const playButton = container.querySelector('.play-btn');
  const pauseButton = container.querySelector('.pause-btn');

  playButton.addEventListener('click', () => {
    video.play().then(() => {
      playButton.classList.add('vplay');
      pauseButton.classList.remove('vpause');
      container.classList.add('playvideo');
    }).catch(err => {
      console.log('Video play error:', err);
    });
  });

  pauseButton.addEventListener('click', () => {
    video.pause();
    playButton.classList.remove('vplay');
    pauseButton.classList.add('vpause');
    container.classList.remove('playvideo');
  });
});




var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});

$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").toggleClass("active");
});


$("#search_icon").click(function() {
  if (window.innerWidth > 992) {
    $("#menu").toggleClass("add_search");
  }
  
  $(".search_bar").toggleClass("show");
});


$(window).scroll(function(){
  if($(this).scrollTop() > 150){
      $('.bottom_header').addClass('sticky')
  } else{
      $('.bottom_header').removeClass('sticky')
  }
});