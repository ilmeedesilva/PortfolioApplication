const getProject = () => {
  if (document.querySelector(".loading-txt-wrapper")) {
    document.querySelector(".loading-txt-wrapper").style.display = "block";
  }
  fetch("../../db/getProjects.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        if (window.location.href.includes("report")) {
          let project = data[i];
          let imageEncoded = project.image;
          let image =
            '<img src="data:image/jpeg;base64,' +
            imageEncoded +
            '" class="img-fluid" alt="project cover image ' +
            project.id +
            '" />';

          document.querySelector(".project_main_img").innerHTML = image;
        } else if (window.location.href.includes("admin")) {
          if (data[0].image) {
            document.querySelector(".selected_cover_img_view").style.display =
              "block";
            document.querySelector(
              ".selected_cover_img_view"
            ).style.backgroundImage = `url('data:image/jpeg;base64,${data[0].image}')`;
          } else {
            document.querySelector(".selected_cover_img_view").style.display =
              "none";
            console.error("Invalid image data:", data[0].image);
          }
          document.querySelector(
            '.form-container textarea[name="project_page_description"]'
          ).value = data[0].description;

          document
            .querySelector("#project_page_save")
            .setAttribute("data-pk", data[0].id);
        } else {
          let project = data[i];
          let imageEncoded = project.image;
          let image =
            '<img src="data:image/jpeg;base64,' +
            imageEncoded +
            '" class="img-fluid" alt="project cover image ' +
            project.id +
            '" />';

          document.querySelector(
            ".project_img_wrapper .page_main_img"
          ).innerHTML = image;
          if (document.querySelector(".loading-txt-wrapper")) {
            document.querySelector(".loading-txt-wrapper").style.display =
              "none";
          }
          document.querySelector(".project_header_desc p").innerHTML =
            data[0].description;
        }
      }
    })
    .catch((err) => {
      if (document.querySelector(".loading-txt-wrapper")) {
        document.querySelector(".loading-txt-wrapper").style.display = "none";
      }
      console.log(err);
    });
};
getProject();

// const getProject = () => {
//   $(".loading-txt-wrapper").show();
//   $.ajax({
//     url: "../../db/getProjects.php",
//     method: "GET",
//     dataType: "json",
//     success: function (data) {
//       for (var i = 0; i < data.length; i++) {
//         if (window.location.href.includes("admin")) {
//           if (data[0].image) {
//             $(".selected_cover_img_view")
//               .show()
//               .css(
//                 "background-image",
//                 `url('data:image/jpeg;base64,${data[i].image}')`
//               );
//           } else {
//             $(".selected_cover_img_view").hide();
//             console.error("Invalid image data:", data[i].image);
//           }
//           $('textarea[name="project_page_description"]').val(
//             data[0].description
//           );
//           $("#project_page_save").attr("data-pk", data[i].id);
//         } else {
//           var project = data[i];
//           var imageEncoded = project.image;
//           var image =
//             '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';
//           $(".project_img_wrapper .page_main_img").html(image);
//           $(".loading-txt-wrapper").hide();
//           $(".project_header_desc p").html(data[i].description);
//         }
//       }
//     },
//     error: function (err) {
//       $(".loading-txt-wrapper").hide();
//       alert(err);
//     },
//   });
// };
// getProject();
