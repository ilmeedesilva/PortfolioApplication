// (function () {
  const streetNo_input = document.querySelector('input[name="street_no"]');
  const streetNo_error = document.querySelector(".street_no_error");

  const street_name_input = document.querySelector('input[name="street"]');
  const streetName_error = document.querySelector(".street_error");

  const city_input = document.querySelector('input[name="city_no"]');
  const city_error = document.querySelector(".city_error");
  
  const country_input = document.querySelector('input[name="country"]');
  const country_error = document.querySelector(".country_error");
  
  const email_input = document.querySelector('input[name="mail"]');
  const email_error = document.querySelector(".mail_error");
  
  const phone1_input = document.querySelector('input[name="phone1"]');
  const phone1_error = document.querySelector(".phone1_error");
  
  const phone2_input = document.querySelector('input[name="phone2"]');
  const phone2_error = document.querySelector(".phone2_error");
  
  const openingHours = document.querySelector('input[name="openinig_hrs"]');
  const closingHours = document.querySelector('input[name="closing_hrs"]');
  const openingHoursError = document.querySelector(".opening_hrs_error");
  const closingHoursError = document.querySelector(".closing_hrs_error");
  
  const submit_button = document.querySelector(".contact_info_save_btn");
  
  submit_button.addEventListener("click", (e) => {
    e.preventDefault();
  
    // Street No
    if (!streetNo_input.value) {
      streetNo_error.innerHTML = "*Street No cannot be empty";
    } else {
      streetNo_error.innerHTML = "";
    }

    // Street Name
    if (!street_name_input.value) {
      streetName_error.innerHTML = "*Street Name cannot be empty";
    } else {
      streetName_error.innerHTML = "";
    }
  
    // City
    if (!city_input.value) {
      city_error.innerHTML = "*City cannot be empty";
    } else {
      city_error.innerHTML = "";
    }
  
    // Country
    if (!country_input.value) {
      country_error.innerHTML = "*Country cannot be empty";
    } else if (!country_input.value.match(/^[a-zA-Z\s]+$/)) {
      country_error.innerHTML = "*Country should not contain numbers";
    } else {
      country_error.innerHTML = "";
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
  
    // Contact no 1 & 2
    if (!phone1_input.value && !phone2_input.value) {
      phone1_error.innerHTML = "*Atleast one contact number should be entered";
    } else {
      if (phone1_input.value && !phone1_input.value.match(/^\d{10}$/)) {
        phone1_error.innerHTML = "*Enter a valid contact number";
      } else {
        phone1_error.innerHTML = "";
      }
      if (phone2_input.value && !phone2_input.value.match(/^\d{10}$/)) {
        phone2_error.innerHTML = "*Enter a valid contact number";
      } else {
        phone2_error.innerHTML = "";
      }
    }
  
    if (
      (openingHours.value && !closingHours.value) ||
      (!openingHours.value && closingHours.value)
    ) {
      openingHoursError.innerHTML =
        "*Please select both opening and closing hours";
      closingHoursError.innerHTML =
        "*Please select both opening and closing hours";
    } else if (openingHours.value >= closingHours.value) {
      openingHoursError.innerHTML = "*Opening hours must be before closing hours";
      closingHoursError.innerHTML = "*Closing hours must be after opening hours";
    } else {
      openingHoursError.innerHTML = "";
      closingHoursError.innerHTML = "";
    }
  
    if (
      !streetNo_error.innerHTML &&
      !streetName_error.innerHTML &&
      !city_error.innerHTML &&
      !country_error.innerHTML &&
      !phone1_error.innerHTML &&
      !phone2_error.innerHTML &&
      !openingHoursError.innerHTML &&
      !closingHoursError.innerHTML
    ) {
      console.log("email_input.value - ", email_input.value);
      fetch("../../db/updatCcontactInfo.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `street_no=${streetNo_input.value}&street_name=${street_name_input.value}&city_no=${city_input.value}&country=${country_input.value}&email=${email_input.value}&phone1=${phone1_input.value}&phone2=${phone2_input.value}&opening_hr=${openingHours.value}&closing_hr=${closingHours.value}`
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.text();
        })
        .then((data) => {
          displayPopUp(data);
        })
        .catch((error) => {
          console.error("Request failed:", error);
        });
    }
  });
  // });
  