const editSocialRowIMGUploder = document.querySelector(
  ".popup_form .image_wrapper input"
);

const editSocialRowName = document.querySelector(
  '.popup_form input[name="edit_social_media_name"]'
);

const editSocialRowLink = document.querySelector(
  '.popup_form input[name="edit_social_media_link"]'
);
const editRowDeletBtn = document.querySelector(
  ".popup_form .pop_up_edit_save_cancel_wrapper .primary_btn"
);

const editSocialImgIploader = document.querySelector(
  ".uploader_edit_social_media_icon"
);

const selectedSocialMediaEditData = (social, type) => {
  let editimageEncoded = social.image;
  let editimage =
    '<img src="data:image/jpeg;base64,' + editimageEncoded + '"/>';

  document.querySelector(".image_wrapper .img_box").innerHTML = editimage;

  document.querySelector(".popup_form_wrapper").classList.remove("hide");

  editSocialImgIploader.style.display = "block";
  document.querySelector(".popup_form .image_wrapper p").style.display =
    "block";
  editSocialRowName.readOnly = false;
  editSocialRowLink.readOnly = false;

  editSocialRowName.value = social.name;
  editSocialRowLink.value = social.link;

  editRowDeletBtn.classList.remove("delete_btn");
  editRowDeletBtn.innerHTML = "SAVE";
  editRowDeletBtn.addEventListener("click", (e) =>
    handleEditProject(e, social, type)
  );
};

const uploadedEditSocialImg = document.querySelector(
  ".uploader_edit_social_media_icon"
);
const uploadedEditProjectImgError = document.querySelector(
  ".uploader_edit_social_media_icon_error"
);

uploadedEditSocialImg.addEventListener("change", function () {
  if (uploadedEditSocialImg.files.length === 0) {
    uploadedEditProjectImgError.innerHTML = "*Please select an image";
    return;
  }

  const file = uploadedEditSocialImg.files[0];

  if (file.size > 1048576) {
    uploadedEditProjectImgError.innerHTML = "*File size exceeds 1MB";
    return;
  }

  if (!/^image\/(jpe?g|png)$/i.test(file.type)) {
    uploadedEditProjectImgError.innerHTML = "*File type must be JPG or PNG";
    return;
  }
  uploadedEditProjectImgError.innerHTML = "";
});

const handleEditProject = (e, social, type) => {
  e.preventDefault();

  const newHeaderError = document.querySelector(
    ".edit_project_header_error_txt"
  );
  const newDateError = document.querySelector(".edit_project_create_date");
  const newDescError = document.querySelector(".edit_project_dec");
  const currentDate = new Date();

  if (!editSocialRowName.value) {
    newHeaderError.innerHTML = "*social media Name cannot be empty";
  } else if (editSocialRowName.value.length < 10) {
    newHeaderError.innerHTML =
      "*Project Title must have more than 10 characters";
  } else {
    newHeaderError.innerHTML = "";
  }
  if (!editSocialRowLink.value) {
    newDescError.innerHTML = "*Social media link cannot be empty";
  } else {
    newDescError.innerHTML = "";
  }

  const editImageEncoded = social.image;
  const file = uploadedEditSocialImg.files[0];

  if (file instanceof Blob) {
    const reader = new FileReader();

    reader.onload = function (event) {
      if (event.target.result === editImageEncoded) {
        uploadedEditProjectImgError.innerHTML =
          "*Uploaded image same as original";
        return;
      } else {
        uploadedEditProjectImgError.innerHTML = "";
      }

      const editHeader = editSocialRowName.value.trim();
      const editDate = editRowDate.value.trim();
      const editDesc = editSocialRowLink.value.trim();

      if (
        editHeader === social.projectName.trim() &&
        editDate === social.date &&
        editDesc === social.descr.trim()
      ) {
        alert(
          "Please fill all fields and make sure they are different from the original data"
        );
        return;
      }

      const data = new FormData();
      data.append("project_id", social.id);
      data.append("image", editSocialImgIploader.files[0]);
      data.append("project_name", editHeader);
      data.append("date", editDate);
      data.append("descr", editDesc);

      fetch("../../db/putProjectData.php", {
        method: "POST",
        body: data,
      })
        .then((response) => {
          if (response.status === 200) {
            alert("Data saved successfully");
            getAllSocialMedias();
          } else {
            alert("Failed to save data");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to save data");
        });
    };
    reader.readAsDataURL(file);
  }
};
