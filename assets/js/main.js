$(document).ready(function () {
  console.log("ready!");

  /* **********************Navbar Collapse************************* */
  $(".nav-link").on("click", function () {
    $(".navbar-collapse.navbar-side").collapse("hide");
  });

  /* ********************** owlCarousel ************************* */
  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  // $("#search").on("focus", function () {
  //   $(".search-icon").fadeOut();
  // });
});
