$(document).ready(function () {

  var $images = $('a');

  $("#search-box").on("keyup", function() {
    var search = $(this).val().toLowerCase();
    $($images).each(function() {
      var caption = $(this).data('caption').toLowerCase();
      if(caption.indexOf(search) !== -1){
        $(this).closest('.col-3').fadeIn();
      } else {
        $(this).closest('.col-3').fadeOut();
      }
    })
  })

});
