const mottoInput = document.querySelector(
  '.motto_uploader_wrapper input[type="file"]'
);
const mottoClick = document.querySelector(".motto_uploader_wrapper");

const selectedFileMotto = (doc) => {
  const file = doc.files[0];
  const fileType = file.type;
  const fileSize = file.size;
  const filesizeinMB = (file.size / 1000).toFixed(2);
  document.querySelector(
    ".motto_img_name"
  ).innerHTML = `${file.name}, size: ${filesizeinMB} KB`;
  if (fileType) {
    document.querySelector(".error_img_motto").innerHTML =
      "*Must include an image";
  }
  if (fileType !== "image/jpeg" && fileType !== "image/png") {
    document.querySelector(".error_img_motto").innerHTML =
      "*Invalid file type, only jpeg and png are allowed";
    return;
  } else if (fileSize > 1000000) {
    document.querySelector(".error_img_motto").innerHTML =
      "*File size must be less than 1MB";
  } else {
    document.querySelector(".error_img_motto").innerHTML = "";
  }
};

mottoClick.addEventListener("click", (e) => {
  mottoInput.click();
});

const descMotto = document.querySelector('textarea[name="mottoDesc"]');

const submit_button_motto = document.querySelector(".saveMotto");

const err_desc_motto = document.querySelector(".desc_error_motto");

document.querySelector(".saveMotto").addEventListener("click", (e) => {
  e.preventDefault();
  const err_img_motto = document.querySelector(".error_img_motto");
  if (!mottoInput.value) {
    err_img_motto.innerHTML = "*Please select an image";
  } else {
    err_img_motto.innerHTML = "";
  }
  if (!descMotto.value) {
    err_desc_motto.innerHTML = "*Description cannot be empty";
  } else if (descMotto.value.length <= 99 || descMotto.value.length > 500) {
    err_desc_motto.innerHTML =
      "*Motto Description should contain more than 100 characters and less than 500 characters";}    
  else {
    err_desc_motto.innerHTML = "";
  }
  if (!err_desc_motto.innerHTML && !err_img_motto.innerHTML) {
    document.querySelector(".error_img_motto").innerHTML = "";
    const selectedFileMotto1 = mottoInput.files[0];
    const formData = new FormData();
    formData.append("descMotto", descMotto.value);
    formData.append("image", selectedFileMotto1);

    fetch("../../db/updateMotto.php", {
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

// document.querySelector(".clearMotto").addEventListener("click", (e) => {
//   e.preventDefault();

//   descMotto.value = "";
//   mottoInput.value = "";
//   document.querySelector(".motto_img_name").innerHTML = "";
// });
