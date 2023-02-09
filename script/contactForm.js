const name_input = document.querySelector('input[name="name"]');
const name_size = Object.keys(name_input).length;
const name_error = document.querySelector(".name_txt_er");

const email_input = document.querySelector('input[name="email"]');
const email_error = document.querySelector(".email_txt_er");

const tel_input = document.querySelector('input[name="tel"]');
const tel_error = document.querySelector(".tel_txt_er");

const msg_input = document.querySelector('textarea[name="msg"]');
const msg_error = document.querySelector(".msg_txt_er");

const txt_error = document.querySelector(".error_txt");

const submit_button = document.querySelector(".save_btn");

const popupmodel = document.querySelector(".status_popup_wrapper");

const clearInputFields = () => {
  name_input.innerHTML = "";
  email_input.innerHTML = "";
  tel_input.innerHTML = "";
  msg_input.innerHTML = "";
};

const displayPopUp = (res) => {
  const header1 = document.querySelector(".status_descrip h6");
  const detail = document.querySelector(".status_descrip p");
  const background = document.querySelector(".status_popup_wrapper");
  const icon = document.querySelector(".status_popup_wrapper .status_icon img");

  if ("success") {
    background.style.backgroundColor = "#75cf0f";
    icon.src = "../../resource/icon/success.png";
    header1.innerHTML = "SUCCESS";
    detail.innerHTML = "WE WILL CONTACT YOU SHORTLY";
    clearInputFields();
  } else {
    background.style.backgroundColor = "#e9374d";
    icon.src = "../../resource/icon/fail.png";
    header1.innerHTML = "FAILED";
    detail.innerHTML = "SOMTHING WENT WRONG! PLEASE TRY AGAIN";
  }
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  popupmodel.classList.remove("popup_hide");
  popupmodel.classList.add("popup_show");
  setTimeout(function () {
    popupmodel.classList.remove("popup_show");
    popupmodel.classList.add("popup_hide");
  }, 4000);
};

submit_button.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("msg_input - ", msg_input.value);
  if (!name_input.value) {
    name_error.innerHTML = "*Name cannot be empty";
  } else if (!name_input.value.match(/^[a-zA-Z\s]+$/)) {
    name_error.innerHTML = "*Name should not contain numbers";
  } else if (!(name_input.value.length > 2)) {
    name_error.innerHTML = "*Name should contain more than 2 characters";
  } else {
    name_error.innerHTML = "";
  }

  if (!email_input.value) {
    email_error.innerHTML = "*Email cannot be empty";
  } else if (
    !email_input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    email_error.innerHTML = "*Enter a valid email address";
  } else {
    email_error.innerHTML = "";
  }

  if (!tel_input.value) {
    tel_error.innerHTML = "*Contact number cannot be empty";
  } else if (!tel_input.value.match(/^\d{10}$/)) {
    tel_error.innerHTML = "*Enter a valid contact number";
  } else {
    tel_error.innerHTML = "";
  }

  if (!msg_input.value) {
    msg_error.innerHTML = "*Message cannot be empty";
  } else if (msg_input.value.length <= 9 || msg_input.value.length > 500) {
    msg_error.innerHTML =
      "*Message should contain more than 10 characters and less than 500 characters";
  } else {
    msg_error.innerHTML = "";
  }

  if (
    !name_error.innerHTML &&
    !email_error.innerHTML &&
    !tel_error.innerHTML &&
    !msg_error.innerHTML
  ) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../../db/contactForm.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // const feedback = document.querySelector(".feedback");
        // feedback.innerHTML = xhr.responseText;

        displayPopUp(xhr.responseText);
      }
    };
    xhr.send(
      `name=${name_input.value}&email=${email_input.value}&tel=${tel_input.value}&msg=${msg_input.value}`
    );
  }
});
