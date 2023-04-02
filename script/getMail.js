const getAllMainData = () => {
  $.ajax({
    url: "../../db/getMail.php",
    type: "GET",
    dataType: "json",
    success: function (mailData) {
      console.log(mailData);
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
          <div class="mail_header_userContact">
            <p>date: <span>${data.created_date}</span></p>
          </div>
        </div>
        <div class="mail_body collapse_section_body mail_body_hidden">
          <p class="usr_message">${data.message}</p>
          <button class="msg_delete_btn" data-id="${data.id}"><img src="../../resource/icon/bin.png" alt="delete mail btn"></button>
        </div>
      `);

          const mailHeader = mailItem.find(".mail_header");
          mailHeader.on("click", function () {
            const mailBody = $(this).next();
            mailBody.toggleClass("mail_body_hidden");
          });

          const deleteBtn = mailItem.find(".msg_delete_btn");
          deleteBtn.on("click", function () {
            const mailId = $(this).data("id");
            deleteMail(mailId);
            mailItem.remove();
          });

          mailContainer.append(mailItem);
        });
      } else {
        emptyMail();
      }
    },
    error: function (error) {},
  });
};

const emptyMail = () => {
  const empty = $("<div>")
    .addClass("empty")
    .html(`<img src="../../resource/icon/mails.webp" alt="empty">`);
  $(".admin_mail_wrapper").append(empty);
};

const deleteMail = (mailId) => {
  console.log("deleteMail");
  $.ajax({
    url: "../../db/deleteMail.php",
    type: "POST",
    data: { id: mailId },
    success: function (response) {
      getAllMainData();
      console.log(response);
    },
    error: function (error) {
      console.log(error);
    },
  });
};
getAllMainData();
