const getVision = () => {
  fetch("../../db/getVision.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          if (data[0].image) {
            document.querySelector(".selected_img_vision_view").style.display =
              "block";
            document.querySelector(
              ".selected_img_vision_view"
            ).style.backgroundImage = `url('data:image/jpeg;base64,${data[0].image}')`;
          } else {
            document.querySelector(".selected_img_vision_view").style.display =
              "none";
            console.error("Invalid image data:", data[0].image);
          }
          document.querySelector(
            '.form-container textarea[name="vision_page_description"]'
          ).value = data[0].description;

          document
            .querySelector("#vision_page_save")
            .setAttribute("data-pk", data[0].id);
        } 
        else {
          var project = data[i];
          var imageEncoded = project.image;
          var image =
            '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

          document.querySelector(".about_vision .about_vision_img").innerHTML =
            image;
          document.querySelector(".about_vision_desc p").innerHTML =
            data[0].description;
        }
      }
    })
    .catch((err) => {
      alert(err);
    });
};
getVision();

























// const getVision = () => {
//   fetch("../../db/getVision.php")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         if (window.location.href.includes("admin")) {
//           document.querySelector(
//             '.form_wrapper textarea[name="visionDesc"]'
//           ).value = data[0].description;
//         } else {
//           var project = data[i];
//           var imageEncoded = project.image;
//           var image =
//             '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

//           document.querySelector(".about_vision .about_vision_img").innerHTML =
//             image;
//           document.querySelector(".about_vision_desc p").innerHTML =
//             data[0].description;
//         }
//       }
//     })
//     .catch((err) => {
//       alert(err);
//     });
// };
// getVision();
