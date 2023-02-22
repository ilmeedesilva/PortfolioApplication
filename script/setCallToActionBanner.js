const ctaMainTitleInput = document.getElementById("Cta-Main-Title");
const ctaSubTitleInput = document.getElementById("Cta-Sub-Title");
const ctaImageInput = document.getElementById("call-to-action-image-upload");
const selectedCtaImgView = document.querySelector(".selected_img_view_cta");
const ctaImgErr = document.querySelector(".call_to_action_img_err");
const ctaMainTitleErr = document.querySelectorAll(".call_to_action_main_title_error");
const ctaSubTitleErr = document.querySelectorAll(".call_to_action_sub_title_error");
const errorMessages = document.querySelectorAll(".error-msg");

const saveButton = document.querySelector(".cta_save_btn");
const cta_clear_button = document.querySelector(".cta_clear_btn");

selectedCtaImgView.style.display = "none";

const clearInputFieldsCta = () => {
  ctaMainTitleInput.value = "";
  ctaSubTitleInput.value = "";
  ctaImageInput.value = "";
  selectedCtaImgView.value = "";
};

ctaImageInput.addEventListener("change", () => {
  const file = ctaImageInput.files[0];
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
              selectedCtaImgView.style.backgroundImage = `url('${reader.result}')`;
              selectedCtaImgView.style.display = "block";
              ctaImgErr.textContent = "";
            } else {
              ctaImgErr.textContent =
                "Please select an image with a width greater than 300px.";
              ctaImgErr.style.display = "none";
            }
          };
          img.src = reader.result;
        };
      } else {
        ctaImgErr.textContent =
          "Please select an image with a file size less than 1MB.";
        selectedCtaImgView.style.display = "none";
      }
    } else {
      ctaImgErr.textContent =
        "Please select an image of type JPG, JPEG, or PNG.";
      selectedCtaImgView.style.display = "none";
    }
  } else {
    selectedCtaImgView.style.display = "none";
  }
});


saveButton.addEventListener("click", () => {
  const cta_update_id = saveButton.getAttribute("data-pk");
  errorMessages.forEach((errorMessage) => {
    errorMessage.textContent = "";
  });

  const mainTitleName = ctaMainTitleInput.value;
  const subTitleName = ctaSubTitleInput.value;
  const image = ctaImageInput.files[0];
  let isInvalidIMG = false;

  if (!image && !cta_update_id) {
    ctaImgErr.textContent = "*Please select an image";
  } else if(
    image &&
    !image.type.includes("jpeg") &&
    !image.type.includes("png")
  ) {
    ctaImgErr.textContent = "*Please select a JPEG or PNG image";
  } else if (image && image.size > 1000000) {
    ctaImgErr.textContent = "*The image must be less than 1MB";
    isInvalidIMG = true;
  } else {
    ctaImgErr.textContent = "";
  }

  if (mainTitleName.trim() === "") {
    ctaMainTitleInput.nextElementSibling.textContent =
      "*Please enter a project name";
  } else if (mainTitleName.length < 8) {
    ctaMainTitleInput.nextElementSibling.textContent =
      "*The project name must be at least 8 characters long";
  } else {
    ctaMainTitleInput.nextElementSibling.textContent = "";
  }

  if (subTitleName.trim() === "") {
    ctaSubTitleInput.nextElementSibling.textContent =
      "*Please enter a project name";
  } else if (mainTitleName.length < 8) {
    ctaSubTitleInput.nextElementSibling.textContent =
      "*The project name must be at least 8 characters long";
  } else {
    ctaSubTitleInput.nextElementSibling.textContent = "";
  }


  if (cta_update_id && mainTitleName && subTitleName && ctaMainTitleErr.textContent=="" && ctaSubTitleErr.textContent=="" && !isInvalidIMG) {
    if (image) {
    const formData = new FormData();
    formData.append("mainTitle", mainTitleName);
    formData.append("subTitle", subTitleName);
    formData.append("image", image);

    fetch("../../db/addCallToAction.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        displayPopUp(result);
        clearInputFieldsCta();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
      const formData = new FormData();
      formData.append("mainTitle", mainTitleName);
      formData.append("subTitle", subTitleName);
      formData.append("image", image);
      formData.append("id", parseInt(cta_update_id));
      fetch("../../db/setCtaBannerById.php", {
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
    !ctaImgErr.textContent &&
    !ctaMainTitleInput.nextElementSibling.textContent &&
    !ctaSubTitleInput.nextElementSibling.textContent 
  ) {
    const formData = new FormData();
    formData.append("mainTitle", mainTitleName);
    formData.append("subTitle", subTitleName);
    formData.append("image", image);

    fetch("../../db/addCallToAction.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        displayPopUp(result);
        clearInputFieldsCta();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});


cta_clear_button.addEventListener("click", (e) => {
  e.preventDefault();

  //console.log("clicked");

  ctaMainTitleInput.value = "";
  ctaSubTitleInput.value = "";
  ctaImageInput.value = "";
  selectedCtaImgView.value = "";
});
