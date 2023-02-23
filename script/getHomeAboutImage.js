const getHomeAboutImage = () => {
  isLoading(true);
  fetch("../../db/getHomeAboutImage.php")
    .then(function (response) {
      isLoading(false);
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          if (data[0].image) {
            document.querySelector(".selected_about_img_view").style.display =
              "block";
            document.querySelector(
              ".selected_about_img_view"
            ).style.backgroundImage = `url('data:image/jpeg;base64,${data[0].image}')`;
          } else {
            document.querySelector(".selected_about_img_view").style.display =
              "none";
            console.error("Invalid image data:", data[0].image);
          }
        } else if (document.querySelector(".about-img")) {
          let project = data[i];
          let imageEncoded = project.image;
          let imagetag = document.createElement("img");
          imagetag.src = "data:image/jpeg;base64," + imageEncoded;
          imagetag.alt = "home above image";
          document.querySelector(".about-img").appendChild(imagetag);
        }

        //   else{

        //   var project = data[i];
        //   var imageEncoded = project.image;
        //   var image = '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

        // }
      }
    })
    .catch((err) => {
      alert(err);
    });
};
getHomeAboutImage();
