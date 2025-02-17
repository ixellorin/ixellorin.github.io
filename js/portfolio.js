// hovering over atr job

$('#atr').hover(function() {
  finishATRAnimation();
  $('#atr-image').animate({opacity: "1"}, 500);
  $('#visier-listing').animate({opacity: "0"}, 200);
  $('#ames-listing').animate({opacity: "0"}, 0);
}, function() {
  finishATRAnimation();
  $('#atr-image').animate({opacity: "0"}, 500);
  $('#visier-listing').animate({opacity: "1"}, 200);
  $('#ames-listing').animate({opacity: "1"}, 0);
});

// hovering over ames job

$('#ames').hover(function() {
  finishAMESAnimation();
  $('#ames-image').animate({opacity: "1"}, 500);
  $('#visier-listing').animate({opacity: "0"}, 200);
  $('#atr-listing').animate({opacity: "0"}, 0);
}, function() {
  finishAMESAnimation();
  $('#ames-image').animate({opacity: "0"}, 500);
  $('#visier-listing').animate({opacity: "1"}, 0);
  $('#atr-listing').animate({opacity: "1"}, 0);
});

// hovering over visier job

$('#visier').hover(function() {
  finishVisierAnimation();
  $('#visier-image').animate({opacity: "1"}, 500);
  $('#atr-listing').animate({opacity: "0"}, 200);
  $('#ames-listing').animate({opacity: "0"}, 200);
}, function() {
  finishVisierAnimation();
  $('#visier-image').animate({opacity: "0"}, 500);
  $('#atr-listing').animate({opacity: "1"}, 0);
  $('#ames-listing').animate({opacity: "1"}, 0);
});

function finishATRAnimation() {
  $('#ames-listing').finish();
  // $('#ames-image').finish();
  $('#visier-listing').finish();
  // $('#visier-image').finish();
}

function finishAMESAnimation() {
  $('#atr-listing').finish();
  // $('#atr-image').finish();
  $('#visier-listing').finish();
  // $('#visier-image').finish();
}

function finishVisierAnimation() {
  $('#atr-listing').finish();
  // $('#atr-image').finish();
  $('#ames-listing').finish();
  // $('#ames-image').finish();
}

// hovering over source project

$('#source-project').hover(function() {
  $('#source-project').css({"background-image" : "url(https://ixellorin.github.io/images/projects/source_2.png)", "background-repeat" : "no-repeat", "background-size" : "cover", "background-position" : "0% 50%", "overflow" : "hidden"});
}).mouseleave(function() {
  $('#source-project').css("background-image", "none");
});

// hovering over freezeframe project

$('#freeze-frame-project').hover(function() {
  $('#freeze-frame-project').css({"background-image" : "url(https://ixellorin.github.io/images/projects/freezeframe_2.png)", "background-repeat" : "no-repeat", "background-size" : "cover", "background-position" : "0% 50%"});
}).mouseleave(function() {
  $('#freeze-frame-project').css("background-image", "none");
});

// hovering over pokemon-db projects

$('#pokemon-db-project').hover(function() {
  $('#pokemon-db-project').css({"background-image" : "url(https://ixellorin.github.io/images/projects/Pokemon_search_2.png)", "background-repeat" : "no-repeat", "background-size" : "cover", "background-position" : "0% 50%"});
}).mouseleave(function() {
  $('#pokemon-db-project').css("background-image", "none");
});

// hovering over my-pokemon projects

$('#my-pokemon-project').hover(function() {
  $('#my-pokemon-project').css({"background-image" : "url(https://ixellorin.github.io/images/projects/my-pokemon.png)", "background-repeat" : "no-repeat", "background-size" : "cover", "background-position" : "100% 50%"});
}).mouseleave(function() {
  $('#my-pokemon-project').css("background-image", "none");
});
