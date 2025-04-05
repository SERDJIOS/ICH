const form = document.querySelector(".form");
const message = document.createElement("div");

function showmesage(string, color) {
  message.innerText = string;
  message.style.color = color;
  form.insertAdjacentElement("beforeend", message);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = e.target["email"].value;
  const passValue = e.target["password"].value;

  const existingUser = JSON.parse(localStorage.getItem("users")) || [];
  console.log(existingUser);
  const userExist = existingUser.some((user) => user.email === emailValue);
  console.log(userExist);
  if (userExist) {
    showmesage("User exists", "red");
  } else {
    const newUser = {
      email: emailValue,
      password: passValue,
    };
    existingUser.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUser));
    showmesage("user was reg", "green");
    e.target.reset();
    form.style.display = "block";
  }
});
