fetch("../../db/getMail.php")
  .then((response) => response.json())
  .then((mailData) => {
    const mailContainer = document.querySelector(".admin_mail_wrapper");

    if (mailData && mailData.length > 0) {
      mailData.forEach((data) => {
        const mailItem = document.createElement("div");
        mailItem.classList.add("mail_item_wrapper");
        mailItem.innerHTML = `
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
        <div class="mail_body mail_body_hidden">
          <p class="usr_message">${data.message}</p>
        </div>
      `;

        const mailHeader = mailItem.querySelector(".mail_header");
        mailHeader.addEventListener("click", function () {
          const mailBody = this.nextElementSibling;
          mailBody.classList.toggle("mail_body_hidden");
        });

        mailContainer.appendChild(mailItem);
      });
    } else {
      const empty = document.createElement("div");
      empty.classList.add("empty");
      empty.innerHTML = `
  <img src="../../resource/icon/empty.png" alt="empty">
  <p>No Mails at the Moment.</p>
`;
      mailContainer.appendChild(empty);
    }
  })
  .catch((error) => {
    const empty = document.createElement("div");
    empty.classList.add("empty");
    empty.innerHTML = `
<img src="../../resource/icon/empty.png" alt="empty">
<p>No Mails at the Moment.</p>
`;
    document.querySelector(".admin_mail_wrapper").appendChild(empty);
  });
