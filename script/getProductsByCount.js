// const getProductsByCount = (count) => {
//   isLoading(true);
//   fetch(`../../db/getAllProjects.php?count=${count}`)
//     .then(function (response) {
//       isLoading(false);
//       return response.json();
//     })
//     .then(function (data) {
//       let showData = 0;
//       showData = data.length == 0 ? 0 : data.length < 3 ? data.length : count;
//       if (data) {
//         for (var i = 0; i < showData; i++) {
//           var project = data[i];
//           var projectName = project.projectName;
//           var date = project.date;
//           var descr = project.descr;
//           var imageEncoded = project.image;
//           var image =
//             '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';
//           var html = `<div class="blog_item" onclick="window.location.href=\'project-details.php?id=${project.id}'">
//             <div class="blog_img">
//               ${image}
//             </div>
//             <div class="blog_txt_section">

//               <div class="blog_text">
//                 <h4>${projectName}</h4>
//                 <span class="small_txt_date">${date}</span>
//                 <p>${descr}</p>
//               </div>
//             </div>
//           </div>`;

//           document.querySelector(".main_project_blog_container").innerHTML +=
//             html;
//           document.querySelector(".loading-banner").style.display = "none";
//         }
//       }
//     });
// };

// getProductsByCount(3);

const getProductsByCount = (count) => {
  isLoading(true);
  $(".main_project_blog_container .loading-banner").show();
  $(".pj_viewMore").hide();
  $.ajax({
    url: `../../db/getAllProjects.php?count=${count}`,
    type: "GET",
    dataType: "json",
    success: function (data) {
      isLoading(false);
      let showData = 0;
      showData = data.length == 0 ? 0 : data.length < 3 ? data.length : count;
      if (data) {
        for (var i = 0; i < showData; i++) {
          var project = data[i];
          var projectName = project.projectName;
          var date = project.date;
          var descr = project.descr;
          var imageEncoded = project.image;
          var image =
            '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';
          var html = `<div class="blog_item" onclick="window.location.href=\'/src/pages/project-details.php?id=${project.id}'">
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
          $(".main_project_blog_container").append(html);
          $(".main_project_blog_container .loading-banner").hide();
          $(".pj_viewMore").show();
        }
      }
    },
    error: function (error) {
      $(".main_project_blog_container .loading-banner").hide();
      $(".pj_viewMore").hide();
      console.log("Error:", error);
    },
  });
};

getProductsByCount(3);
