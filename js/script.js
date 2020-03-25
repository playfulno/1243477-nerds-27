var link = document.querySelector(".map__address-button");

var popup = document.querySelector(".modal-feedback");

var close = popup.querySelector(".modal-feedback__image");

var login = popup.querySelector("[name=name__user]");
var password = popup.querySelector("[name=email__user]");

var form = popup.querySelector(".modal-feedback__form");

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("login");
} catch (err) {
isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");

if (storage) {
  login.value = storage;
  password.focus();
} else {
  login.focus();
}
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
if (!login.value || !password.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
} else {
  if (isStorageSupport) {
    localStorage.setItem("login", login.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  }
}
});
