function createPost(resource) {
  const postTemplate = `
  <div class="post ${resource.rated}" dbId=${resource.id} >
  <h3 class="postTitle">${resource.title}</h3>
  <!-- img preview -->
  <a href="${resource.url}">
    <div class="thumbnail-container" >
      <div class="thumbnail">
        <iframe src="${resource.url}" frameborder="0" onload="this.style.opacity = 1"></iframe>
      </div>
    </div>
  </a>
  <!-- /image preview -->
  <!-- radio know star code from  https://codepen.io/neilpomerleau/pen/wzxzQr -->
  <div class="postLikes clearfix">
  <form action="" method="post" class='rating'>
    <i class="fas fa-star ${resource.starFills[0]}" rating="1"></i>
    <i class="fas fa-star ${resource.starFills[1]}" rating="2"></i>
    <i class="fas fa-star ${resource.starFills[2]}" rating="3"></i>
    <i class="fas fa-star ${resource.starFills[3]}" rating="4"></i>
    <i class="fas fa-star ${resource.starFills[4]}" rating="5"></i>
    <small>average rating: ${resource.average_rating}</small>
  </form>
  <form action="" method="post" class='like'><i class="fas fa-heart ${resource.liked}"></i></i></form>
</div>
<div class="postContent">
  <p>Created at: ${resource.created_at} <br>
    Created by: ${resource.user_name} <br>
    Topic: ${resource.topic} </p>
    <p> ${resource.description}</p>
</div>
<div class="postFooter">
  <div class="controls clearfix">
    <p class="show">Show Comments</p>
    <p class="hide">Hide Comments</p>
  </div>
  <div class="commentContainer">
    <div class="commentForm">
      <form method="POST" action="id:/comment" class="commentBox">
        <small> Comment box</small>
        <textarea class="commentInput" name="" id="" cols="30" rows="10"></textarea>
        <button type="submit" class="btn btn-primary commentSubmit">submit comment</button>
      </form>
    </div>
    <div class="comment">
      <h4>username</h4>
      <p class="commentText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto natus perferendis neque quibusdam consectetur earum voluptatibus quia suscipit nulla ipsum sapiente praesentium cum ad veritatis nemo tempore eos mollitia, aliquam, libero sequi blanditiis unde adipisci ratione ipsam reprehenderit. Sed, recusandae.</p>
    </div>
  </div>
</div>
</div>
  `
  return postTemplate;
};

function renderPosts(resources) {
  resources.forEach(resource => {
    $('#postContainer').append(createPost(resource));
  });
}

function loadPosts() {
  $.get("/resources", (resources) => {
    renderPosts(resources);
  })
}

$(document).ready(function () {
  loadPosts();
});