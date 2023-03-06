const form = document.querySelector("form");
const submitBtn = document.querySelector(".login_sub_btn button");
const userNameFieldValue = document.querySelector(
  '.login_input input[name="username"]'
);
const userNameFieldError = document.querySelector(".login_input .er_usrnme");
const passwordFieldValue = document.querySelector(
  '.login_input input[name="password"]'
);
const passwordFieldError = document.querySelector(".login_input .er_pwd");
const rememberMeCheckbox = document.getElementById("remember");
const incorrectunamePsw = document.querySelector(".username_or_pswd_incrt");

const getCookie = (name) => {
  const cookieName = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) == 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
};

const handleLoginValidation = () => {
  if (!userNameFieldValue.value) {
    userNameFieldError.innerText = "username cannont be empty";
  } else {
    userNameFieldError.innerText = "";
  }

  if (!passwordFieldValue.value) {
    passwordFieldError.innerText = "password cannont be empty";
  } else {
    passwordFieldError.innerText = "";
  }

  if (userNameFieldValue.value && passwordFieldValue.value) {
    let username = userNameFieldValue.value;
    let password = passwordFieldValue.value;

    // handleSubmit(username, password);
  } else {
    incorrectunamePsw.innerText = "";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleLoginValidation();

  if (!userNameFieldValue.value || !passwordFieldValue.value) {
    handleLoginValidation();
  } else {
    if (rememberMeCheckbox.checked) {
      const date = new Date();

      date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
      const expires = "expires=" + date.toUTCString();

      document.cookie =
        "username=" + userNameFieldValue.value + ";" + expires + ";path=/";
      document.cookie =
        "password=" + passwordFieldValue.value + ";" + expires + ";path=/";
    } else {
      document.cookie =
        "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie =
        "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    form.submit();
  }
});

userNameFieldValue.addEventListener("input", () => {
  incorrectunamePsw.innerText = "";
  if (!userNameFieldValue.value) {
    userNameFieldError.innerText = "username cannot be empty";
  } else {
    userNameFieldError.innerText = "";
  }
});

passwordFieldValue.addEventListener("input", () => {
  incorrectunamePsw.innerText = "";
  if (!passwordFieldValue.value) {
    passwordFieldError.innerText = "password cannot be empty";
  } else {
    passwordFieldValue.innerText = "";
  }
});

submitBtn.addEventListener("click", () => {
  handleLoginValidation();
});

const usernameCookie = getCookie("username");
const passwordCookie = getCookie("password");

if (usernameCookie && passwordCookie) {
  userNameFieldValue.value = usernameCookie;
  passwordFieldValue.value = passwordCookie;
  rememberMeCheckbox.checked = true;
}
