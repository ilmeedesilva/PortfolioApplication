const title_input = document.querySelector('input[name="title"]');
const title_error = document.querySelector(".title_error");

const desc_input = document.querySelector('textarea[name="servicesdesc"]');
const desc_error = document.querySelector(".desc_error");

const save_btn = document.querySelector(".add_titledesc_save_btn");
const clear_btn = document.querySelector(".add_titledesc_clear_btn");

const clearServiceTitleDescFields = () => {

    title_input.value="";
    desc_input.value="";
  
  };

save_btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Title
    if (!title_input.value) {
        title_error.innerHTML = "*Title cannot be empty";
    } else if (!title_input.value.match(/^[a-zA-Z\s]+$/)) {
        title_error.innerHTML = "*Title should not contain numbers";
    } else {
        title_error.innerHTML = "";
    }
  
    // Description
    if (!desc_input.value) {
        desc_error.innerHTML = "*Description cannot be empty";
      } else {
        desc_error.innerHTML = "";
      }
  
  
    if (
      !title_error.innerHTML &&
      !desc_error.innerHTML
    ) {
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
          alert(error);
        });
    }
  });

  clear_btn.addEventListener("click", (e) => {
    e.preventDefault();
  
    title_input.value="";
    desc_input.value="";
  
  });