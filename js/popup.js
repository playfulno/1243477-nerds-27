var button = document.querySelector(".write-button");
var popup = document.querySelector(".modal-post");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".modal-form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function(evt){
  console.log('here');
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
      name.value = storage;

    }
    form.addEventListener("submit", function (evt) {
        if (!email.value || !name.value) {
          evt.preventDefault();
          console.log("Нужно ввести имя и э-мэйл");
        } else {
            localStorage.setItem("email", email.value);
          }
    });

});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});





 window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
