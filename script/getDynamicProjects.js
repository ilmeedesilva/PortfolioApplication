// window.onload = function () {
//   const blogs = document.querySelectorAll(".blog_wrapper");
//   console.log("blogs - ", blogs.length);

//   blogs.forEach((blog) => {
//     blog.addEventListener("click", function (event) {
//       const id = event.currentTarget.getAttribute("data-id");
//       window.location.href = "postProject.php?id=" + id;
//     });
//   });
// };

const getPojectId = (id) => {
  fetch("../../db/getProjectById.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "id=" + id,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Display the project data in the HTML format
      let project = data[0];
      let projectName = project.projectName;
      let date = project.date;
      let descr = project.descr;
      let imageEncoded = project.image;
      let image = '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';
      let html =
        '<div class="col">\
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
      document.querySelector(".dynamic_container").innerHTML = html;
      window.location = `getProjectById.php?id=${id}`;
    });
};
