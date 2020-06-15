$(document).ready(function () {
  //set options
  let speed = 500; //fade speed
  let autoSwitch = true; //auto slider option
  let autoSwitch_speed = 4000; //auto slider speed

  //Add initila active class
  $('.slide').first().addClass('active');

  //hide all slide
  $('.slide').hide();

  //show first slide
  $('.active').show();

  $('.next').on('click', function () {
    $('.active').removeClass('active').addClass('oldActive');
    if ($('.oldActive').is(':last-child')) {
      $('.slide').first().addClass('active');
    } else {
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  });

  $('.prev').on('click', function () {
    $('active').removeClass('active').addClass('oldActive');
    if ($('.oldActive').is(':first-child')) {
      $('slide').last().addClass('active');
    } else {
      $('oldActive').prev().addClass('active');
    }
    $('oldActive').removeClass('oldActive');
    $('slide').fadeOut(speed);
    $('active').fadeIn(speed);
  });

  if (autoSwitch == true) {
    setInterval(function () {
      $('.active').removeClass('active').addClass('oldActive');
      if ($('.oldActive').is(':last-child')) {
        $('.slide').first().addClass('active');
      } else {
        $('.oldActive').next().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
    }, autoSwitch_speed);
  }
});
