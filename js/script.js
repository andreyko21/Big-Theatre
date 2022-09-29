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
    slidesPerView: 4,
  });

  var swiper3 = new Swiper(".swiper-3", {
  autoHeight: false,
  slidesPerColumn: 2,
  spaceBetween: 30,
  breakpoints: {
    1000:{
    slidesPerView: 4,
    grid: {
      rows: 2,
    },
  },
    792: {
        slidesPerView: 2.5,
        grid: {
          rows: 2,
        },
    },
    0: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    }
  },
  });