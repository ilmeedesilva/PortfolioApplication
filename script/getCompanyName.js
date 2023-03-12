const getCompanyName = () => {
  // isLoading(true);
  fetch("../../db/getCompanyName.php")
    .then(function (response) {
      // isLoading(false);
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          if (window.location.href.includes("login")) {
            document.querySelector(".login_form_header h5").innerHTML +=
              "TO " + data[0].companyName.toUpperCase();
          } else {
            document.querySelector(
              '.form-container input[name="companyName"]'
            ).value = data[0].companyName;
          }
        } else {
          document.title = `${data[0].companyName} | ${document.title}`;
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
getCompanyName();
