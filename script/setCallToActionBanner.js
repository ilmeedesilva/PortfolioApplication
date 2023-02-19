const mainTitle=document.querySelector('input[name="call-to-action-Main-Title"]');
const selectedCallToActionBanner=document.querySelector('#call-to-action-image-upload');
const subTitle=document.querySelector('input[name="call-to-action-Sub-Title"]');

/*const updateSelectedFileProject = (doc) => {
    const file = doc.files[0];
    const fileType = file.type;
    const fileSize = file.size;
    const filesizeinMB = (file.size / 1000).toFixed(2);
    document.querySelector(
      ".update_project_file_name"
    ).innerHTML = `${file.name}, size: ${filesizeinMB} KB`;
    if (fileType) {
      document.querySelector(".call-to-action-img_err").innerHTML =
        "*Must include an image";
    }
    if (fileType !== "image/jpeg" && fileType !== "image/png") {
      document.querySelector(".call-to-action-img_err").innerHTML =
        "*Invalid file type, only jpeg and png are allowed";
      return;
    } else if (fileSize > 1000000) {
      document.querySelector(".call-to-action-img_err").innerHTML =
        "*File size must be less than 1MB";
    } else {
      document.querySelector(".call-to-action-img_err").innerHTML = "";
    }
  };
  
projectClick.addEventListener("click", (e) => {
    e.preventDefault();
  
    projectInput.click();
  });
    
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
    } else {
      err_desc_project.innerHTML = "";
    }
    if (!err_desc_project.innerHTML && !err_img_project.innerHTML) {
      document.querySelector(".call-to-action-img_err").innerHTML = "";
      const selectedFileAbout1 = projectInput.files[0];
      const formData = new FormData();
      formData.append("descProject", descProject.value);
      formData.append("image", selectedFileAbout1);
  
      fetch("../../db/setCallToActionBanner.js", {
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
  
  document
    .querySelector(".call-to-action-clear_btn")
    .addEventListener("click", (e) => {
      e.preventDefault();
  
      descProject.value = "";
      projectInput.value = "";
      document.querySelector(".call-to-action-save_btn").innerHTML = "";
    });
  */