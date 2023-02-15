const getAbout = () => {
  fetch("../../db/getAbout.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          document.querySelector(
            '.form_wrapper textarea[name="aboutDesc"]'
          ).value = data[0].description;
          //   document.querySelector(
          //     '.form_Container input[name="city_no"]'
          //   ).value = data[0].city;
          //   document.querySelector(
          //     '.form_Container input[name="country"]'
          //   ).value = data[0].country;
          //   document.querySelector('.form_Container input[name="mail"]').value =
          //     data[0].email;
          //   document.querySelector('.form_Container input[name="phone1"]').value =
          //     data[0].phone1;
          //   document.querySelector('.form_Container input[name="phone2"]').value =
          //     data[0].phone2;
        } else {
          var project = data[i];
          var imageEncoded = project.image;
          var image =
            '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

          document.querySelector(".about_header .about_banner_img").innerHTML =
            image;
          document.querySelector(".about_header_desc p").innerHTML =
            data[0].description;
          // data[0].streetno;
        }
      }
    })
    .catch((err) => {
      alert(err);
    });
};
getAbout();
