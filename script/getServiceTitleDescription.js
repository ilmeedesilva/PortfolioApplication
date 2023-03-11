const getServiceTitleDescription = () => {
    isLoading(true);
    fetch("../../db/getServiceTitleUpdate.php")
      .then(function (response) {
        isLoading(false);
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          if (window.location.href.includes("admin")) {
            document.getElementById("update-service-title").value = data[0].title;
            document.getElementById("update-service-desc").value = data[0].description;
  
          } else {
            document.querySelector(".service-title").innerHTML =
              data[0].title;
            document.querySelector(".service-description").innerHTML = data[0].description;
          }
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  getServiceTitleDescription();
  