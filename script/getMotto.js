const getMotto = () => {
  fetch("../../db/getMotto.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          document.querySelector(
            '.form_wrapper textarea[name="mottoDesc"]'
          ).value = data[0].description;
        } else {
          var project = data[i];
          var imageEncoded = project.image;
          var image =
            '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

          document.querySelector(".about_motto .about_motto_img").innerHTML =
            image;
          document.querySelector(".about_motto_desc p").innerHTML =
            data[0].description;
        }
      }
    })
    .catch((err) => {
      alert(err);
    });
};
getMotto();
