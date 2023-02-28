jQuery(document).ready(function ($) {
  //let wpcf7Elm = document.querySelector(".wpcf7");

  //if (wpcf7Elm)
  //  wpcf7Elm.addEventListener(
  //    "wpcf7submit",
  //    function (event) {
  //      const eventDetails = event.detail;

  //      if (eventDetails.status === "mail_sent") {
  //        $("#thanku-modal-toggler").click();
  //        const successMessage = document.querySelector(
  //          ".wpcf7-response-output"
  //        );
  //        successMessage.classList.add("d-none");
  //      }
  //    },
  //    false
  //  );

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

  var carTypesSwiper = new Swiper(".carTypesSwiper", {
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
      800: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 5,
      },
    },
  });

  var carListingSwipper = new Swiper(".carListingSwipper", {
    freeMode: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 0,
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
  $(".home-available-car-wrapper").on("mouseover", function (e) {
    //this.classList.add("available-car-hovered");
    $(`#${this.id}-overlay`)[0].classList.remove("d-none");
    $(`#${this.id}-image`)[0].classList.add("available-car-hovered");
  });

  $(".home-available-car-wrapper").on("mouseleave", function () {
    $(`#${this.id}-overlay`)[0].classList.add("d-none");
    $(`#${this.id}-image`)[0].classList.remove("available-car-hovered");
  });
  //-----------------------------------------------------------//

  //navbar---------------------//
  let navbarToggler = $("#main-menu-toggler");
  if (navbarToggler) {
    $("#main-menu-toggler").on("click", function () {
      const isCollapsed = this.classList.contains("collapsed");
      if (isCollapsed) {
        $(`#collapsed-navbar-icon`)[0].classList.remove("d-none");
        $(`#navbar-logo`)[0].classList.remove("d-none");
        $(`#navbar-search`)[0].classList.add("d-none");
        $(`#uncollapsed-navbar-icon`)[0].classList.add("d-none");
      } else {
        $(`#uncollapsed-navbar-icon`)[0].classList.remove("d-none");
        $(`#navbar-logo`)[0].classList.add("d-none");
        $(`#navbar-search`)[0].classList.remove("d-none");
        $(`#collapsed-navbar-icon`)[0].classList.add("d-none");
      }
    });

    $("#search-menu").on("input", (e) => {
      const search = e.target.value.toLowerCase();

      if (!search) {
        $(".main-menu-item").each(function () {
          $(this).removeClass("d-none");
        });
      } else {
        $(".main-menu-item").each(function () {
          if (!$(this)[0].id?.toLowerCase().includes(search))
            $(this).addClass("d-none");
          else $(this).removeClass("d-none");
        });
      }
    });
  }

  //-----------------------------------------------------------//
});
