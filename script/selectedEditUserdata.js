const editName = document.querySelector('.popup_form input[name="edit_name"]');

const editUserName = document.querySelector('.popup_form input[name="edit_user_name"]');

const editContactNo = document.querySelector('.popup_form input[name="edit_contactNo"]');

const editEmail = document.querySelector('.popup_form input[name="edit_email"]');

const editRowDeletBtn = document.querySelector(".popup_form .pop_up_edit_save_cancel_wrapper .primary_btn");

const selectedEditUserdata = (user, type) => {
  document.querySelector(".popup_form_wrapper").classList.remove("hide");
  
  editName.readOnly = false; 
  editUserName.readOnly = false;
  editEmail.readOnly = false;
  editContactNo.readOnly = false;

  editName.value = user.name; 
  editUserName.value = user.user_name;
  editEmail.value = user.email;
  editContactNo.value = user.contactNo;

  editRowDeletBtn.classList.remove("delete_btn"); 
  editRowDeletBtn.innerHTML = "SAVE";
  editRowDeletBtn.addEventListener(
    "click",
    (e) => handleEditUser(e, user) 
  );
};

const handleEditUser = (e, user) => {
  const name_error = document.querySelector(".editname_error");

  const email_error = document.querySelector(".editemail_error");

  const contactno_error = document.querySelector(".editcontactNo_error");

  const username_error = document.querySelector(".editusername_error");


// save eketa udin link ekak tiyenne reset password kiyala. ha

  e.preventDefault();

  // Name
  if (!editName.value) {
    name_error.innerHTML = "*Name cannot be empty";
  } else if (!editName.value.match(/^[a-zA-Z\s]+$/)) {
    name_error.innerHTML = "*Name should not contain numbers";
  } else {
    name_error.innerHTML = "";
  }

  // Email
  if (!editEmail.value) {
    email_error.innerHTML = "*Email cannot be empty";
  } else if (
    !editEmail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    email_error.innerHTML = "*Enter a valid email address";
  } else {
    email_error.innerHTML = "";
  }

  // Contact no
  if (!editContactNo.value) {
    contactno_error.innerHTML = "*Contact number cannot be empty";
  } else if (!editContactNo.value.match(/^\d{10}$/)) {
    contactno_error.innerHTML = "*Enter a valid contact number";
  } else {
    contactno_error.innerHTML = "";
  }

  // User Name
  if (!editUserName.value) {
    username_error.innerHTML = "*User name cannot be empty";
  } else {
    if (editUserName.value.length < 4 || editUserName.value.length > 8) {
      username_error.innerHTML = "*User name must contain 4 to 8 charcters";
    } else {
      username_error.innerHTML = "";
    }
  }

  const editname = editName.value.trim();
  const editusername = editUserName.value.trim();
  const editcontactno = editContactNo.value.trim();
  const editemail = editEmail.value.trim();

  if (
    editname === user.name.trim() &&//trim kiyane mokkak da dannwa da? naaa meh ahanna hitiyeh/ eken whitspaces ain karanwa ethakota? eh mokatada use karanneh
    editusername === user.user_name.trim() &&
    editcontactno === user.contactNo.trim() &&
    editemail === user.email.trim()
  ) {
    alert(
      "Please fill all fields and make sure they are different from the original data"
    );
    return;
  }

  const data = new FormData();
  data.append("id", user.id);
  data.append("uname", editname);
  data.append("username", editusername);
  data.append("contactno", editcontactno);
  data.append("email", editemail);

  fetch("../../db/putUserData.php", {
    method: "POST",
    body: data,
  })
    .then((response) => {
      if (response.status === 200) {
        alert("Data saved successfully");
      } else {
        alert("Failed to save data");
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to save data");
    });
};
//reader.readAsDataURL(file);