const getCallToActionBanner = () => {
  isLoading(true);
  fetch("../../db/getCallToActionBanner.php")
    .then(function (response) {
      isLoading(false);
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
          document.getElementById("Cta-Main-Title").value = data[0].mainTitle;
          document.getElementById("Cta-Sub-Title").value = data[0].subTitle;

          document
            .querySelector(".cta_save_btn")
            .setAttribute("data-pk", data[0].id);
        } else {
          document.querySelector(
            "#CTA-section"
          ).style.backgroundImage = `url('data:image/jpeg;base64,${data[0].image}')`;
          document.querySelector(".cta_main_title").innerHTML =
            data[0].mainTitle;
          document.querySelector(".cta_sub_title").innerHTML = data[0].subTitle;
        }
      }
    })
    .catch((err) => {
      alert(err);
    });
};
getCallToActionBanner();
