jQuery(document).ready(function ($) {
  let wpcf7Elm = document.querySelector(".wpcf7");

  if (wpcf7Elm)
    wpcf7Elm.addEventListener(
      "wpcf7submit",
      function (event) {
        const eventDetails = event.detail;

        if (eventDetails.status === "mail_sent") {
          $("#thanku-modal-toggler").click();
          const successMessage = document.querySelector(
            ".wpcf7-response-output"
          );
          successMessage.classList.add("d-none");
        }
      },
      false
    );

  var brandsSwiper = new Swiper(".brandsSwiper", {
    freeMode: true,
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });

  var brandsSwiper = new Swiper(".carTypesSwiper", {
    freeMode: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
        spaceBetween: 5,
      },
    },
  });

  var availableCarsSwipper = new Swiper(".availableCarsSwipper", {
    freeMode: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });

  //available cars overlay on hover feature---------------------//
  $(".home-available-car").on("mouseover", function (e) {
    this.classList.add("available-car-hovered");
    $(`#${this.id}-overlay`)[0].classList.remove("d-none");

  });

  $(".home-available-car").on("mouseleave", function () {
    this.classList.remove("available-car-hovered");
    $(`#${this.id}-overlay`)[0].classList.add("d-none");

  });
  //-----------------------------------------------------------//
});
