var button = document.querySelector(".write-button");
var popup = document.querySelector(".modal-post");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.add(".modal-show");

    if (storage) {
      login.value = storage;
    }
    name.focus();

});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove(".modal-show");
});

form.addEventListener("submit", function (evt) {
    if (!email.value || !name.value) {
      evt.preventDefault();
      console.log("Нужно ввести имя и э-мэйл");
    } else {
        localStorage.setItem("email", email.value);
      }
});



/* window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains(".modal-show")) {
        popup.classList.remove(".modal-show");
      }
    }
  }); */