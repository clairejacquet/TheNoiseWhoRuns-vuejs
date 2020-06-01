

// ------ macy img gallery ----------------------------------------------------------------------------

// about page

var macy2 = Macy({
  container: '#macy-gallery',
  trueOrder: false,
  waitForImages: false,
  margin: {
    x: 10,
    y: 16
  },
  columns: 3,
  breakAt: {
    1200: 3,
    940: 2,
    520: 3,
    400: 3
  }
});

// side projects


var macy = Macy({
  container: '#macy-container',
  trueOrder: false,
  waitForImages: false,
  margin: {
    x: 10,
    y: 16
  },
  columns: 3,
  breakAt: {
    1200: 3,
    940: 3,
    520: 2,
    400: 2
  }
});


// ------------ #about | carrousel for mobile ------------


const mySiema = new Siema({
  duration: 1000,
  loop: true,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  multipleDrag: 0
});

// listen for keydown event
setInterval(() => mySiema.next(), 5000)

// ------------ nav-large | : fill background color on scroll ------------

$(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 800) {
      $(".nav_large").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".nav_large").removeClass("active");
    }
  });
});
