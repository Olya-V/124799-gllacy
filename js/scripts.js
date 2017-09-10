var link = document.querySelector(".button--contacts");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-feedback__close");
var form = popup.querySelector("form");
var user_name = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var user_feedback = popup.querySelector("[name=user-feedback]");
var storage_user_name = localStorage.getItem("user_name");
var storage_email = localStorage.getItem("email");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-open");
  if (storage_user_name) {
    user_name.value = storage_user_name;
    email.focus();
  } else {
    user_name.focus();
  }
  if (storage_email) {
    email.value = storage_email;
    user_feedback.focus();
  } else {
    email.focus();
  }           
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-open");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
  if (!user_name.value || !email.value || !user_feedback.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Введите, пожалуйста, ваше имя, email и обращение для обратной связи");
  } else {
    localStorage.setItem("user_name", user_name.value);
    localStorage.setItem("email", email.value);
  }        
});
window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (popup.classList.contains("modal-open")) {
    popup.classList.remove("modal-open");
    popup.classList.remove("modal-error");
    }
  }
});