$(document).ready(function() {
  $('.navbar').hide();
  $('#splashLogo').hide();
  $('#splashLogo').fadeIn(2000);
  $('.scroller').hide();
  $('.scroller').fadeIn(3000);
});

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


// Navigation bar transitions
$(function () {
  var lastScrollTop = 400;
  var navbar = $('.navbar');

  $(window).scroll(function(event){
    var st = $(this).scrollTop();

    if (st > lastScrollTop) { // scroll down

      // use this is jQuery full is used
     // navbar.fadeOut()

      // use this to use CSS3 animation
      navbar.show();
      navbar.addClass("fade-in");
      navbar.removeClass("fade-out");
      
      
      // use this if no effect is required
      // navbar.hide();
    } else if (st < 30) {
      navbar.hide();
    } else { // scroll up

      // use this is jQuery full is used
      //navbar.fadeIn()
      
      // use this to use CSS3 animation
      navbar.addClass("fade-out");
      navbar.removeClass("fade-in");
      
      // use this if no effect is required
      // navbar.show();

    }
    // lastScrollTop = st;
  });
});


$(function() {
  $('.scroller').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('.introduction').offset().top}, 600, 'linear');
  });
});

// $(document).ready(function() {

//   //hide feature elements 
//   $(".feature h2").hide();
//   $(".feature p").hide();
//   $(".feature img").hide();

//   //init scrolling event heandler
//   $(document).scroll(function(){

//     var docScroll = $(document).scrollTop(), 
//     feature = $(".feature").offset().top - 70;
    
//     //when reach top of feature, trigger animation
//     if(docScroll >= feature ) {
//       //$('.feature p').toggle("slide", {direction: "right"}, 1000);
//       $(".feature h2").fadeIn(300);
//       $(".feature p").fadeIn(400);
//       $(".feature img").fadeIn(500);
//       //alert(feature);
//       //$("#first").fadeIn(200);
//     } else {
//       $(".feature h2").fadeOut(500);
//       $(".feature p").fadeOut(500);
//       $(".feature img").fadeOut(500);
//      // $("#first").fadeOut(200);
//    }
//  })   
// });

