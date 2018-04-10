'use strict';

$(document).ready(function () {
  /* Navigation */
  /* Fixed Nav: initialize */
  $('#fixedNavStart').visibility({
    once: false,
    onBottomPassed: function onBottomPassed() {
      $('.fixed.menu').transition('fade in');
    },
    onBottomPassedReverse: function onBottomPassedReverse() {
      $('.fixed.menu').transition('fade out');
    }
  });
  /* Mobile Nav: initialize */
  $('.ui.sidebar').sidebar('attach events', '#mobileNav');
  /* Mobile Nav: Change color of icon when over white background */
  $('#nav').visibility({
    once: false,
    onBottomPassed: function onBottomPassed() {
      $('#mobileNav i').css({
        color: 'black',
        opacity: 0.6
      });
    },
    onBottomPassedReverse: function onBottomPassedReverse() {
      $('#mobileNav i').css({
        color: 'white',
        opacity: 1
      });
    }
  });
  /* Nav Links: initialize */
  $('.nav-link').click(function scrollNav() {
    var href = $(this).attr('href');
    if (href === '#services') {
      href = '#fixedNavStart';
    }
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500);
  });

  /* Animations */
  /* Nav Links: add hover 'active' effect */
  $('.masthead .nav-link').hover(function addActive() {
    $(this).addClass('active');
  }, function removeActive() {
    $(this).removeClass('active');
  });
  /* Fade in element on page load */
  $('.entry').transition({
    animation: 'fade',
    duration: '1.5s'
  });
  /* Fade in images on scroll */
  $('.lazyload').visibility({
    type: 'image',
    transition: 'fade in',
    duration: 1000
  });
});