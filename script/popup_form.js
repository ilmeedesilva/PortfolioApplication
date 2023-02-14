const wrapper = document.querySelector(".popup_form_wrapper");
const closeBtn = document.querySelector(".popup_form_wrapper .close_btn");
const editBtns = document.querySelectorAll(".table_wrapper .control_btn");

closeBtn.addEventListener("click", () => {
  wrapper.classList.add("hide");
});

editBtns.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(editBtns.length);
    console.log("click");
    wrapper.classList.remove("hide");
  });
});
