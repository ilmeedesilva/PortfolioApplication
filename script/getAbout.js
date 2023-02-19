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
          let displayDescription = data[0].description.substring(0,100).concat("...");
          document.querySelector(".about_desc_home").innerHTML =
            displayDescription;
          document.querySelector(".about_desc_footer").innerHTML =
            displayDescription;
        }
        else if (window.location.href.includes("about")){
          var project = data[i];
          var imageEncoded = project.image;
          var image =
            '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

          document.querySelector(".about_header .about_banner_img").innerHTML =
            image;
          document.querySelector(".about_header_desc p").innerHTML =
            data[0].description;
          document.querySelector(".about_desc_footer").innerHTML =
            data[0].description;
          
        }
        else{
          document.querySelector(".about_desc_footer").innerHTML =
            data[0].description;
        }
      }
    })
    .catch((err) => {
      alert(err);
    });
};
getAbout();
