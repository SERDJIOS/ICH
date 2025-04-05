// https://jsonplaceholder.typicode.com/posts/?_limit=4
const renderButton = document.querySelector(".render");
const createBtn = document.querySelector(".create");
async function fetchPostAPI() {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts/?_limit=4`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    data.forEach((element) => {
      renderPosts(element);
    });
  } catch (error) {
    console.error(error);
  }
}

function renderPosts(obj) {
  const post = document.createElement("div");
  const posts = document.querySelector(".posts");
  const postContent = document.createElement("div");
  const img = document.createElement("img");
  postContent.innerHTML = `
    <h3>title: ${obj.title}</h3>
    <p>description: ${obj.body}</p>`;
  img.src = "./img/11111.png";
  post.append(postContent, img);
  posts.append(post);
}

renderButton.addEventListener("click", () => {
  const posts = document.querySelector(".posts");
  posts.innerHTML = "";
});
fetchPostAPI();
