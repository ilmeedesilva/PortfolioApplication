const getLogo = () => {
  fetch("../../db/getLogo.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var project = data[i];
        var imageEncoded = project.image;
        var image = '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

        document.querySelector(".top_nav_left").innerHTML =
          '<a href="../../src/pages/home.php">' + image;
        document.querySelector(".footer_content_logo_img").innerHTML = image;
      }
    })
    .catch((err) => {
      alert(err);
    });
};
getLogo();
