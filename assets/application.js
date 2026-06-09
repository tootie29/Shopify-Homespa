// Put your application javascript here
document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.querySelector('.site-header__toggle');
  var mainNav = document.getElementById('site-navigation');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  if (window.jQuery && typeof jQuery.fn.slick === 'function') {
    var $sliders = jQuery('.collection-slider__track');
    if ($sliders.length) {
      $sliders.each(function () {
        var $slider = jQuery(this);
        if ($slider.hasClass('slick-initialized')) return;
        $slider.slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          infinite: true,
          centerMode: true,
          centerPadding: '40px',
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
          draggable: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                centerMode: false,
                centerPadding: '0px',
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '20px',
              }
            }
          ]
        });
      });
    }
  }
});
