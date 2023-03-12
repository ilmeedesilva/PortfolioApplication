const newSocialMediaImageInput = document.getElementById(
  "new_social_media_icon"
);

const newSocialMediaLinkName = document.getElementById(
  "new_social_media_link_name"
);

const newSocialMediaLinkNameError = document.querySelector(
  ".add_new_social_link__name_error"
);

const newSocialMediaLink = document.getElementById("new_social_media_link");

const newSocialMediaImageInputError = document.querySelector(
  ".add_new_social_link_error"
);
const newSocialMediaIconErr = document.querySelector(
  ".new_social_media_icon_err"
);
const newSocialMediaSelectedImgView = document.querySelector(
  ".selected_add_new_social_icon_view"
);
const newSocialMediaSaveButton = document.getElementById(
  "add_new_social_media"
);

const clear_button = document.querySelector(".add_newsocialmedia_clear_btn");

newSocialMediaSelectedImgView.style.display = "none";

const clearSocialMediaFields = () => {
  newSocialMediaImageInput.value = "";
  newSocialMediaLinkName.value = "";
  newSocialMediaLink.value = "";
};

newSocialMediaImageInput.addEventListener("change", () => {
  if (newSocialMediaImageInput.files.length > 0) {
    newSocialMediaSelectedImgView.style.backgroundImage = `url('${URL.createObjectURL(
      newSocialMediaImageInput.files[0]
    )}')`;
    newSocialMediaSelectedImgView.style.display = "block";
  } else {
    newSocialMediaSelectedImgView.style.display = "none";
  }
});

newSocialMediaSaveButton.addEventListener("click", () => {
  const newSocialMediaLinkValue = newSocialMediaLink.value;
  const newSocialMediaLinkNameValue = newSocialMediaLinkName.value;
  const image = newSocialMediaImageInput.files[0];

  if (!image) {
    newSocialMediaIconErr.textContent = "*Please select an image";
  } else if (!image.type.includes("jpeg") && !image.type.includes("png")) {
    newSocialMediaIconErr.textContent = "*Please select a JPEG or PNG image";
  } else if (image.size > 1000000) {
    newSocialMediaIconErr.textContent = "*The image must be less than 1MB";
  } else {
    newSocialMediaIconErr.textContent = "";
  }

  if (newSocialMediaLinkValue.trim() === "") {
    newSocialMediaImageInputError.textContent = "*Please enter a link.";
  } else if (
    !newSocialMediaLinkValue.match(
      /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/.*)*$/i
    )
  ) {
    newSocialMediaImageInputError.textContent =
      "*Please enter a valid link. example - https://www.example.com";
  } else {
    newSocialMediaImageInputError.textContent = "";
  }

  if (newSocialMediaLinkNameValue.trim() === "") {
    newSocialMediaLinkNameError.textContent =
      "*Please enter Social Media Name.";
  } else {
    newSocialMediaLinkNameError.textContent = "";
  }

  if (
    !newSocialMediaIconErr.textContent &&
    !newSocialMediaLinkNameError.textContent &&
    !newSocialMediaImageInputError.textContent
  ) {
    const formData = new FormData();
    formData.append("newSocialMediaLink", newSocialMediaLinkValue);
    formData.append("newSocialMediaLinkName", newSocialMediaLinkNameValue);
    formData.append("image", image);

    fetch("../../db/addNewSocialMedia.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        displayPopUp(result);
        clearSocialMediaFields();
        // if (result.includes("success")) {

        // } else {
        //   alert("Failed to save data");
        // }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});

clear_button.addEventListener("click", (e) => {
  e.preventDefault();

  newSocialMediaImageInput.value = "";
  newSocialMediaLinkName.value = "";
  newSocialMediaLink.value = "";
});
