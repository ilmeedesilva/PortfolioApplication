const edittableBody = document.querySelector(".user_edit_table_body");
//const deletetableBody = document.querySelector(".user_delete_table_body");

const getAllUsersData = () => {
   
  fetch("../../db/getAllUsers.php")
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
        //const delrow = deletetableBody.insertRow();

        const editrow = edittableBody.insertRow();

        // delrow.insertCell().textContent = user.uname;
        // delrow.insertCell().textContent = user.username;
        // delrow.insertCell().textContent = user.email;
        // delrow.insertCell().textContent = user.contactno;
        

        editrow.insertCell().textContent = user.uname;
        editrow.insertCell().textContent = user.username;
        editrow.insertCell().textContent = user.email;
        editrow.insertCell().textContent = user.contactno;


        const editBtn = document.createElement("button");
        editBtn.classList.add("editt_btn");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deletee_btn");

          const btndiv = document.createElement("div");
          btndiv.classList.add("btn_wrapper");
          btndiv.appendChild(editBtn);
          btndiv.appendChild(deleteBtn);
          editrow.insertCell().appendChild(btndiv);

        editBtn.addEventListener("click", () => {
          const selectedUser = {
            id: user.id,
            name: user.uname,
            user_name: user.username,
            email: user.email,
            contactNo: user.contactno,
          };

          document.querySelector(".popup_form_wrapper").classList.remove("hide");

          selectedEditUserdata(selectedUser, "Edit");
        });

        deleteBtn.addEventListener("click", () => {
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
