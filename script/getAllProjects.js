const getProducts = (type) => {
  document.querySelector(".blog_container").innerHTML = "";
  console.log("type- ", type);
  let url = "../../db/getAllProjects.php";
  if (type === "all") {
  } else if (type === "recent") {
    url += "?order=desc&limit=10";
  } else if (type === "oldest") {
    url += "?order=asc&limit=10";
  }

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var project = data[i];
        var projectName = project.projectName;
        var date = project.date;
        var descr = project.descr;
        var imageEncoded = project.image;
        var image = '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';
        var html =
          '<div class="col blog_wrapper" data-id="' +
          project.id +
          '" onclick="window.location.href=\'project-details.php?id=' +
          project.id +
          '\'">\
                        <div class="blog-top-section">\
                          <div class="blue_cover"></div>\
                          <div class="blog_img">' +
          image +
          '</div>\
                        </div>\
                        <div class="blog-bottom-section">\
                          <div class="discri">\
                            <h3>' +
          projectName +
          '</h3>\
                          </div>\
                          <div class="sub_details d-flex justify-content-between align-items-center">\
                            <p>' +
          descr +
          '</p>\
                            <div class="date">\
                              <img src="../../resource/icon/calendar.png" alt="calendar">\
                              <p>' +
          date +
          "</p>\
                            </div>\
                          </div>\
                        </div>\
                      </div>";
        document.querySelector(".blog_container").innerHTML += html;
      }
    });
};
getProducts("all");

if (window.location.href.includes("/project")) {
  document
    .querySelector("select[name='filertOps']")
    .addEventListener("change", () => {
      console.log("clicked");
      getProducts(document.querySelector("select[name='filertOps']").value);
    });
}
