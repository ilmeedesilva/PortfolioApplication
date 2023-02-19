const tagLineInput = document.querySelector(
  '.tagLine_uploader_wrapper input[type="file"]'
);
const tagLineClick = document.querySelector(".tagLine_uploader_wrapper");

const selectedFileTagLine = (doc) => {
  const file = doc.files[0];
  const fileType = file.type;
  const fileSize = file.size;
  const filesizeinMB = (file.size / 1000).toFixed(2);
  document.querySelector(
    ".tagLine_img_name"
  ).innerHTML = `${file.name}, size: ${filesizeinMB} KB`;
  if (fileType) {
    document.querySelector(".error_img_tagLine").innerHTML =
      "*Please select an image";
  }
  if (fileType !== "image/jpeg" && fileType !== "image/png") {
    document.querySelector(".error_img_tagLine").innerHTML =
      "*Invalid file type, only jpeg and png are allowed";
    return;
  } else if (fileSize > 1000000) {
    document.querySelector(".error_img_tagLine").innerHTML =
      "*File size must be less than 1MB";
  } else {
    document.querySelector(".error_img_tagLine").innerHTML = "";
  }
};

tagLineClick.addEventListener("click", (e) => {
  tagLineInput.click();
});

const descTagLine = document.querySelector('textarea[name="tagLineDesc"]');

const submit_button_tagLine = document.querySelector(".saveTagLine");

const err_desc_tagLine = document.querySelector(".desc_error_tagLine");

document.querySelector(".saveTagLine").addEventListener("click", (e) => {
  e.preventDefault();
  const err_img_tagLine = document.querySelector(".error_img_tagLine");
  if (!tagLineInput.value) {
    err_img_tagLine.innerHTML = "*Please select an image";
  } else {
    err_img_tagLine.innerHTML = "";
  }
  if (!descTagLine.value) {
    err_desc_tagLine.innerHTML = "*Description cannot be empty";
  } else if (descTagLine.value.length <= 99 || descTagLine.value.length > 500) {
    err_desc_tagLine.innerHTML =
      "*TagLine Description should contain more than 100 characters and less than 500 characters";}   
  else {
    err_desc_tagLine.innerHTML = "";
  }
  if (!err_desc_tagLine.innerHTML && !err_img_tagLine.innerHTML) {
    document.querySelector(".error_img_tagLine").innerHTML = "";
    const selectedFileTagLine1 = tagLineInput.files[0];
    const formData = new FormData();
    formData.append("descTagLine", descTagLine.value);
    formData.append("image", selectedFileTagLine1);

    fetch("../../db/updateTagLine.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        displayPopUp(result);

        // displayPopUp(result);
        // if (result.includes("success")) {

        // } else {
        //   alert("Failed to save data");
        // }
      })
      .catch((error) => {
        alert(error);
      });
  }
});

// document.querySelector(".clearTagLine").addEventListener("click", (e) => {
//   e.preventDefault();

//   descTagLine.value = "";
//   tagLineInput.value = "";
//   document.querySelector(".tagLine_img_name").innerHTML = "";
// });
