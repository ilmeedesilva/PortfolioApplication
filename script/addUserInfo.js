const name_input = document.querySelector('input[name="name"]');
const name_error = document.querySelector(".name_error");

const email_input = document.querySelector('input[name="email"]');
const email_error = document.querySelector(".email_error");

const contactno_input = document.querySelector('input[name="contactNo"]');
const contactno_error = document.querySelector(".tel_error");

const username_input = document.querySelector('input[name="user_name"]');
const username_error = document.querySelector(".username_error");

const pwd_input = document.querySelector('input[name="password"]');
const pwd_error = document.querySelector(".pwd_error");

const confirmpwd_input = document.querySelector('input[name="confirm_password"]');
const confirmpwd_error = document.querySelector(".confirmpwd_error");

const submit_button = document.querySelector(".add_user_save_btn");

const displayPopUp = (res) => {
    const header1 = document.querySelector(".status_descrip h6");
    const detail = document.querySelector(".status_descrip p");
    const background = document.querySelector(".status_popup_wrapper");
    const icon = document.querySelector(".status_popup_wrapper .status_icon img");
  
    if (res.includes("success")) {
      background.style.backgroundColor = "#75cf0f";
      icon.src = "../../resource/icon/success.png";
      header1.innerHTML = "SUCCESS";
      detail.innerHTML = "SUCCESSFULLY ADDED";
    } else {
      background.style.backgroundColor = "#e9374d";
      icon.src = "../../resource/icon/fail.png";
      header1.innerHTML = "FAILED";
      detail.innerHTML = "SOMTHING WENT WRONG! PLEASE TRY AGAIN";
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    document
      .querySelector(".status_popup_wrapper")
      .classList.remove("popup_hide");
    document.querySelector(".status_popup_wrapper").classList.add("popup_show");
    setTimeout(function () {
      document
        .querySelector(".status_popup_wrapper")
        .classList.remove("popup_show");
      document.querySelector(".status_popup_wrapper").classList.add("popup_hide");
    }, 4000);
  };

submit_button.addEventListener("click", (e) => {

    e.preventDefault();
  
    // Name
    if (!name_input.value) {
        name_error.innerHTML = "*Name cannot be empty";
    } else if (!name_input.value.match(/^[a-zA-Z\s]+$/)) {
        name_error.innerHTML = "*Name should not contain numbers";
    } else {
        name_error.innerHTML = "";
    }
  
    // Email
    if (!email_input.value) {
      email_error.innerHTML = "*Email cannot be empty";
    } else if (
      !email_input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      email_error.innerHTML = "*Enter a valid email address";
    } else {
      email_error.innerHTML = "";
    }
  
    // Contact no 
    if (!contactno_input.value) {
      contactno_error.innerHTML = "*Contact number cannot be empty";
    } else if(!contactno_input.value.match(/^\d{10}$/)){
        //console.log("CONTACT");
        contactno_error.innerHTML = "*Enter a valid contact number";
    } else {
        contactno_error.innerHTML = "";
    }

    // User Name
    if (!username_input.value) {
        username_error.innerHTML = "*User name cannot be empty";
    } else {
        //console.log("ELSE");
        if(username_input.value.length<4 || username_input.value.length>8){
            //console.log("Else - IF");
            username_error.innerHTML = "*User name must contain 4 to 8 charcters";
        }
        else{
            username_error.innerHTML = "";
        } 
    }

    // Password
    if (!pwd_input.value) {
        pwd_error.innerHTML = "*Password cannot be empty";
    } else {
        if(pwd_input.value.length<=7){
            pwd_error.innerHTML = "*Password must contain more than 8 charcters";
        } else{
            pwd_error.innerHTML = "";
        } 
    }

    // Confirm Password
    if (pwd_input.value.length>0 && confirmpwd_input.value.length<=0) {
        confirmpwd_error.innerHTML = "*Re-confirm the password";
    }
    
    if (confirmpwd_input.value.length>7 && pwd_input.value.length>7) {
        //console.log("Confirm pwd");
        if(pwd_input.value!=confirmpwd_input.value){
            //console.log("Confirm pwd IF");
            confirmpwd_error.innerHTML = "*Password does not match";
        } else{
            confirmpwd_error.innerHTML = "";
        }
    }

    if (
      !name_error.innerHTML &&
      !email_error.innerHTML &&
      !contactno_error.innerHTML &&
      !username_error.innerHTML &&
      !pwd_error.innerHTML &&
      !confirmpwd_error.innerHTML
    ) {


        const formData = new FormData();
        formData.append("name",name_input.value);
        formData.append("email", email_input.value);

        formData.append("contactNo",contactno_input.value);
        formData.append("user_name", username_input.value);
        formData.append("password",confirmpwd_input.value);

    
        fetch("../../db/addUserInfo.php", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.text())
          .then((result) => {
            displayPopUp(result);
          })
          .catch((error) => {
            alert(error);
          });

      }

    
  });