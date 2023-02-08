const mailHeaders = document.querySelectorAll(".mail_header");
const mailMesg = document.querySelectorAll(".mail_body");

const removeAllMessgeBody = () => {
  mailMesg.forEach((item) => {
    item.classList.add("mail_body_hidden");
  });
};

mailHeaders.forEach((item, index) => {
  item.addEventListener("click", () => {
    // removeAllMessgeBody();
    console.log("item - ", item);
    mailMesg[index].classList.toggle("mail_body_hidden");
  });
});
