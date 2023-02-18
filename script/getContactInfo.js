const getContactInfo = () => {
  fetch("../../db/getContactInfo.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          document.querySelector(
            '.form_Container input[name="street_no"]'
          ).value = data[0].streetno;
          document.querySelector(
            '.form_Container input[name="street"]'
          ).value = data[0].street_name;
          document.querySelector(
            '.form_Container input[name="city_no"]'
          ).value = data[0].city;
          document.querySelector(
            '.form_Container input[name="country"]'
          ).value = data[0].country;
          document.querySelector('.form_Container input[name="mail"]').value =
            data[0].email;
          document.querySelector('.form_Container input[name="mail"]').value =
            data[0].email;
          document.querySelector('.form_Container input[name="phone1"]').value =
            data[0].phone1;
          document.querySelector('.form_Container input[name="phone2"]').value =
            data[0].phone2;
          document.querySelector('.form_Container input[name="openinig_hrs"]').value =
            data[0].opening_hr;
          document.querySelector('.form_Container input[name="closing_hrs"]').value =
            data[0].closing_hr;
        } else {
          document.querySelector(".contact_info_address .street_no").innerHTML =
            data[0].streetno;
          document.querySelector(".contact_info_address .street_name").innerHTML =
            data[0].street_name;
          document.querySelector(".contact_info_address .city").innerHTML =
            data[0].city;
          document.querySelector(".contact_info_address .country").innerHTML =
            data[0].country;
          document.querySelector(".contact_info_email .email").innerHTML =
            data[0].email;
          document.querySelector(".contact_info_phone .no1").innerHTML =
            data[0].phone1;
          document.querySelector(".contact_info_phone .no2").innerHTML =
            data[0].phone2;
        }
      }
    })
    .catch((err) => {
      alert(err);
    });
};
getContactInfo();
