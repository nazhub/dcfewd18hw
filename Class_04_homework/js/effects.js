$(document).ready(function() {

  $('.readmore').click(function(){
    event.preventDefault();
    $('#show-this-on-click').slideToggle();
    $('.readmore').hide();
    $('.readless').show();
  });

  $('.readless').click(function(){
    $('#show-this-on-click').slideUp();
    $('.readless').hide();
    $('.readmore').show();
    event.preventDefault();
  });

  $('.learnmore').click(function(){
    $('#learnmoretext').slideDown();
    $('.learnmore').hide();
    event.preventDefault();
  });

});



