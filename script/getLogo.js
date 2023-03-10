// const getLogo = () => {
//   isLoading(true);
//   fetch("../../db/getLogo.php")
//     .then(function (response) {
//       isLoading(false);
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         if (window.location.href.includes("admin")) {
//           if (data[0].image) {
//             document.querySelector(".selected_logo_img_view").style.display =
//               "block";
//             document.querySelector(
//               ".selected_logo_img_view"
//             ).style.backgroundImage = `url('data:image/jpeg;base64,${data[0].image}')`;
//           } else {
//             document.querySelector(".selected_logo_img_view").style.display =
//               "none";
//             console.error("Invalid image data:", data[0].image);
//           }

//           // document
//           //   .querySelector(".logo_save_btn")
//           //   .setAttribute("data-pk", data[0].id);
//         } else {
//           var project = data[i];
//           var imageEncoded = project.image;
//           var image =
//             '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

//           document.querySelector(".top_nav_left").innerHTML =
//             '<a href="../../src/pages/home.php">' + image;
//           document.querySelector(".footer_content_logo_img").innerHTML = image;
//         }
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       alert(err);
//     });
// };
// getLogo();

const getLogo = () => {
  isLoading(true);
  $.ajax({
    url: "../../db/getLogo.php",
    type: "GET",
    dataType: "json",
    success: function (data) {
      isLoading(false);
      for (let i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          if (data[0].image) {
            $(".selected_logo_img_view").css("display", "block");
            $(".selected_logo_img_view").css(
              "background-image",
              `url('data:image/jpeg;base64,${data[0].image}')`
            );
          } else {
            $(".selected_logo_img_view").css("display", "none");
            console.error("Invalid image data:", data[0].image);
          }
          // $(".logo_save_btn").attr("data-pk", data[0].id);
        } else {
          let project = data[i];
          let imageEncoded = project.image;
          let image =
            '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';
          $(".top_nav_left").html('<a href="../../index.php">' + image);
          $(".footer_content_logo_img").html(image);

          let favicon = document.querySelector('link[rel="shortcut icon"]');
          if (!favicon) {
            favicon = document.createElement("link");
            favicon.setAttribute("rel", "shortcut icon");
            document.head.appendChild(favicon);
          }
          favicon.setAttribute("href", "data:image/png;base64," + imageEncoded);
        }
      }
    },
    error: function (err) {
      console.log(err);
      // alert(err);
    },
  });
};

getLogo();
