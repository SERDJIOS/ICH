const navMenu = document.querySelector("#navMenu");
const openButton = document.querySelector("#openButton");
const closeButton = document.querySelector("#closeButton");

const toggleMenu = () => {
  navMenu.classList.toggle("nav-menu--open");
};

function createOrder(e) {
  e.preventDefault();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data was received");
    }, 2000);
  });
}

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  await createOrder(e);
  const notificationsContainer = document.querySelector(
    "#notificationsContainer"
  );
  notificationsContainer.insertAdjacentHTML(
    "afterbegin",
    constructorNotification(
      "order was created",
      "wait upcomming info",
      "success"
    )
  );
});

const getNotificationError = (type) => {
  switch (type) {
    case "success":
      return "<span class='material-symbols-rounded'> done </span>";
    case "info":
      return "<span class='material-symbols-rounded'>info</span>";
    case "error":
      return "<span class='material-symbols-rounded'>error</span>";
    default:
      return "<span class='material-symbols-rounded'> done </span>";
  }
};

const constructorNotification = (title, text, type) => {
  const notification = `
    <div
      class="notification notification--${type}"
    >
      <div class="notification__icon">
        <span class="material-symbols-rounded"> done </span>
      </div>
      <div class="notification__data">
        <div class="notification__title">${title}</div>
        <div class="notification__text">${text}</div>
      </div>
      <span class="material-symbols-rounded notification__close">
        close_small
      </span>
    </div>
  `;

  return notification;
};

//при двух адишниках происходит конфликт 
const buttonsContainer = document.querySelector(".buttons");
//Бред 2. 
buttonsContainer.classList.remove("buttons--hidden");

console.log(buttonsContainer);

document.querySelector("#buttonPaid").addEventListener("click", () => {
  const notificationsContainer = document.querySelector(
    "#notificationsContainer"
  );
  notificationsContainer.insertAdjacentHTML(
    "afterbegin",
    constructorNotification("Order was paid", "Await sending", "success")
  );
  const firstElement = notificationsContainer.firstElementChild
  console.log(firstElement);
  
  removeNotification(notificationsContainer.firstElementChild)
});

document.querySelector("#buttonSent").addEventListener("click", () => {
  const notificationsContainer = document.querySelector(
    "#notificationsContainer"
  );
  notificationsContainer.insertAdjacentHTML(
    "afterbegin",
    constructorNotification("Order was sent", "Await courer", "info")
  );
  removeNotification(notificationsContainer.firstElementChild)
});
document.querySelector("#buttonGet").addEventListener("click", () => {
  const notificationsContainer = document.querySelector(
    "#notificationsContainer"
  );
  notificationsContainer.insertAdjacentHTML(
    "afterbegin",
    constructorNotification(
      "You received the deliver",
      "We will be waiting for you",
      "success"
    )
  );

  removeNotification(notificationsContainer.firstElementChild)
});


function removeNotification(elToDelete) {
    setTimeout(() => {
        elToDelete.remove()
    }, 4000)
}