const getServices = () => {
  if (document.querySelector(".services_items_wrapper .container-fluid")) {
    document.querySelector(
      ".services_items_wrapper .container-fluid"
    ).style.display = "block";
  }

  fetch("../../db/getAllServices.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (document.querySelector(".services_items_wrapper .container-fluid")) {
        document.querySelector(
          ".services_items_wrapper .container-fluid"
        ).style.display = "none";
      }
      for (var i = 0; i < data.length; i++) {
        var service = data[i];
        var serviceName = service.serviceName;
        var descr = service.descr;
        var imageEncoded = service.image;
        var image = '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';
        var html = `
        <div class='service_item'>
          <div class='service_item_icon'>${image}</div>
          <div class='service_item_desc'>
            <h4>${serviceName}</h4>
            <p>${descr}</p>
          </div>
        </div>`;
        $(".services_items_wrapper").append(html);
      }
    })
    .catch((err) => {
      // $(".project_loding_container").hide();
      if (document.querySelector(".services_items_wrapper .container-fluid")) {
        document.querySelector(
          ".services_items_wrapper .container-fluid"
        ).style.display = "none";
      }
      console.log(err);
    });
};

getServices();
