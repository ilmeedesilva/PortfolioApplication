const companyName_input = document.querySelector('input[name="companyName"]');
const name_error = document.querySelector(".company_name_error");

const save_button = document.querySelector(".company_save_btn");

save_button.addEventListener("click", (e) => {
  e.preventDefault();

  // Company Name
  if (!companyName_input.value) {
    name_error.innerHTML = "*Company name cannot be empty";
  } else {
    name_error.innerHTML = "";
  }

  if (!name_error.innerHTML) {
    const formData = new FormData();
    formData.append("companyName", companyName_input.value);
    save_button.disabled = true;
    fetch("../../db/companyName.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        save_button.disabled = false;
        displayPopUp(result);
      })
      .catch((error) => {
        save_button.disabled = false;
        console.log(error);
      });
  }
});
