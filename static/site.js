jQuery(document).ready(function ($) {
  let wpcf7Elm = document.querySelector(".wpcf7");

  if (wpcf7Elm) {
    //wpcf7Elm.addEventListener(
    //  "wpcf7invalid",
    //  function (e) {
    //    setTimeout(function () {
    //      $(".wpcf7-not-valid-tip").prepend(
    //        "<i class='fa-sharp fa-solid fa-circle-exclamation me-2'></i>"
    //      );
    //    }, 300);
    //  },
    //  false
    //);

    wpcf7Elm.addEventListener(
      "wpcf7submit",
      function (e) {
        const responseMessage = document.querySelector(
          ".wpcf7-response-output"
        );
        responseMessage.classList.add("d-none");
      },
      false
    );
  }

  //CONTACT FORM 7
  let car = $(".wpcf7-form-control.wpcf7-select.post");
  let isPreSelected = $("#preSelectedCar");

  if (car.length && isPreSelected.length) {
    $(car).attr("disabled", true);
  }

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

//google maps
(function ($) {
  window.initGoogleMaps = initGoogleMaps;
  function initGoogleMaps() {
    $(".acf-map").each(function () {
      var map = initMap($(this));
    });
  }
  /**
   * initMap
   *
   * Renders a Google Map onto the selected jQuery element
   *
   * @date    22/10/19
   * @since   5.8.6
   *
   * @param   jQuery $el The jQuery element.
   * @return  object The map instance.
   */
  function initMap($el) {
    // Find marker elements within map.
    var $markers = $el.find(".marker");

    // Create gerenic map.
    var mapArgs = {
      zoom: $el.data("zoom") || 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map = new google.maps.Map($el[0], mapArgs);

    // Add markers.
    map.markers = [];
    $markers.each(function () {
      initMarker($(this), map);
    });

    // Center map based on markers.
    centerMap(map);

    // Return map instance.
    return map;
  }

  /**
   * initMarker
   *
   * Creates a marker for the given jQuery element and map.
   *
   * @date    22/10/19
   * @since   5.8.6
   *
   * @param   jQuery $el The jQuery element.
   * @param   object The map instance.
   * @return  object The marker instance.
   */
  function initMarker($marker, map) {
    // Get position from marker.
    var lat = $marker.data("lat");
    var lng = $marker.data("lng");
    var latLng = {
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    };

    // Create marker instance.
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
    });

    // Append to reference for later use.
    map.markers.push(marker);

    // If marker contains HTML, add it to an infoWindow.
    if ($marker.html()) {
      // Create info window.
      var infowindow = new google.maps.InfoWindow({
        content: $marker.html(),
      });

      // Show info window when marker is clicked.
      google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    }
  }

  /**
   * centerMap
   *
   * Centers the map showing all markers in view.
   *
   * @date    22/10/19
   * @since   5.8.6
   *
   * @param   object The map instance.
   * @return  void
   */
  function centerMap(map) {
    // Create map boundaries from all map markers.
    var bounds = new google.maps.LatLngBounds();
    console.log(bounds);
    map.markers.forEach(function (marker) {
      bounds.extend({
        lat: marker.position.lat(),
        lng: marker.position.lng(),
      });
    });

    // Case: Single marker.
    if (map.markers.length == 1) {
      map.setCenter(bounds.getCenter());
    } else {
      map.fitBounds(bounds);
    }
  }
})(jQuery);

function initGoogleMaps() {
  console.log("init");
  jQuery(".acf-map").each(function () {
    var map = initMap(jQuery(this));
  });
}
