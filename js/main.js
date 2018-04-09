$(document)
  .ready(() => {

    $('.entry')
      .transition({
        animation: 'fade',
        duration: '1.5s',
      })

    $('.lazyload')
      .visibility({
        type: 'image',
        transition: 'fade in',
        duration: 1000
      })

    // fix menu when passed
    $('#fixedNavStart')
      .visibility({
        once: false,
        onBottomPassed: () => {
          $('.fixed.menu').transition('fade in')
        },
        onBottomPassedReverse: () => {
          $('.fixed.menu').transition('fade out')
        }
      })

    /* Change color of mobile menu icon when over white background */
    $('#nav')
      .visibility({
        once: false,
        onBottomPassed: () => {
          $('#mobileNav i').css({
            color: 'black',
            opacity: 0.6
          })
        },
        onBottomPassedReverse: () => {
          $('#mobileNav i').css({
            color: 'white',
            opacity: 1
          })
        }
      })

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '#mobileNav')

    $('.masthead .nav-link').hover(
      function () { $(this).addClass('active') },
      function () { $(this).removeClass('active') }
    )

    // enable nav links
    $('.nav-link').click(function() {
      let href = $(this).attr('href')
      if (href === '#offerings') {
        href = '#fixedNavStart'
      }
      // on click, animate scroll
      $('html, body').animate({
        scrollTop: $(href).offset().top,
      }, 500)
    })
  })
