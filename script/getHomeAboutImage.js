const getHomeAboutImage = () => {
  isLoading(true);

  $(".about-img .loading-banner").css("display", "block");
  $.ajax({
    url: "../../db/getHomeAboutImage.php",
    method: "GET",
    dataType: "json",
    success: function (data) {
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          if (data[0].image) {
            $(".selected_about_img_view").css("display", "block");
            $(".selected_about_img_view").css(
              "background-image",
              `url('data:image/jpeg;base64,${data[0].image}')`
            );
          } else {
            $(".selected_about_img_view").css("display", "none");
            console.error("Invalid image data:", data[0].image);
          }
        } else if ($(".about-img").length) {
          let project = data[i];
          let imageEncoded = project.image;
          let imagetag = $("<img/>", {
            src: "data:image/jpeg;base64," + imageEncoded,
            alt: "home above image",
          });
          $(".about-img .loading-banner").css("display", "none");
          $(".about-img").append(imagetag);
        }
      }
    },
    error: function (err) {
      $(".about-img .loading-banner").css("display", "none");
      alert(err);
    },
  });
};

getHomeAboutImage();
