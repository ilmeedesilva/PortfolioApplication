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

  const editSocialMediaNameError = document.querySelector(
    ".edit_social_media_name_error_txt"
  );
  const editSocialMediaLinkError = document.querySelector(
    ".edit_social_media_link_error_txt"
  );
  const currentDate = new Date();

  if (!editSocialRowName.value.trim() === "") {
    editSocialMediaNameError.innerHTML = "*social media Name cannot be empty";
  } else {
    editSocialMediaNameError.innerHTML = "";
  }

  if (editSocialRowLink.value.trim() === "") {
    editSocialMediaLinkError.innerHTML = "*Please enter a link.";
  } else if (
    !editSocialRowLink.value.match(
      /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/.*)*$/i
    )
  ) {
    editSocialMediaLinkError.innerHTML =
      "*Please enter a valid link. example - https://www.example.com";
  } else {
    editSocialMediaLinkError.innerHTML = "";
  }

  const editImageEncoded = social.image;
  const file = uploadedEditSocialImg.files[0];

  console.log("editSocialRowName.value - ", editSocialRowName.value);
  console.log("editSocialRowLink.value - ", editSocialRowLink.value);
  console.log("social.id - ", social.id);

  if (
    !uploadedEditProjectImgError.innerHTML &&
    !editSocialMediaNameError.innerHTML &&
    !editSocialMediaLinkError.innerHTML &&
    type === "Edit"
  ) {
    if (file) {
      const data = new FormData();
      data.append("project_id", social.id);
      data.append("image", file);
      data.append("socialMediaName", editSocialRowName.value);
      data.append("socialMediaLink", editSocialRowLink.value);

      fetch("../../db/putSocialMediaData.php", {
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
    } else {
      const data = new FormData();
      data.append("project_id", social.id);
      // data.append("image", editSocialImgIploader.files[0]);
      data.append("socialMediaName", editSocialRowName.value);
      data.append("socialMediaLink", editSocialRowLink.value);

      fetch("../../db/putSocialMediaData.php", {
        method: "POST",
        body: data,
      })
        .then((response) => {
          console.log("response - ", response);
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
    }
  }
};
