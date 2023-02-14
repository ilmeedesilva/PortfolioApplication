const title1 = document.querySelector('input[name="slider1Title"]');
const err1 = document.querySelector(".slider1Title_error");
const desc1 = document.querySelector('textarea[name="slider1Desc"]');
const err1_desc = document.querySelector(".slider1Desc_error");

const title2 = document.querySelector('input[name="slider2Title"]');
const err2 = document.querySelector(".slider2Title_error");
const desc2 = document.querySelector('textarea[name="slider2Desc"]');
const err2_desc = document.querySelector(".slider2Desc_error");

const title3 = document.querySelector('input[name="slider3Title"]');
const err3 = document.querySelector(".slider3Title_error");
const desc3 = document.querySelector('textarea[name="slider3Desc"]');
const err3_desc = document.querySelector(".slider3Desc_error");

const submit_button1 = document.querySelector(".slider1_info");
const submit_button2 = document.querySelector(".slider2_info");
const submit_button3 = document.querySelector(".slider3_info");

submit_button1.addEventListener("click", (e) => {
  e.preventDefault();

  if (!title1.value) {
    err1.innerHTML = "*Title 1 cannot be empty";
  } else {
    err1.innerHTML = "";
  }
  if (!desc1.value) {
    err1_desc.innerHTML = "*Description 1 cannot be empty";
  } else {
    err1_desc.innerHTML = "";
  }

  if (!err1.innerHTML && !err1_desc.innerHTML) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../../db/updateSliderInfo.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //     // const feedback = document.querySelector(".feedback");
    //     // feedback.innerHTML = xhr.responseText;

    //     displayPopUp(xhr.responseText);
    //   }
    // };
    xhr.send(
      `title1=${title1.value}&desc1=${desc1.value}` // me tiyene value tika php eketa pass karana
    );
  }
});

submit_button2.addEventListener("click", (e) => {
  e.preventDefault();

  if (!title2.value) {
    err2.innerHTML = "*Title 2 cannot be empty";
  } else {
    err2.innerHTML = "";
  }
  if (!desc2.value) {
    err2_desc.innerHTML = "*Description 2 cannot be empty";
  } else {
    err2_desc.innerHTML = "";
  }

  if (!err2.innerHTML && !err2_desc.innerHTML) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../../db/updateSliderInfo.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //     // const feedback = document.querySelector(".feedback");
    //     // feedback.innerHTML = xhr.responseText;

    //     displayPopUp(xhr.responseText);
    //   }
    // };
    xhr.send(`title2=${title2.value}&desc2=${desc2.value}`);
  }
});

submit_button3.addEventListener("click", (e) => {
  e.preventDefault();

  if (!title3.value) {
    err3.innerHTML = "*Title 3 cannot be empty";
  } else {
    err3.innerHTML = "";
  }
  if (!desc3.value) {
    err3_desc.innerHTML = "*Description 3 cannot be empty";
  } else {
    err3_desc.innerHTML = "";
  }

  if (!err3.innerHTML && !err3_desc.innerHTML) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../../db/updateSliderInfo.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //     // const feedback = document.querySelector(".feedback");
    //     // feedback.innerHTML = xhr.responseText;

    //     displayPopUp(xhr.responseText);
    //   }
    // };
    xhr.send(`title3=${title3.value}&desc3=${desc3.value}`);
  }
});
