// write your code here
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#card-title");
  const image = document.querySelector("#card-image");
  const likes = document.querySelector("#like-count");
  const btnLike = document.querySelector("#like-button");
  const comments = document.querySelector("#comments-list");
  const form = document.querySelector("#comment-form");
  let likeCount = 0;
  const BASE_URL = "http://localhost:3000/";

  fetch(`${BASE_URL}images/1`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      updateUI(data);
    });

  form.addEventListener("submit", addComment);
  btnLike.addEventListener("click", handleLiked);
  function handleLiked(event) {
    likeCount++;
    likes.textContent = `${likeCount} likes`;
  }

  function addComment(event) {
    event.preventDefault();
    const input = form.querySelector("#comment");
    // console.log(input);
    if (input.value) {
      let comment = document.createElement("li");
      comment.textContent = input.value;
      comments.appendChild(comment);
    }
    form.reset();
  }

  function updateUI(data) {
    title.textContent = data.title;
    image.src = data.image;
    comments.innerHTML = "";
    data.comments.map((comment) => {
      let li = document.createElement("li");
      li.textContent = comment.content;
      comments.appendChild(li);
    });
  }
});
