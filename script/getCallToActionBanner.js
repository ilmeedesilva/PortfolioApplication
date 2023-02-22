const getCallToActionBanner = () => {
    fetch("../../db/getCallToActionBanner.php")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          if (window.location.href.includes("admin")) {
            if (data[0].image) {
              document.querySelector(".selected_img_view_cta").style.display =
                "block";
              document.querySelector(
                ".selected_img_view_cta"
              ).style.backgroundImage = `url('data:image/jpeg;base64,${data[0].image}')`;
            } else {
              document.querySelector(".selected_img_view_cta").style.display =
                "none";
              console.error("Invalid image data:", data[0].image);
            }
            document.getElementById("Cta-Main-Title")
            .value = data[0].mainTitle;
            document.getElementById("Cta-Sub-Title")
            .value = data[0].subTitle;

            document
            .querySelector(".cta_save_btn")
            .setAttribute("data-pk", data[0].id);
  
          } else if (window.location.href.includes("home")) {
            // let project = data[i];
            // let imageEncoded = project.image;
            // let imagetag = document.createElement("img");
            // imagetag.src = "data:image/jpeg;base64," + imageEncoded;
            // imagetag.alt = "home above image";
            // document.querySelector(".").appendChild(imagetag);
            // var project = data[i];
            // var imageEncoded = project.image;
            // var image =
            //   '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';
  
            // document.querySelector(
            //   ".cta_section .img_cta"
            // ).innerHTML = image;
            document.querySelector(".cta_main_title").innerHTML = data[0].mainTitle;
            document.querySelector(".cta_sub_title").innerHTML = data[0].subTitle;
          }
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  getCallToActionBanner();
  