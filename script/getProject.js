const getProject = () => {
  fetch("../../db/getProjects.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
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
          var project = data[i];
          var imageEncoded = project.image;
          var image =
            '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

          document.querySelector(
            ".project_img_wrapper .page_main_img"
          ).innerHTML = image;
          document.querySelector(".project_header_desc p").innerHTML =
            data[0].description;
        }
      }
    })
    .catch((err) => {
      alert(err);
    });
};
getProject();
