// const getVision = () => {
//   fetch("../../db/getVision.php")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         if (window.location.href.includes("admin")) {
//           if (data[0].image) {
//             document.querySelector(".selected_img_vision_view").style.display =
//               "block";
//             document.querySelector(
//               ".selected_img_vision_view"
//             ).style.backgroundImage = `url('data:image/jpeg;base64,${data[0].image}')`;
//           } else {
//             document.querySelector(".selected_img_vision_view").style.display =
//               "none";
//           }
//           document.querySelector(
//             '.form-container textarea[name="vision_page_description"]'
//           ).value = data[0].description;

//           document
//             .querySelector("#vision_page_save")
//             .setAttribute("data-pk", data[0].id);
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

const getVision = () => {
  $.ajax({
    url: "../../db/getVision.php",
    type: "GET",
    dataType: "json",
    success: function (data) {
      console.log("data - ", data);
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          if (data[0].image) {
            $(".selected_img_vision_view").css("display", "block");
            $(".selected_img_vision_view").css(
              "background-image",
              `url('data:image/jpeg;base64,${data[0].image}')`
            );
          } else {
            $(".selected_img_vision_view").css("display", "none");
          }
          $('textarea[name="vision_page_description"]').val(
            data[0].description
          );
          $("#vision_page_save").attr("data-pk", data[0].id);
        } else {
          var project = data[i];
          var imageEncoded = project.image;
          var image =
            '<img src="data:image/jpeg;base64,' +
            imageEncoded +
            '"class="img-fluid"/>';

          $(".about_vision .about_vision_img").html(image);
          $(".about_vision_desc p").html(data[0].description);
        }
      }
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });
};
getVision();
