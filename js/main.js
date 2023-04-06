const inputName = document.querySelector(".name");
const email = document.querySelector(".email");
const emailBox = document.querySelector(".contact-email");
const text = document.querySelector(".textarea");

const showValidation = (e) => {
  e.preventDefault();
  if (!text.value) {
    text.classList.add("invalid");
  } else {
    text.classList.add("valid");
  }
  if (!inputName.value) {
    inputName.classList.add("invalid");
  } else {
    inputName.classList.add("valid");
  }
  if (!email.value) {
    email.classList.add("invalid");
    emailBox.classList.add("invalid");
  } else {
    email.classList.add("valid");
  }

  if (text.value && email.value && inputName.value) {
    console.log(`${text.value}\n${email.value}\n${inputName.value}`);
    text.value = "";
    email.value = "";
    inputName.value = "";
    text.classList.remove("valid");
    text.classList.remove("invalid");
    email.classList.remove("valid");
    email.classList.remove("invalid");
    inputName.classList.remove("valid");
    inputName.classList.remove("invalid");
    emailBox.classList.remove("invalid");
  }
};
