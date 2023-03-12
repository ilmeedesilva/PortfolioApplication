const getHomeCover = () => {
  if (!window.location.href.includes("report")) isLoading(true);
  fetch("../../db/getHomeCover.php")
    .then(function (response) {
      if (!window.location.href.includes("report")) isLoading(false);
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          if (window.location.href.includes("report")) {
            document.querySelector(
              ".main_banner"
            ).style.backgroundImage = `url('data:image/jpeg;base64,${data[0].image}')`;
            document.querySelector(".banner_text_section h2").innerHTML =
              data[0].headerText;
            document.querySelector(".banner_text_section p").innerHTML =
              data[0].description;
          } else {
            if (data[0].image) {
              document.querySelector(
                ".selected_home_cover_img_view"
              ).style.display = "block";
              document.querySelector(
                ".selected_home_cover_img_view"
              ).style.backgroundImage = `url('data:image/jpeg;base64,${data[0].image}')`;
            } else {
              document.querySelector(
                ".selected_home_cover_img_view"
              ).style.display = "none";
              console.error("Invalid image data:", data[0].image);
            }
            document.getElementById("header-text").value = data[0].headerText;
            document.getElementById("cover-description").value =
              data[0].description;

            document
              .querySelector(".home_cover_save_btn")
              .setAttribute("data-pk", data[0].id);
          }
        } else {
          document.querySelector(
            ".main_banner"
          ).style.backgroundImage = `url('data:image/jpeg;base64,${data[0].image}')`;
          document.querySelector(".banner_text_section h2").innerHTML =
            data[0].headerText;
          document.querySelector(".banner_text_section p").innerHTML =
            data[0].description;
        }
      }
    })
    .catch((err) => {
      console.log(err);
      // alert(err);
    });
};
getHomeCover();
