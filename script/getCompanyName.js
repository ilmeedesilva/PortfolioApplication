const getCompanyName = () => {
  isLoading(true);
  fetch("../../db/getCompanyName.php")
    .then(function (response) {
      isLoading(false);
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (window.location.href.includes("admin")) {
          document.querySelector(
            '.form-container input[name="companyName"]'
          ).value = data[0].companyName;
        } else {
          //   document.querySelector("").innerHTML = data[0].companyName;
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
getCompanyName();
