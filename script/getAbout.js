const getAbout = () => {
  if (document.querySelector(".loading-txt-wrapper")) {
    document.querySelector(".loading-txt-wrapper").style.display = "block";
  }
  fetch("../../db/getAbout.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          if (data[0].image) {
            document.querySelector(".selected_img_about_view").style.display =
              "block";
            document.querySelector(
              ".selected_img_about_view"
            ).style.backgroundImage = `url('data:image/jpeg;base64,${data[0].image}')`;
          } else {
            document.querySelector(".selected_img_about_view").style.display =
              "none";
            console.error("Invalid image data:", data[0].image);
          }
          document.querySelector(
            '.form-container textarea[name="about_page_description"]'
          ).value = data[0].description;

          document
            .querySelector("#about_cover_page_save")
            .setAttribute("data-pk", data[0].id);
        } else if (
          window.location.pathname === "/" ||
          window.location.href.indexOf("index.php") > -1
        ) {
          if (document.querySelector(".loading-txt-wrapper")) {
            document.querySelector(".loading-txt-wrapper").style.display =
              "none";
          }
          let displayDescription1 = data[0].description
            .substring(0, 500)
            .concat("...");
          document.querySelector(".about_desc_home").innerHTML =
            displayDescription1;
          document.querySelector(".about_desc_footer").innerHTML =
            displayDescription1;
        } else if (window.location.href.includes("about")) {
          var project = data[i];
          var imageEncoded = project.image;
          var image =
            '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

          let displayDescription2 = data[0].description
            .substring(0, 500)
            .concat("...");

          document.querySelector(".about_header .about_banner_img").innerHTML =
            image;
          if (document.querySelector(".loading-txt-wrapper")) {
            document.querySelector(".loading-txt-wrapper").style.display =
              "none";
          }
          document.querySelector(".about_header_desc p").innerHTML =
            data[0].description;
          document.querySelector(".about_desc_footer").innerHTML =
            displayDescription2;
        } else {
          let displayDescription3 = data[0].description
            .substring(0, 500)
            .concat("...");
          document.querySelector(".about_desc_footer").innerHTML =
            displayDescription3;
        }
      }
    })
    .catch((err) => {
      document.querySelector(".loading-txt-wrapper").style.display = "none";
      alert(err);
    });
};
getAbout();

console.log("window.location.href - ", window.location.href);

// const getAbout = () => {
//   fetch("../../db/getAbout.php")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         if (window.location.href.includes("admin")) {
//           document.querySelector(
//             '.form_wrapper textarea[name="aboutDesc"]'
//           ).value = data[0].description;
//         } else if (window.location.href.includes("home")) {
//           let displayDescription1 = data[0].description.substring(0,500).concat("...");
//           document.querySelector(".about_desc_home").innerHTML =
//             displayDescription1;
//           document.querySelector(".about_desc_footer").innerHTML =
//             displayDescription1;
//         }
//         else if (window.location.href.includes("about")){
//           var project = data[i];
//           var imageEncoded = project.image;
//           var image =
//             '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

//           let displayDescription2 = data[0].description.substring(0,500).concat("...");

//           document.querySelector(".about_header .about_banner_img").innerHTML =
//             image;
//           document.querySelector(".about_header_desc p").innerHTML =
//             data[0].description;
//           document.querySelector(".about_desc_footer").innerHTML =
//             displayDescription2;

//         }
//         else{
//           let displayDescription3 = data[0].description.substring(0,500).concat("...");
//           document.querySelector(".about_desc_footer").innerHTML =
//             displayDescription3;
//         }
//       }
//     })
//     .catch((err) => {
//       alert(err);
//     });
// };
// getAbout();
