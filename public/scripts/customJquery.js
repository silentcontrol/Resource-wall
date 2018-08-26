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

// code sourced from https://codepen.io/neilpomerleau/pen/wzxzQr
// logs status of star rating
