jQuery(document).readmore(function(){

// Prevent link from scrolling to the top of the page
  jQuery(".readmore").click(function(event) {
    event.preventDefault();
  });
});


function toggleAnswer1() {
  $('#answer1').slideToggle();
}






