// Smooth scroll this mother!

// Do it when someone clicks a nav link
$('.scroll-to').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});

$('.menu [class^="grid"]:not(:first-of-type)').hide();

$('.menu-nav a').on('click', function (e) {
  e.preventDefault();
  $('.menu-nav a').removeClass('selected');
  $(this).addClass('selected');
  var menuPanel = $(this).data('menu');
  $('.menu-panel').hide();
  $('#' + menuPanel).fadeIn(400);

});

var images = $('.slider img');
var currentImageIndex = 0;

$('.arrow-right').on('click', function (e) {
  e.preventDefault();
  if (currentImageIndex < images.length - 1) {
    currentImageIndex += 1;
  } else {
    currentImageIndex = 0;
  }

  images.hide();
  $('img').eq(currentImageIndex).fadeIn(300);
});


$('.arrow-left').on('click', function (e) {
  e.preventDefault();
  if (currentImageIndex > 0) {
    currentImageIndex -= 1;
  } else {
    currentImageIndex = images.length - 1;
  }
  images.hide();
  $('img').eq(currentImageIndex).fadeIn(300);
});

$('.modal').hide();

$('.close-modal, .content button').on('click', function (e) {
  e.preventDefault();
  $('.modal').hide();
});

$('.make-reservation').on('click', function () {
  $('.modal').fadeIn(300);
});


$(document).on('scroll', function () {
  if ($(document).scrollTop() > 50) {
    $('.main-nav').addClass('scrolled');
  } else {
    $('.main-nav').removeClass('scrolled');
  }

});
