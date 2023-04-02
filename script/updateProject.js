const projectInput = document.querySelector(
  '.project_uploader_wrapper input[type="file"]'
);
const projectClick = document.querySelector(".project_uploader_wrapper");

const updateSelectedFileProject = (doc) => {
  const file = doc.files[0];
  const fileType = file.type;
  const fileSize = file.size;
  const filesizeinMB = (file.size / 1000).toFixed(2);
  document.querySelector(
    ".update_project_file_name"
  ).innerHTML = `${file.name}, size: ${filesizeinMB} KB`;
  if (fileType) {
    document.querySelector(".error_img_project").innerHTML =
      "*Must include an image";
  }
  if (fileType !== "image/jpeg" && fileType !== "image/png") {
    document.querySelector(".error_img_project").innerHTML =
      "*Invalid file type, only jpeg and png are allowed";
    return;
  } else if (fileSize > 1000000) {
    document.querySelector(".error_img_project").innerHTML =
      "*File size must be less than 1MB";
  } else {
    document.querySelector(".error_img_project").innerHTML = "";
  }
};
console.log("project cover");
projectClick.addEventListener("click", (e) => {
  e.preventDefault();

  projectInput.click();
});

const descProject = document.querySelector('textarea[name="projectDesc"]');

const submit_button_project = document.querySelector(
  ".form_wrapper .saveProject"
);

const err_desc_project = document.querySelector(".desc_error_project");

submit_button_project.addEventListener("click", (e) => {
  e.preventDefault();
  const err_img_project = document.querySelector(".error_img_project");
  if (!projectInput.value) {
    err_img_project.innerHTML = "*Please select an image";
  } else {
    err_img_project.innerHTML = "";
  }
  if (!descProject.value) {
    err_desc_project.innerHTML = "*Description cannot be empty";
  } else if (
    descProject.value.length <= 199 ||
    descProject.value.length > 1000
  ) {
    err_desc_project.innerHTML =
      "*Project Description should contain more than 200 characters and less than 1000 characters";
  } else {
    err_desc_project.innerHTML = "";
  }
  if (!err_desc_project.innerHTML && !err_img_project.innerHTML) {
    document.querySelector(".error_img_project").innerHTML = "";
    const selectedFileAbout1 = projectInput.files[0];
    const formData = new FormData();
    formData.append("descProject", descProject.value);
    formData.append("image", selectedFileAbout1);

    fetch("../../db/updateProject.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        displayPopUp(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

document
  .querySelector(".clear_update_project_btn")
  .addEventListener("click", (e) => {
    e.preventDefault();

    descProject.value = "";
    projectInput.value = "";
    document.querySelector(".update_project_file_name").innerHTML = "";
  });
