const getLogo = () => {
  fetch("../../db/getLogo.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        console.log(data[0].image);
        var project = data[i];
        var imageEncoded = project.image;
        var image = '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';

        document.querySelector(".top_nav_left").innerHTML = image;
        document.querySelector(".footer_content_logo_img").innerHTML = image;
      }
    })
    .catch((err) => {
      console.log("err - ", err);
    });
};
getLogo();
