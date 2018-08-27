$(document).ready( () => {
  console.log("rating script being loaded");
  $('#postContainer').on('click', '.fa-star', function () {
    alert('you clicked a star');
    $star = $(this);
    $parentPost = $star.closest('.post');

    console.log('hasClass(rated)', $parentPost.hasClass('rated'));
    if ($parentPost.hasClass('rated')) {
      $.post("/ratings/update", {
        resourceId: $parentPost.attr('dbId'),
        rating: $star.attr('rating')
      }, (res) => {
        console.log('successful post to /ratings/update');
        //toggle class on stars
        //get average rating from response and update in ejs
        console.log(res);
        console.log(res.newAverage);
      })
    } else {
      $.post("/ratings", {
        resourceId: $parentPost.attr('dbId'),
        rating: $star.attr('rating')
      }, (res) => {
        $parentPost.toggleClass('rated');
        console.log('succesful post to /ratings');
        //toggle class on stars
        //get average rating from response and update in ejs
        console.log(res);
        console.log(res.newAverage);
      })
    }
  });
})
