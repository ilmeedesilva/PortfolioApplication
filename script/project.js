const input = document.querySelector('input[type="file"]');
const label = document.querySelector(".img_uploader_wrapper");
const fileName = document.querySelector(".img_uploader .file_name");

const errorTxt = document.querySelector(".img_uploader .error_img");

label.addEventListener("click", (e) => {
  input.click();
});

const selectedFile = (doc) => {
  const file = doc.files[0];
  const fileType = file.type;
  const fileSize = file.size;
  fileName.innerHTML = `${file.name}, size: ${file.size} bytes`;
  if (fileType) {
    errorTxt.innerHTML = "must include an image";
  }
  if (fileType !== "image/jpeg" && fileType !== "image/png") {
    errorTxt.innerHTML = "Invalid file type, only jpeg and png are allowed";
    return;
  } else if (fileSize > 2000000) {
    errorTxt.innerHTML = "File size must be less than 2 MB";
  } else {
    errorTxt.innerHTML = "";
  }
};
