$(document).ready(function () {
  var _hasClick = false;
  activeTap(_hasClick);
  $(".box-menu .item-menu").click(function () {
    _hasClick = true;
    var _index = $(this).data("index");
    if (_index == 1) {
      $("#content-info").removeClass("hidden-mb");
    } else {
      $("#content-info").addClass("hidden-mb");
    }
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(".box-tab-content .item-tab").removeClass("active");
    $(".box-tab-content .item-tab[data-index=" + _index + "]").addClass(
      "active"
    );
  });
  $(".slider-banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 1500,
    speed: 500,
    pauseOnHover: false,
  });
  $(window).resize(function (e) {
    activeTap(_hasClick);
  });
});
function activeTap(hasClick) {
  if (!hasClick) {
    var _index_tab = 1;
    if ($(window).innerWidth() > 991) {
      _index_tab = 2;
    }
    if (_index_tab == 1) {
      $("#content-info").removeClass("hidden-mb");
    } else {
      $("#content-info").addClass("hidden-mb");
    }
    $(".box-menu .item-menu,.box-tab-content .item-tab").removeClass("active");
    $(
      ".box-menu .item-menu[data-index=" +
        _index_tab +
        "],.box-tab-content .item-tab[data-index=" +
        _index_tab +
        "]"
    ).addClass("active");
  } else {
    if (
      $(window).innerWidth() > 991 &&
      $(".box-menu .item-menu[data-index=1]").hasClass("active")
    ) {
      $(".box-menu .item-menu,.box-tab-content .item-tab").removeClass(
        "active"
      );
      $(
        ".box-menu .item-menu[data-index=2],.box-tab-content .item-tab[data-index=2]"
      ).addClass("active");
    }
  }
}
function clicktap(index) {
  $(".box-menu .item-menu,.box-tab-content .item-tab").removeClass("active");
  $(".box-menu .item-menu[data-index=" + index + "]").addClass("active");
  $(".box-tab-content .item-tab[data-index=" + index + "]").addClass("active");
  $("#content-info").addClass("hidden-mb");
}
