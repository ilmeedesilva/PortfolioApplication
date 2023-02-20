const getHomeAboutImage = () => {
    fetch("../../db/getHomeAboutImage.php")
      .then(function (response) {
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
  
            // document
            //   .querySelector(".logo_save_btn")
            //   .setAttribute("data-pk", data[0].id);
          }
        //   else if(window.location.href.includes("home"))
        //   {
        //     var project = data[i];
        //     var imageEncoded = project.image;
        //     var image = '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';
        //     document.querySelector(.)
        //   }
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
  