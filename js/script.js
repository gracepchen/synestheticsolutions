$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

// Change the speed to whatever you want
// Personally i think 1000 is too much
// Try 800 or below, it seems not too much but it will make a difference

$(function () {
  var lastScrollTop = 100;
  var $navbar = $('.navbar');

  $(window).scroll(function(event){
    var st = $(this).scrollTop();

    if (st > lastScrollTop) { // scroll down
      
      // use this is jQuery full is used
      $navbar.fadeOut()
      
      // use this to use CSS3 animation
      // $navbar.addClass("fade-out");
      // $navbar.removeClass("fade-in");
      
      // use this if no effect is required
      // $navbar.hide();
    } else { // scroll up
      
      // use this is jQuery full is used
      $navbar.fadeIn()
      
      // use this to use CSS3 animation
      // $navbar.addClass("fade-in");
      // $navbar.removeClass("fade-out");
      
      // use this if no effect is required
      // $navbar.show();
    }
    lastScrollTop = st;
  });
});