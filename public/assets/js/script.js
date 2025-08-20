$(document).ready(function(){
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var target = $(hash);
            $('html, body').animate({
                scrollTop: target.offset().top - 95 // 100px yukarıdan boşluk bırakacak
            }, 800);
        }
    });
});


    document.addEventListener('DOMContentLoaded', function() {
      new Swiper('.announcements-swiper', {
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
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
    });