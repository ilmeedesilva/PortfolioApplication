const edittableBody = document.querySelector(".user_edit_table_body");
//const deletetableBody = document.querySelector(".user_delete_table_body");

const getAllUsersData = () => {
  while (edittableBody.firstChild) {
    edittableBody.removeChild(edittableBody.firstChild);
  }
  fetch("../../db/getAllUsers.php")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        const editrow = edittableBody.insertRow();

        editrow.insertCell().textContent = user.uname;
        editrow.insertCell().textContent = user.username;
        editrow.insertCell().textContent = user.email;
        editrow.insertCell().textContent = user.contactno;
      });
    })
    .catch((error) => console.error(error));
};

const editMailtableBody = document.querySelector(".mail_edit_table_body");

const getAllMailData = () => {
  while (editMailtableBody.firstChild) {
    editMailtableBody.removeChild(editMailtableBody.firstChild);
  }
  fetch("../../db/getAllMails.php")
    .then((response) => response.json())
    .then((mails) => {
      mails.forEach((mail) => {
        const editrow = editMailtableBody.insertRow();

        editrow.insertCell().textContent = mail.name;
        editrow.insertCell().textContent = mail.email;
        editrow.insertCell().textContent = mail.phone;
        editrow.insertCell().textContent = mail.message;
        editrow.insertCell().textContent = mail.created_date;
      });
    })
    .catch((error) => console.error(error));
};

getAllUsersData();
getAllMailData();
