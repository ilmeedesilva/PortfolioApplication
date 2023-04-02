const wrapper = document.querySelector(".popup_form_wrapper");
const closeBtn = document.querySelector(".popup_form_wrapper .close_btn");
const editBtns = document.querySelectorAll(".table_wrapper .control_btn");
const cancelBtn = document.querySelectorAll(
  ".pop_up_edit_save_cancel_wrapper .cancel_btn"
);

const deleteBtns = document.querySelector(".delete_control");

const hideElements = () => {
  wrapper.classList.add("hide");
};

closeBtn.addEventListener("click", () => {
  hideElements();
});

cancelBtn.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("cancelBtn clicked");
    hideElements();
  });
});
