// fetch("../../db/getMail.php")
//   .then((response) => response.json())
//   .then((mailData) => {
//     const mailContainer = document.querySelector(".admin_mail_wrapper");

//     if (mailData && mailData.length > 0) {
//       mailData.forEach((data) => {
//         const mailItem = document.createElement("div");
//         mailItem.classList.add("mail_item_wrapper");
//         mailItem.innerHTML = `
//         <div class="mail_header">
//           <div class="mail_header_userName">
//             <p>name: <span>${data.name}</span></p>
//           </div>
//           <div class="mail_header_userMail">
//             <p>from: <span>${data.email}</span></p>
//           </div>
//           <div class="mail_header_userContact">
//             <p>contact no: <span>${data.phone}</span></p>
//           </div>
//         </div>
//         <div class="mail_body collapse_section_body mail_body_hidden">
//           <p class="usr_message">${data.message}</p>
//         </div>
//       `;

//         const mailHeader = mailItem.querySelector(".mail_header");
//         mailHeader.addEventListener("click", function () {
//           const mailBody = this.nextElementSibling;
//           mailBody.classList.toggle("mail_body_hidden");
//         });

//         mailContainer.appendChild(mailItem);
//       });
//     } else {
//       const empty = document.createElement("div");
//       empty.classList.add("empty");
//       empty.innerHTML = `
//   <img src="../../resource/icon/mails.webp" alt="empty">
// `;
//       mailContainer.appendChild(empty);
//     }
//   })
//   .catch((error) => {
//     const empty = document.createElement("div");
//     empty.classList.add("empty");
//     empty.innerHTML = `
// <img src="../../resource/icon/mails.webp" alt="empty">
// `;
//     document.querySelector(".admin_mail_wrapper").appendChild(empty);
//   });

$.ajax({
  url: "../../db/getMail.php",
  type: "GET",
  dataType: "json",
  success: function (mailData) {
    const mailContainer = $(".admin_mail_wrapper");

    if (mailData && mailData.length > 0) {
      mailData.forEach((data) => {
        const mailItem = $("<div>").addClass("mail_item_wrapper").html(`
        <div class="mail_header">
          <div class="mail_header_userName">
            <p>name: <span>${data.name}</span></p>
          </div>
          <div class="mail_header_userMail">
            <p>from: <span>${data.email}</span></p>
          </div>
          <div class="mail_header_userContact">
            <p>contact no: <span>${data.phone}</span></p>
          </div>
        </div>
        <div class="mail_body collapse_section_body mail_body_hidden">
          <p class="usr_message">${data.message}</p>
        </div>
      `);

        const mailHeader = mailItem.find(".mail_header");
        mailHeader.on("click", function () {
          const mailBody = $(this).next();
          mailBody.toggleClass("mail_body_hidden");
        });

        mailContainer.append(mailItem);
      });
    } else {
      const empty = $("<div>")
        .addClass("empty")
        .html(`<img src="../../resource/icon/mails.webp" alt="empty">`);
      mailContainer.append(empty);
    }
  },
  error: function (error) {
    const empty = $("<div>")
      .addClass("empty")
      .html(`<img src="../../resource/icon/mails.webp" alt="empty">`);
    $(".admin_mail_wrapper").append(empty);
  },
});
