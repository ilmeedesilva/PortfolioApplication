const getProductsByCount = (count) => {
  fetch(`../../db/getAllProjects.php?count=${count}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < count; i++) {
        var project = data[i];
        var projectName = project.projectName;
        var date = project.date;
        var descr = project.descr;
        var imageEncoded = project.image;
        var image = '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';
        var html = `<div class="blog_item" onclick="window.location.href=\'project-details.php?id=${project.id}'">
            <div class="blog_img">
              ${image}
            </div>
            <div class="blog_txt_section">
            
              <div class="blog_text">
                <h4>${projectName}</h4>
                <span class="small_txt_date">${date}</span>
                <p>${descr}</p>
              </div>
            </div>
          </div>`;

        document.querySelector(".main_project_blog_container").innerHTML +=
          html;
      }
    });
};

getProductsByCount(3);
