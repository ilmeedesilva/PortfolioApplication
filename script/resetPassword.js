const resetBtn = document.querySelector(".reset_user_password");

const newPassword = document.querySelector("input[name='newPassword']");
const confPwd = document.querySelector("input[name='confPassowrd']");
const newPasswordErr = document.querySelector(".new_password_error");
const confPasswordErr = document.querySelector(".confirm_password_error");

const clearResetFileds = () => {
  newPassword.value = "";
  confPwd.value = "";
  newPasswordErr.innerHTML = "";
  confPasswordErr.innerHTML = "";
};

const hideReset = () => {
  clearResetFileds();
  document.querySelectorAll(".user_edit").forEach((edit) => {
    edit.classList.remove("hide");
  });

  document.querySelector(".reset_password").classList.add("hide");
};

document.querySelector(".close_btn").addEventListener("click", () => {
  hideReset();
});

document
  .querySelector(".pop_up_edit_save_cancel_wrapper .cancel_btn")
  .addEventListener("click", () => {
    hideReset();
  });

resetBtn.addEventListener("click", (e) => {
  document.querySelectorAll(".user_edit").forEach((edit) => {
    edit.classList.add("hide");
  });

  document.querySelector(".reset_password").classList.remove("hide");
  document.querySelector(".reset_btn").classList.remove("hide");
  document.querySelector(".crud_btn").classList.add("hide");
});

document.querySelector(".reset_btn").addEventListener("click", () => {
  const userID = document.querySelector(".reset_btn").dataset.myAttribute;

  newPasswordErr.textContent = "";
  confPasswordErr.textContent = "";

  if (newPassword.value.length < 6) {
    newPasswordErr.textContent = "Password must be at least 6 characters long.";
    return;
  }

  if (newPassword.value !== confPwd.value) {
    confPasswordErr.textContent = "Passwords do not match.";
    return;
  }

  fetch("../../db/resetPassword.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: userID,
      newPassword: newPassword.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("password reset successful");
        hideReset();
        clearResetFileds();
        hideElements();
      } else {
        alert("password reset failed");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
