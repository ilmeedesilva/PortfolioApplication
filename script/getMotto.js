// const getMotto = () => {
//   fetch("../../db/getMotto.php")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         if (window.location.href.includes("admin")) {
//           if (data[0].image) {
//             document.querySelector(".selected_img_motto_view").style.display =
//               "block";
//             document.querySelector(
//               ".selected_img_motto_view"
//             ).style.backgroundImage = `url('data:image/jpeg;base64,${data[0].image}')`;
//           } else {
//             document.querySelector(".selected_img_motto_view").style.display =
//               "none";
//             console.error("Invalid image data:", data[0].image);
//           }
//           document.querySelector(
//             '.form-container textarea[name="motto_page_description"]'
//           ).value = data[0].description;

//           document
//             .querySelector("#motto_page_save")
//             .setAttribute("data-pk", data[0].id);
//         } else {
//           var project = data[i];
//           var imageEncoded = project.image;
//           var image =
//             '<img src="data:image/jpeg;base64,' +
//             imageEncoded +
//             '"class="img-fluid"/>';

//           document.querySelector(".about_motto .about_motto_img").innerHTML =
//             image;
//           document.querySelector(".about_motto_desc p").innerHTML =
//             data[0].description;
//         }
//       }
//     })
//     .catch((err) => {
//       alert(err);
//     });
// };
// getMotto();

// const getMotto = () => {
//   fetch("../../db/getMotto.php")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         if (window.location.href.includes("admin")) {
//           document.querySelector(
//             '.form_wrapper textarea[name="mottoDesc"]'
//           ).value = data[0].description;
//         } else {
//           var project = data[i];
//           var imageEncoded = project.image;
//           var image =
//             '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

//           document.querySelector(".about_motto .about_motto_img").innerHTML =
//             image;
//           document.querySelector(".about_motto_desc p").innerHTML =
//             data[0].description;
//         }
//       }
//     })
//     .catch((err) => {
//       alert(err);
//     });
// };
// getMotto();

const getMotto = () => {
  $.ajax({
    url: "../../db/getMotto.php",
    type: "GET",
    dataType: "json",
    success: function (data) {
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          if (data[0].image) {
            $(".selected_img_motto_view").css("display", "block");
            $(".selected_img_motto_view").css(
              "background-image",
              `url('data:image/jpeg;base64,${data[0].image}')`
            );
          } else {
            $(".selected_img_motto_view").css("display", "none");
            console.error("Invalid image data:", data[0].image);
          }
          $('textarea[name="motto_page_description"]').val(data[0].description);

          $("#motto_page_save").attr("data-pk", data[0].id);
        } else {
          var project = data[i];
          var imageEncoded = project.image;
          var image = `<img src="data:image/jpeg;base64,${imageEncoded}" class="img-fluid"/>`;

          $(".about_motto .about_motto_img").html(image);
          $(".about_motto_desc p").html(data[0].description);
        }
      }
    },
    error: function (err) {
      console.log(err);
    },
  });
};

getMotto();
