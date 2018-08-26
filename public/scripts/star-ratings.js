$(document).ready( () => {
  console.log("script being loaded");
  $('#post-container').on('click', '.fa-star', function () {
    $star = $(this);
    $parentPost = $star.closest('.jumbotron');

    console.log('hasClass(rated)', $parentPost.hasClass('rated'));
    if ($parentPost.hasClass('rated')) {
      $.post("/ratings/update", {
        resourceId: $parentPost.attr('dbId'),
        rating: $star.attr('rating')
      }, (res) => {
        console.log('succesful post to /ratings/update');
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
