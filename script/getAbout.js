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
        } else if (window.location.href.includes("home")) {
          let displayDescription1 = data[0].description.substring(0,500).concat("...");
          document.querySelector(".about_desc_home").innerHTML =
            displayDescription1;
          document.querySelector(".about_desc_footer").innerHTML =
            displayDescription1;
        }
        else if (window.location.href.includes("about")){
          var project = data[i];
          var imageEncoded = project.image;
          var image =
            '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

          let displayDescription2 = data[0].description.substring(0,500).concat("...");

          document.querySelector(".about_header .about_banner_img").innerHTML =
            image;
          document.querySelector(".about_header_desc p").innerHTML =
            data[0].description;
          document.querySelector(".about_desc_footer").innerHTML =
            displayDescription2;
          
        }
        else{
          let displayDescription3 = data[0].description.substring(0,500).concat("...");
          document.querySelector(".about_desc_footer").innerHTML =
            displayDescription3;
        }
      }
    })
    .catch((err) => {
      alert(err);
    });
};
getAbout();
