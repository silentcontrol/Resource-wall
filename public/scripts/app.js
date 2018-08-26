function createPost(resource) {
  const postTemplate = `
    <div class="post">
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
    <div class="postLikes">
      <form class="rating">
        <label>
          <input type="radio" name="stars" value="1" />
          <span class="icon">★</span>
        </label>
        <label>
          <input type="radio" name="stars" value="2" />
          <span class="icon">★</span>
          <span class="icon">★</span>
        </label>
        <label>
          <input type="radio" name="stars" value="3" />
          <span class="icon">★</span>
          <span class="icon">★</span>
          <span class="icon">★</span>
        </label>
        <label>
          <input type="radio" name="stars" value="4" />
          <span class="icon">★</span>
          <span class="icon">★</span>
          <span class="icon">★</span>
          <span class="icon">★</span>
        </label>
        <label>
          <input type="radio" name="stars" value="5" />
          <span class="icon">★</span>
          <span class="icon">★</span>
          <span class="icon">★</span>
          <span class="icon">★</span>
          <span class="icon">★</span>
        </label>
      </form>
    </div>
    <div class="postContent">
      <p>${resource.description}</p>
    </div>
    <div class="postFooter">
      <div class="controls clearfix">
        <p class="show">Show Comments</p>
        <p  class="hide">Hide Comments</p>
      </div>
      <div class="commentContainer">
        <div class="commentForm">
          <form method="POST" action="id:/comment">
            <small> Comment box</small>
            <textarea class="commentInput" name="" id="" cols="30" rows="10"></textarea>
            <button type="submit" class="btn btn-primary">submit comment</button>
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
    $('.postContainer').append(createPost(resource));
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