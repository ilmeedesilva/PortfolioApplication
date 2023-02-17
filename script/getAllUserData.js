const edittableBody = document.querySelector(".user_edit_table_body");
const deletetableBody = document.querySelector(".user_delete_table_body");//meke row eketa. teruna da? ow eka ain krala action column ekata delete btn ekath add krnna kiylda kiyanenh?




// uda oya line no 1,2 kiyane tables 2kaa tbodys 2k ne
// etha kota e dekata wena wenama btns deka haduwa ne pahala edit delet kiyala
// ewa assgin kare 

const getAllUsersData = () => {
   
  fetch("../../db/getAllUsers.php")
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
        const delrow = deletetableBody.insertRow();//deletetableBody - delete table eke tbody eketa insert karanwa row ekak

        const editrow = edittableBody.insertRow();//edittableody - edit table eke tbody eketa insert karanwa row ekak

        delrow.insertCell().textContent = user.uname;
        delrow.insertCell().textContent = user.username;
        delrow.insertCell().textContent = user.email;
        delrow.insertCell().textContent = user.contactno;
        

        editrow.insertCell().textContent = user.uname;
        editrow.insertCell().textContent = user.username;
        editrow.insertCell().textContent = user.email;
        editrow.insertCell().textContent = user.contactno;


        const editBtn = document.createElement("button");//create an element
        editBtn.classList.add("editt_btn");// add classes to that element
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deletee_btn");

          const btndiv = document.createElement("div");// div ekak create kara
          btndiv.classList.add("btn_wrapper");
          btndiv.appendChild(editBtn); // eke athulata edit btn eke damma
          btndiv.appendChild(deleteBtn); // delete btn ekath damma
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
            name: user.uname,//m otta pala :D
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
