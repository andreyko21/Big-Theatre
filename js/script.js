var swiper1 = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
  });

  var swiper2 = new Swiper(".swiper-2", {
    watchSlidesProgress: true,
    watchOverflow: true,
    breakpoints: {
      1250: {
        slidesPerView: 4,
    },
      768: {
          slidesPerView: 1.5,
      },
      576: {
        slidesPerView: 1.1,
      }
    },
  });
 

  var swiper3 = new Swiper(".swiper-3", {
  autoHeight: false,
  slidesPerColumn: 2,
  spaceBetween: 30,
  breakpoints: {
    1250:{
    slidesPerView: 4,
    grid: {
      rows: 2,
    },
  },
    768: {
        slidesPerView: 2.5,
        grid: {
          rows: 2,
        },
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    }
  },
  });

  const iconMenu = document.querySelector('.burger-menu');
if(iconMenu){
    const menuHeader = document.querySelector('.header');
    const menuBlocks = document.querySelector('.menu-blocks');
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBlocks.classList.toggle('active');
        menuHeader.classList.toggle('active');
    })
}

var header = $('.header'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});