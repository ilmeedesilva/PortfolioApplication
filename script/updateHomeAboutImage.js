const aboutImgInput = document.querySelector(
    '.about_img_uploader_wrapper input[type="file"]'
  );
  const aboutImgClick = document.querySelector(".about_img_uploader_wrapper");
  
  const selectedAboutImgView = document.querySelector(
    ".selected_about_img_view"
  );
  
  selectedAboutImgView.style.display = "none";
  
  aboutImgInput.addEventListener("change", () => {
    if (aboutImgInput.files.length > 0) {
        selectedAboutImgView.style.backgroundImage = `url('${URL.createObjectURL(
        aboutImgInput.files[0]
      )}')`;
      selectedAboutImgView.style.display = "block";
    } else {
        selectedAboutImgView.style.display = "none";
    }
  });
  
  
  
  // const clearInputFields = () => {};
  
//   const displayPopUp = (res) => {
//     const header1 = document.querySelector(".status_descrip h6");
//     const detail = document.querySelector(".status_descrip p");
//     const background = document.querySelector(".status_popup_wrapper");
//     const icon = document.querySelector(".status_popup_wrapper .status_icon img");
  
//     if (res.includes("success")) {
//       background.style.backgroundColor = "#75cf0f";
//       icon.src = "../../resource/icon/success.png";
//       header1.innerHTML = "SUCCESS";
//       detail.innerHTML = "SUCCESSFULLY UPLOADED";
//     } else {
//       background.style.backgroundColor = "#e9374d";
//       icon.src = "../../resource/icon/fail.png";
//       header1.innerHTML = "FAILED";
//       detail.innerHTML = "SOMTHING WENT WRONG! PLEASE TRY AGAIN";
//     }
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//     document
//       .querySelector(".status_popup_wrapper")
//       .classList.remove("popup_hide");
//     document.querySelector(".status_popup_wrapper").classList.add("popup_show");
//     setTimeout(function () {
//       document
//         .querySelector(".status_popup_wrapper")
//         .classList.remove("popup_show");
//       document.querySelector(".status_popup_wrapper").classList.add("popup_hide");
//     }, 4000);
//   };
  
  const selectedAboutImageFile = (doc) => {
    const file = doc.files[0];
    const fileType = file.type;
    const fileSize = file.size;
    const filesizeinMB = (file.size / 1000).toFixed(2);
    document.querySelector(
      ".file_about_img"
    ).innerHTML = `${file.name}, size: ${filesizeinMB} KB`;
    if (fileType) {
      document.querySelector(".error_abt_img").innerHTML = "*Please select an image";
    }
    if (fileType !== "image/jpeg" && fileType !== "image/png") {
      document.querySelector(".error_abt_img").innerHTML =
        "*Invalid file type, only jpeg and png are allowed";
      return;
    } else if (fileSize > 1000000) {
      document.querySelector(".error_abt_img").innerHTML =
        "*File size must be less than 1MB";
    } else {
      document.querySelector(".error_abt_img").innerHTML = "";
    }
  };
  
  aboutImgClick.addEventListener("click", (e) => {
    aboutImgInput.click();
  });
  
  document.querySelector(".about_img_save_btn").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click");
    if (!aboutImgInput.value) {
      document.querySelector(".error_abt_img").innerHTML = "*Please select an image";
    } else {
      document.querySelector(".error_abt_img").innerHTML = "";
      const selectedFileAboutImg = aboutImgInput.files[0];
      const formData = new FormData();
      formData.append("image", selectedFileAboutImg);
  
      fetch("../../db/updateHomeAboutImage.php", {
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
  });
  