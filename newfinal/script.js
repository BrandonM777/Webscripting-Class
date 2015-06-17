$(function () {
// $("h3").on("click", function () {
// $(this).parent().parent().find(".definition").slideDown();
//     });
// $(".definition").find("button").on("click", function () {
// $(this).siblings(".check").find("img").remove();
// $(this).parent().siblings(".check").append().html('<img id="image" src="img/check_box.png" />');
// $(this).parent().slideUp();
//     });


  /*MAIN HEADING BUTTON*/
  $('.checkbox, h3').on('click', function() {
    $(this).parent().animate({
      'height': '260px'
    }, 'fast');
    $(this).parent().find('.more').slideDown('fast');
  });
  /*CLOSE BUTTON*/
  $('.closeButton').on('click', function() {
    var bkgWidth = $('.loadBarBkg').width(),
      loadBarWidth = $('.loadBar').width(),
      numBoxes = $('.checkbox').length,
      checkChecked = $(this).parents('.wrapper').find('.check').css('display'),
      addWidth = Math.ceil(bkgWidth / numBoxes + loadBarWidth);
    $(this).parent().parent().animate({
      'height': '70px'
    }, 'fast');
    $(this).parent().slideUp('fast');
    $(this).parent().siblings('.more2').slideUp('fast');
    $(this).parent().parent().find('.check').fadeIn();
    if (loadBarWidth == 0 || checkChecked == "none") {
      $('.loadBar').velocity({
        width: addWidth
      });
    }
  });
 /* MORE BUTTON */
  $('.example').on('click', function() {
    var wrapperHeight = $(this).parents('.wrapper').height();
    $(this).parents('.wrapper').animate({
      'height': '400px'
    }, 'fast');
    $(this).parent().siblings('.more2').slideToggle(250);
    if ( wrapperHeight > 130) {
      $(this).parents('.wrapper').animate({
        'height': '600px'
      }, 300);
    }
  });


});
