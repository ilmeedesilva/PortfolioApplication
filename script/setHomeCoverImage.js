const headerTextInput = document.getElementById("header-text");
const coverDescriptionInput = document.getElementById("cover-description");
const coverImageInput = document.getElementById("home-cover-image-upload");
const selectedHomeCoverImgView = document.querySelector(".selected_home_cover_img_view");
const coverImgErr = document.querySelector(".add_new_home_cover_img_err");
const headerTextErr = document.querySelectorAll(".home_cover_header_text_error");
const descErr = document.querySelectorAll(".home_cover_desc_error");

const coverSaveButton = document.querySelector(".home_cover_save_btn");
const cover_clear_button = document.querySelector(".home_cover_clear_btn");

selectedHomeCoverImgView.style.display = "none";

const clearInputFieldsCover = () => {
    headerTextInput.value = "";
    coverDescriptionInput.value = "";
    coverImageInput.value = "";
    selectedHomeCoverImgView.value = "";
};

coverImageInput.addEventListener("change", () => {
  const file = coverImageInput.files[0];
  const reader = new FileReader();

  // Check if a file was selected
  if (file) {
    // Check if the file type is JPG, JPEG, or PNG
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      // Check if the file size is less than 1MB
      if (file.size <= 1048576) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          // Create a new image object and set the onload event handler
          const img = new Image();
          img.onload = () => {
            if (img.width > 300) {
                selectedHomeCoverImgView.style.backgroundImage = `url('${reader.result}')`;
                selectedHomeCoverImgView.style.display = "block";
                coverImgErr.textContent = "";
            } else {
                coverImgErr.textContent =
                "Please select an image with a width greater than 300px.";
                coverImgErr.style.display = "none";
            }
          };
          img.src = reader.result;
        };
      } else {
        coverImgErr.textContent =
          "Please select an image with a file size less than 1MB.";
          selectedHomeCoverImgView.style.display = "none";
      }
    } else {
        coverImgErr.textContent =
        "Please select an image of type JPG, JPEG, or PNG.";
        selectedHomeCoverImgView.style.display = "none";
    }
  } else {
    selectedHomeCoverImgView.style.display = "none";
  }
});


coverSaveButton.addEventListener("click", () => {
  const cover_update_id = coverSaveButton.getAttribute("data-pk");
//   errorMessages.forEach((errorMessage) => {
//     errorMessage.textContent = "";
//   });

  const headerText = headerTextInput.value;
  const description = coverDescriptionInput.value;
  const image = coverImageInput.files[0];
  let isInvalidIMG = false;

  if (!image && !cover_update_id) {
    coverImgErr.textContent = "*Please select an image";
  } else if(
    image &&
    !image.type.includes("jpeg") &&
    !image.type.includes("png")
  ) {
    coverImgErr.textContent = "*Please select a JPEG or PNG image";
  } else if (image && image.size > 1000000) {
    coverImgErr.textContent = "*The image must be less than 1MB";
    isInvalidIMG = true;
  } else {
    coverImgErr.textContent = "";
  }

  if (headerText.trim() === "") {
    headerTextInput.nextElementSibling.textContent =
      "*Please enter a header text";
  } else if (headerText.length < 8 || headerText.length>100) {
    headerTextInput.nextElementSibling.textContent =
      "*The header text must be at least 8 characters long and less than 100 characters";
  } else {
    headerTextInput.nextElementSibling.textContent = "";
  }

  if (description.trim() === "") {
    coverDescriptionInput.nextElementSibling.textContent =
      "*Please enter a description";
  } else if (description.length < 100 || description.length>500) {
    coverDescriptionInput.nextElementSibling.textContent =
      "*The description must be at least 100 characters long and less than 500 characters";
  } else {
    coverDescriptionInput.nextElementSibling.textContent = "";
  }


  if (cover_update_id && headerText && description && headerTextErr.textContent=="" && descErr.textContent=="" && !isInvalidIMG) {
    if (image) {
    const formData = new FormData();
    formData.append("headerText", headerText);
    formData.append("description", description);
    formData.append("image", image);

    fetch("../../db/addHomeCover.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        displayPopUp(result);
        clearInputFieldsCover();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
      const formData = new FormData();
      formData.append("headerText", headerText);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("id", parseInt(cover_update_id));
      fetch("../../db/setHomeCoverById.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((result) => {
          displayPopUp(result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  if (
    !coverImgErr.textContent &&
    !headerTextInput.nextElementSibling.textContent &&
    !coverDescriptionInput.nextElementSibling.textContent 
  ) {
    const formData = new FormData();
    formData.append("headerText", headerText);
    formData.append("description", description);
    formData.append("image", image);

    fetch("../../db/addHomeCover.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        displayPopUp(result);
        clearInputFieldsCover();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});


cover_clear_button.addEventListener("click", (e) => {
  e.preventDefault();

  //console.log("clicked");

  headerTextInput.value = "";
  coverDescriptionInput.value = "";
  coverImageInput.value = "";
  selectedHomeCoverImgView.value = "";
});
