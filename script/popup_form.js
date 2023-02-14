const wrapper = document.querySelector(".popup_form_wrapper");
const closeBtn = document.querySelector(".popup_form_wrapper .close_btn");
const editBtns = document.querySelectorAll(".table_wrapper .control_btn");
const cancelBtn = document.querySelector(
  ".pop_up_edit_save_cancel_wrapper .cancel_btn"
);

const deleteBtns = document.querySelector(".delete_control");

const hideElements = () => {
  wrapper.classList.add("hide");
};

closeBtn.addEventListener("click", () => {
  hideElements();
});
cancelBtn.addEventListener("click", () => {
  hideElements();
});

editBtns.forEach((item) => {
  item.addEventListener("click", () => {
    // remove read only

    document.querySelector(".popup_form .image_wrapper input").style.display =
      "block";
    document.querySelector(".popup_form .image_wrapper p").style.display =
      "block";
    document.querySelector(
      '.popup_form input[name="edit_project_header"]'
    ).readOnly = false;
    document.querySelector(
      '.popup_form input[name="edit_project_date"]'
    ).readOnly = false;
    document.querySelector(
      '.popup_form textarea[name="edit_project_dec"]'
    ).readOnly = false;

    document.querySelector(
      ".popup_form .pop_up_edit_save_cancel_wrapper .primary_btn"
    ).innerHTML = "SAVE";

    document
      .querySelector(
        ".popup_form .pop_up_edit_save_cancel_wrapper .primary_btn"
      )
      .classList.remove("delete_btn");

    wrapper.classList.remove("hide");
  });
});

deleteBtns.addEventListener("click", () => {
  document.querySelector(".popup_form .image_wrapper input").style.display =
    "none";
  document.querySelector(".popup_form .image_wrapper p").style.display = "none";
  document.querySelector(
    '.popup_form input[name="edit_project_header"]'
  ).readOnly = true;
  document.querySelector(
    '.popup_form input[name="edit_project_date"]'
  ).readOnly = true;
  document.querySelector(
    '.popup_form textarea[name="edit_project_dec"]'
  ).readOnly = true;

  document
    .querySelector(".popup_form .pop_up_edit_save_cancel_wrapper .primary_btn")
    .classList.add("delete_btn");

  document.querySelector(
    ".popup_form .pop_up_edit_save_cancel_wrapper .primary_btn"
  ).innerHTML = "DELETE";
});
