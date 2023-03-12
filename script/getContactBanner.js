console.log(window.location.href);

const getContactBanner = () => {
  if (document.querySelector(".loading-txt-wrapper")) {
    document.querySelector(".loading-txt-wrapper").style.display = "block";
  }
  fetch("../../db/getContactBanner.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          console.log("else");
          if (data[0].image) {
            document.querySelector(".selected_banner_img_view").style.display =
              "block";
            document.querySelector(
              ".selected_banner_img_view"
            ).style.backgroundImage = `url('data:image/jpeg;base64,${data[0].image}')`;
          } else {
            document.querySelector(".selected_banner_img_view").style.display =
              "none";
            console.error("Invalid image data:", data[0].image);
          }
        } else {
          console.log("contact");
          var project = data[i];
          var imageEncoded = project.image;
          var image =
            '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

          document.querySelector(".page_main_img").innerHTML = image;
        }
      }
    })
    .catch((err) => {
      if (document.querySelector(".loading-txt-wrapper")) {
        document.querySelector(".loading-txt-wrapper").style.display = "none";
      }

      alert(err);
    });
};
getContactBanner();
