const getTagLine = () => {
  fetch("../../db/getTagLine.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          if (data[0].image) {
            document.querySelector(".selected_img_tagLine_view").style.display =
              "block";
            document.querySelector(
              ".selected_img_tagLine_view"
            ).style.backgroundImage = `url('data:image/jpeg;base64,${data[0].image}')`;
          } else {
            document.querySelector(".selected_img_tagLine_view").style.display =
              "none";
            console.error("Invalid image data:", data[0].image);
          }
          document.querySelector(
            '.form-container textarea[name="tagLine_page_description"]'
          ).value = data[0].description;

          document
            .querySelector("#tagLine_page_save")
            .setAttribute("data-pk", data[0].id);
        } else {
          var project = data[i];
          var imageEncoded = project.image;
          var image =
            '<img src="data:image/jpeg;base64,' +
            imageEncoded +
            '"class="img-fluid"/>';

          document.querySelector(
            ".about_tagLine .about_tagLine_img"
          ).innerHTML = image;
          document.querySelector(".about_tagLine_desc p").innerHTML =
            data[0].description;
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
getTagLine();

// const getTagLine = () => {
//   fetch("../../db/getTagLine.php")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         if (window.location.href.includes("admin")) {
//           document.querySelector(
//             '.form_wrapper textarea[name="tagLineDesc"]'
//           ).value = data[0].description;
//         } else {
//           var project = data[i];
//           var imageEncoded = project.image;
//           var image =
//             '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

//           document.querySelector(
//             ".about_tagLine .about_tagLine_img"
//           ).innerHTML = image;
//           document.querySelector(".about_tagLine_desc p").innerHTML =
//             data[0].description;
//         }
//       }
//     })
//     .catch((err) => {
//       alert(err);
//     });
// };
// getTagLine();
