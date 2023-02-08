const logoInput = document.querySelector(
  '.logo_uploader_wrapper input[type="file"]'
);
const logoClick = document.querySelector(".logo_uploader_wrapper");

const selectedLogoFile = (doc) => {
  console.log("doc - ", doc);
  const file = doc.files[0];
  const fileType = file.type;
  const fileSize = file.size;
  const filesizeinMB = (file.size / 1000).toFixed(2);
  document.querySelector(
    ".file_name"
  ).innerHTML = `${file.name}, size: ${filesizeinMB} KB`;
  if (fileType) {
    document.querySelector(".error_logo").innerHTML = "*Must include an image";
  }
  if (fileType !== "image/jpeg" && fileType !== "image/png") {
    document.querySelector(".error_logo").innerHTML =
      "*Invalid file type, only jpeg and png are allowed";
    return;
  } else if (fileSize > 1000000) {
    document.querySelector(".error_logo").innerHTML =
      "*File size must be less than 1MB";
  } else {
    document.querySelector(".error_logo").innerHTML = "";
  }
};

logoClick.addEventListener("click", (e) => {
  logoInput.click();
});

document.querySelector(".logo_save_btn").addEventListener("click", (e) => {
  e.preventDefault();
  if (!logoInput.value) {
    document.querySelector(".error_logo").innerHTML = "no image selected";
  } else {
    document.querySelector(".error_logo").innerHTML = "";
    const selectedFile = logoInput.files[0];
    const formData = new FormData();
    formData.append("image", selectedFile);

    fetch("../../db/updateLogo.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log("result - ", result);
        // displayPopUp(result);
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
