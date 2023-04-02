const edittableBody = document.querySelector(".user_edit_table_body");

const getAllUsersData = () => {
  if (edittableBody.hasChildNodes()) {
    edittableBody.innerHTML = "";
  }
  fetch("../../db/getAllUsers.php")
    .then((response) => response.json())
    .then((users) => {
      edittableBody.innerHTML = "";
      users.forEach((user) => {
        const editrow = edittableBody.insertRow();

        editrow.insertCell().textContent = user.uname;
        editrow.insertCell().textContent = user.username;
        editrow.insertCell().textContent = user.email;
        editrow.insertCell().textContent = user.contactno;

        const editBtn = document.createElement("button");
        editBtn.setAttribute("data-id", user.id);
        editBtn.classList.add("editt_btn");

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deletee_btn");

        const btndiv = document.createElement("div");
        btndiv.classList.add("btn_wrapper");
        btndiv.appendChild(editBtn);
        btndiv.appendChild(deleteBtn);
        editrow.insertCell().appendChild(btndiv);

        editBtn.addEventListener("click", (e) => {
          const currentId = e.target.getAttribute("data-id");
          editRowDeletBtn.setAttribute("data-id", user.id);
          let selectedUser = {};
          selectedUser = {
            id: user.id,
            name: user.uname,
            user_name: user.username,
            email: user.email,
            contactNo: user.contactno,
          };

          document
            .querySelector(".popup_form_wrapper")
            .classList.remove("hide");

          if (currentId == user.id) {
            selectedEditUserdata(selectedUser, "Edit", currentId);
          }
        });

        deleteBtn.addEventListener("click", () => {
          editRowDeletBtn.setAttribute("data-id", user.id);
          const selectedUser = {
            id: user.id,
            name: user.uname,
            user_name: user.username,
            email: user.email,
            contactNo: user.contactno,
          };
          selectedDeleteUserdata(selectedUser, "Delete");
        });
      });
    })
    .catch((error) => console.error(error));
};

getAllUsersData();
