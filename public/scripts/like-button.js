$(document).ready( () => {
  console.log("like script being loaded");
  $('#postContainer').on('click', '.fa-heart', function () {
    alert('you clicked a star');
    $like = $(this);
    console.log('hasClass(liked)', $like.hasClass('liked'));
    if ($like.hasClass('liked')) {
      $.post("/likes/delete", {resourceId: $like.closest('.post').attr('dbId')}, () => {
        //on success toggle liked class
        $like.toggleClass('liked');
        console.log('inside post to /likes/delete');
      })
    } else {
      $.post("/likes", {resourceId: $like.closest('.post').attr('dbId')}, () => {
        //on success toggle liked class
        $like.toggleClass('liked');
        console.log('inside post to /likes');
      })
    }
  });
})
