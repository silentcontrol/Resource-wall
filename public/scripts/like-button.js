$(document).ready( () => {
  $('#post-container').on('click', '.fa-heart', function () {
    $like = $(this);
    console.log('hasClass(liked)', $like.hasClass('liked'));
    if ($like.hasClass('liked')) {
      $.post("/likes/delete", {resourceId: $like.closest('.jumbotron').attr('dbId')}, () => {
        //on success toggle liked class
        $like.toggleClass('liked');
        console.log('inside post to /likes/delete');
      })
    } else {
      $.post("/likes", {resourceId: $like.closest('.jumbotron').attr('dbId')}, () => {
        //on success toggle liked class
        $like.toggleClass('liked');
        console.log('inside post to /likes');
      })
    }
  });
})
