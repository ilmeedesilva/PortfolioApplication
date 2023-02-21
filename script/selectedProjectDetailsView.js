const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

fetch(`../../db/getProjectById.php?id=${projectId}`)
  .then(function (response) {
    console.log("response - ", response);
    return response.json();
  })
  .then(function (data) {
    if (data.length === 0) {
      fetch("404.php")
        .then((response) => response.text())
        .then((data) => {
          document.querySelector(".project-details-container").innerHTML = data;
        });
      return;
    }

    var projectName = data[0].projectName;
    var date = data[0].date;
    var descr = data[0].descr;
    var imageEncoded = data[0].image;
    var image = '<img src="data:image/jpeg;base64,' + imageEncoded + '"/>';
    var html =
      '<div class="project-details">\
         <div class="project-img">' +
      image +
      '</div>\
         <div class="project-details-section">\
           <h3>' +
      projectName +
      '</h3>\
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
    document.querySelector(".project-details-container").innerHTML = html;
  });
