const title_input = document.querySelector('input[name="title"]');
const title_error = document.querySelector(".title_error");

const desc_input = document.querySelector('textarea[name="servicesdesc"]');
const desc_error = document.querySelector(".desc_error");

const save_btn = document.querySelector(".add_titledesc_save_btn");
const clear_btn = document.querySelector(".add_titledesc_clear_btn");

const clearServiceTitleDescFields = () => {
  title_input.value = "";
  desc_input.value = "";
};

save_btn.addEventListener("click", (e) => {
  e.preventDefault();

  // Title
  if (!title_input.value) {
    title_error.innerHTML = "*Title cannot be empty";
  } else if (!title_input.value.match(/^[a-zA-Z\s]+$/)) {
    title_error.innerHTML = "*Title should not contain numbers";
  } else if (title_input.value.length < 10 || title_input.value.length > 50) {
    title_error.innerHTML =
      "*The Title must be at least 10 characters long and less than 50 characters";
  } else {
    title_error.innerHTML = "";
  }

  // Description
  if (!desc_input.value) {
    desc_error.innerHTML = "*Description cannot be empty";
  } else if (desc_input.value.length < 50 || desc_input.value.length > 500) {
    desc_error.innerHTML =
      "*The Description must be at least 50 characters long and less than 100 characters";
  } else {
    desc_error.innerHTML = "";
  }

  if (!title_error.innerHTML && !desc_error.innerHTML) {
    const formData = new FormData();
    formData.append("title", title_input.value);
    formData.append("servicesdesc", desc_input.value);

    fetch("../../db/addServiceTitleDescription.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        displayPopUp(result);
        clearServiceTitleDescFields();
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

clear_btn.addEventListener("click", (e) => {
  e.preventDefault();

  title_input.value = "";
  desc_input.value = "";
});
