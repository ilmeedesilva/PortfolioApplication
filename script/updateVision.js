const visionInput = document.querySelector(
    '.vision_uploader_wrapper input[type="file"]'
  );
const visionClick = document.querySelector(".vision_uploader_wrapper");
  
  
const selectedFileVision = (doc) => {
    const file = doc.files[0];
    const fileType = file.type;
    const fileSize = file.size;
    const filesizeinMB = (file.size / 1000).toFixed(2);
    document.querySelector(
      ".file_name"
    ).innerHTML = `${file.name}, size: ${filesizeinMB} KB`;
    if (fileType) {
      document.querySelector(".error_img_vision").innerHTML =
        "*Must include an image";
    }
    if (fileType !== "image/jpeg" && fileType !== "image/png") {
      document.querySelector(".error_img_vision").innerHTML =
        "*Invalid file type, only jpeg and png are allowed";
      return;
    } else if (fileSize > 1000000) {
      document.querySelector(".error_img_vision").innerHTML =
        "*File size must be less than 1MB";
    } else {
      document.querySelector(".error_img_vision").innerHTML = "";
    }
};
  
visionClick.addEventListener("click", (e) => {
    visionInput.click();
});
  
  const descVision = document.querySelector('textarea[name="visionDesc"]');
  
  const submit_button_vision = document.querySelector(".saveVision");
  
  const err_desc_vision = document.querySelector(".desc_error_vision");
  
  
  document.querySelector(".saveVision").addEventListener("click", (e) => {
    e.preventDefault();
    const err_img_vision = document.querySelector(".error_img_vision");
    if (!visionInput.value) {
      err_img_vision.innerHTML = "no image selected";
    } else {
      err_img_vision.innerHTML = "";
    }
    if (!descVision.value) {
      err_desc_vision.innerHTML = "*Description cannot be empty";
    } else {
      err_desc_vision.innerHTML = "";
    }
    if (!err_desc_vision.innerHTML && !err_img_vision.innerHTML) {
      document.querySelector(".error_img_vision").innerHTML = "";
      const selectedFileAbout2 = visionInput.files[0];
      const formData = new FormData();
      formData.append("descVision", descVision.value);
      formData.append("image", selectedFileAbout2);
  
      fetch("../../db/updateVision.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((result) => {
          console.log("result - ", result);
          displayPopUp(result);
  
          // displayPopUp(result);
          // if (result.includes("success")) {
  
          // } else {
          //   alert("Failed to save data");
          // }
        })
        .catch((error) => {
          console.log("error - ", error);
          console.error("Error:", error);
        });
    }
  });
  