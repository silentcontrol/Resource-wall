$(document).ready( () => {
  console.log("rating script being loaded");
  $('#postContainer').on('click', '.fa-star', function () {
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
        $star.addClass('filled');
        $star.prevAll().addClass('filled');
        $star.nextUntil('small').removeClass('filled');
        //get average rating from response and update in ejs
        console.log(res);
        console.log(res.newAverage);
        $star.siblings('small').text(`average rating: ${res.newAverage}`);
      })
    } else {
      $.post("/ratings", {
        resourceId: $parentPost.attr('dbId'),
        rating: $star.attr('rating')
      }, (res) => {
        $parentPost.toggleClass('rated');
        console.log('succesful post to /ratings');
        //toggle class on stars
        $star.addClass('filled');
        $star.prevAll().addClass('filled');
        $star.nextUntil('small').removeClass('filled');
        //get average rating from response and update in ejs
        console.log(res);
        console.log(res.newAverage);
        $star.siblings('small').text(`average rating: ${res.newAverage}`);
      })
    }
  });

  $('#postContainer').on('mouseenter', '.fa-star', function() {
      $(this).addClass('gold');
      $(this).prevAll().addClass('gold');
      $(this).nextUntil('small').addClass('black');
  }).on('mouseleave', '.fa-star', function() {
      $(this).removeClass('gold');
      $(this).prevAll().removeClass('gold');
      $(this).nextUntil('small').removeClass('black');
  });

  // $('#postContainer .fa-star').hover(
  //   function () {
  //     $(this).addClass('gold');
  //     $(this).prevAll().addClass('gold');
  //     $(this).nextUntil('small').addClass('black');
  //   },
  //   function () {
  //     $(this).removeClass('gold');
  //     $(this).prevAll().removeClass('gold');
  //     $(this).nextUntil('small').removeClass('black');
  //   }
})
