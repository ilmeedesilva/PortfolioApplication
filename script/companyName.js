const companyName_input = document.querySelector('input[name="companyName"]');
const name_error = document.querySelector(".company_name_error");

const save_button = document.querySelector(".logo_save_btn");

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

    fetch("../../db/companyName.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        displayPopUp(result);
      })
      .catch((error) => {
        alert(error);
      });
  }
});
