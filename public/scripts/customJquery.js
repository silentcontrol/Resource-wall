$('body').on('click','.show', function() {
 $(this).closest('.post').find('.hide').toggle();
 $(this).closest('.post').find('.show').toggle();
 $(this).closest('.post').find(".commentContainer").slideDown();
});
$('body').on('click','.hide', function() {
 $(this).closest('.post').find('.show').toggle();
 $(this).closest('.post').find('.hide').toggle();
 $(this).closest('.post').find(".commentContainer").slideUp();
});



$('body').on('click','.commentSubmit', function(e) {
 e.preventDefault();
 $('.commentInput').val('');
});




  $('body').on('click', '.fa-star', function () {
    if($(this).hasClass('star1')){
      $(this).closest('.post').find(".star1").addClass('fillStar');
      $(this).closest('.post').find(".star2").removeClass('fillStar');
      $(this).closest('.post').find(".star3").removeClass('fillStar');
      $(this).closest('.post').find(".star4").removeClass('fillStar');
      $(this).closest('.post').find(".star5").removeClass('fillStar');

    } else if($(this).hasClass('star2')){
      $(this).closest('.post').find(".star1").addClass('fillStar');
      $(this).closest('.post').find(".star2").addClass('fillStar');
      $(this).closest('.post').find(".star3").removeClass('fillStar');
      $(this).closest('.post').find(".star4").removeClass('fillStar');
      $(this).closest('.post').find(".star5").removeClass('fillStar');

    } else if($(this).hasClass('star3')){
      $(this).closest('.post').find(".star1").addClass('fillStar');
      $(this).closest('.post').find(".star2").addClass('fillStar');
      $(this).closest('.post').find(".star3").addClass('fillStar');
      $(this).closest('.post').find(".star4").removeClass('fillStar');
      $(this).closest('.post').find(".star5").removeClass('fillStar');

    } else if($(this).hasClass('star4')){
      $(this).closest('.post').find(".star1").addClass('fillStar');
      $(this).closest('.post').find(".star2").addClass('fillStar');
      $(this).closest('.post').find(".star3").addClass('fillStar');
      $(this).closest('.post').find(".star4").addClass('fillStar');
      $(this).closest('.post').find(".star5").removeClass('fillStar');
    }
    else if($(this).hasClass('star5')){
      $(this).closest('.post').find(".star1").addClass('fillStar');
      $(this).closest('.post').find(".star2").addClass('fillStar');
      $(this).closest('.post').find(".star3").addClass('fillStar');
      $(this).closest('.post').find(".star4").addClass('fillStar');
      $(this).closest('.post').find(".star5").addClass('fillStar');
    }
  })


// code sourced from https://codepen.io/neilpomerleau/pen/wzxzQr
// logs status of star rating

