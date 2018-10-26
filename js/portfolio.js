// hovering over atr job

$('#atr').hover(function() {
  $('#atr-listing').finish();
  $('#ames-listing').finish();
  $('#visier-listing').finish();
  $('#jobs').css({"background-image" : "url(https://ixellorin.github.io/images/jobs/kyoto.png)", "background-repeat" : "no-repeat", "background-size" : "cover", "background-position" : "0% 50%"});
  $('#visier-listing').animate({opacity: "0"}, 500);
  $('#ames-listing').animate({opacity: "0"}, 500);
}).mouseleave(function() {
  $('#atr-listing').finish();
  $('#ames-listing').finish();
  $('#visier-listing').finish();
  $('#jobs').css("background-image", "none");
  $('#visier-listing').animate({opacity: "1"}, 500);
  $('#ames-listing').animate({opacity: "1"}, 500);
});

// hovering over ames job

$('#ames').hover(function() {
  $('#atr-listing').finish();
  $('#ames-listing').finish();
  $('#visier-listing').finish();
  $('#jobs').css({"background-image" : "url(https://ixellorin.github.io/images/jobs/vancouver_2.png)", "background-repeat" : "no-repeat", "background-size" : "cover", "background-position" : "0% 50%"});
  $('#atr-listing').animate({opacity: "0"}, 500);
  $('#visier-listing').animate({opacity: "0"}, 500);
}).mouseleave(function() {
  $('#atr-listing').finish();
  $('#ames-listing').finish();
  $('#visier-listing').finish();
  $('#jobs').css("background-image", "none");
  $('#visier-listing').animate({opacity: "1"}, 500);
  $('#atr-listing').animate({opacity: "1"}, 500);
});

// hovering over visier job

$('#visier').hover(function() {
  $('#atr-listing').finish();
  $('#ames-listing').finish();
  $('#visier-listing').finish();
  $('#jobs').css({"background-image" : "url(https://ixellorin.github.io/images/jobs/vancouver.png)", "background-repeat" : "no-repeat", "background-size" : "cover", "background-position" : "0% 50%"});
  $('#atr-listing').animate({opacity: "0"}, 500);
  $('#ames-listing').animate({opacity: "0"}, 500);
}).mouseleave(function() {
  $('#atr-listing').finish();
  $('#ames-listing').finish();
  $('#visier-listing').finish();
  $('#jobs').css("background-image", "none");
  $('#atr-listing').animate({opacity: "1"}, 500);
  $('#ames-listing').animate({opacity: "1"}, 500);
});

// hovering over source project

// $('#source-project').hover(function() {
//   $('#projects-wrapper').css({"background-image" : "url(https://ixellorin.github.io/images/projects/source.png)", "background-repeat" : "no-repeat", "background-size" : "cover", "background-position" : "0% 50%"});
// }).mouseleave(function() {
//   $('#projects-wrapper').css("background-image", "none");
// });
//
// // hovering over freezeframe project
//
// $('#freeze-frame-project').hover(function() {
//   $('#projects-wrapper').css({"background-image" : "url(https://ixellorin.github.io/images/projects/freezeframe.png)", "background-repeat" : "no-repeat", "background-size" : "cover", "background-position" : "0% 50%"});
// }).mouseleave(function() {
//   $('#projects-wrapper').css("background-image", "none");
// });
//
// // hovering over pokemon projects
//
// $('#freeze-frame-project').hover(function() {
//   $('#projects-wrapper').css({"background-image" : "url(https://ixellorin.github.io/images/projects/Pokemon_search.png)", "background-repeat" : "no-repeat", "background-size" : "cover", "background-position" : "0% 50%"});
// }).mouseleave(function() {
//   $('#projects-wrapper').css("background-image", "none");
// });
