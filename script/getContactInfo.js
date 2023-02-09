const streetNoInput = document.querySelector(
  '.form_Container input[name="street_no"]'
);

const cityInput = document.querySelector(
  '.form_Container input[name="city_no"]'
);

const countryInput = document.querySelector(
  '.form_Container input[name="country"]'
);

const mailInput = document.querySelector('.form_Container input[name="mail"]');

const phone1Input = document.querySelector(
  '.form_Container input[name="phone1"]'
);

const phone2Input = document.querySelector(
  '.form_Container input[name="phone2"]'
);

const getContactInfo = () => {
  fetch("../../db/getContactInfo.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        streetNoInput.value = data[0].streetno;
        cityInput.value = data[0].city;
        countryInput.value = data[0].country;
        mailInput.value = data[0].streetno;
        phone1Input.value = data[0].phone1;
        phone2Input.value = data[0].phone2;
        console.log("get contact - ", data);
      }
    })
    .catch((err) => {
      console.log("err - ", err);
    });
};
getContactInfo();
