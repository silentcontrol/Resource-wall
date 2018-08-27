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