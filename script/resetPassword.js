const resetBtn = document.querySelector(".reset_user_password");

const hideReset = () => {
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

resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".user_edit").forEach((edit) => {
    edit.classList.add("hide");
  });

  document.querySelector(".reset_password").classList.remove("hide");
  document.querySelector(".reset_btn").classList.remove("hide");
  document.querySelector(".crud_btn").classList.add("hide");
});

document.querySelector(".reset_btn").addEventListener("click", () => {
  // password validation in here
  console.log("reset password save clicked");
});
