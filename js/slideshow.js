var images=new Array(
  '../images/about/slideshow/black_tusk_gear.png',
  '../images/about/slideshow/nara_fireworks_2.png',
  '../images/about/slideshow/steveston_bookstore.png',
  '../images/about/slideshow/black_tusk_view.png',
  '../images/about/slideshow/stevestone_rocanini');

var nextimage=0;

doSlideshow();

function doSlideshow() {
      if ($('.slideshowimage').length!=0) {
        $('.slideshowimage').fadeOut(1000,function(){slideshowFadeIn();$(this).remove()});
      } else {
        slideshowFadeIn();
      }
    }

function slideshowFadeIn() {
  $('.bg-slideshow').prepend($('<img class="slideshowimage" src="'+images[nextimage++]+'" style="display:none">').fadeIn(1000,
    function() {
      setTimeout(doSlideshow,3000);
    }));
    if(nextimage>=images.length)
        nextimage=0;
}
