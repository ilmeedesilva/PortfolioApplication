<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION['logged_userName'])) {
    header('Location: login.php');
    exit();
}


if (!isset($_GET['page'])) {
    header("Location: main.php?page=user");
    exit();
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Settings</title>
    <link rel="stylesheet" href="../../css/popup.css">
    <link rel="stylesheet" href="../../css/admin/admin.css">
    <link rel="stylesheet" href="../../css/form.css">
    <link rel="stylesheet" href="../../css/popup_form.css">
    <script src="../../script/jquery-3.6.3.min.js"></script>
</head>

<body>

    <!-- <div class="loader"></div> -->
    <div class="status_popup_wrapper popup_hide">
        <div class="status_icon">
            <img src="../../resource/icon/success.png" alt="status">
        </div>
        <div class="status_descrip">
            <h6>SUCCESS</h6>
            <p>SUCCESSFULLY ADDED</p>
        </div>
    </div>

    <div class="popup_form_wrapper hide">
        <div class="gray_cover"></div>
        <div class="popup_form">
            <div class="close_btn">
                <img src="../../resource/icon/close.png" alt="close_btn">
            </div>
            <section class="upload">
                <div class="form_Container">
                    <div class="form_wrappe  group_inputs  user_edit">
                        <div class="box">
                            <label for="name">Name:
                                <input type="text" name="edit_name" id="editname" placeholder="Enter your name">
                                <p class="error_txt editname_error"></p>
                        </div>
                        <div class="box">
                            <label for="phone1">User Name:
                                <input type="text" name="edit_user_name" id="editusername" require
                                    placeholder="Enter user name">
                                <p class="error_txt editusername_error"></p>
                        </div>


                    </div>

                    <div class="form_wrappe  group_inputs user_edit">
                        <div class="box">
                            <label for="email">Contact No:
                                <input type="text" name="edit_contactNo" id="editcontactNo"
                                    placeholder="Ex: 0700000000">
                                <p class="error_txt editcontactNo_error"></p>
                                <a href="#" class="reset_user_password">Reset Password</a>
                        </div>
                        <div class="box">
                            <label for="email">Email:
                                <input type="text" name="edit_email" id="editemail" placeholder="example@gmail.com">
                                <p class="error_txt editemail_error"></p>

                        </div>
                    </div>

                    <div class="form_wrappe  group_inputs reset_password hide">
                        <div class="box">
                            <label for="email">New Password:
                                <input type="password" name="newPassword" id="newPassword"
                                    placeholder="enter a new password in here">
                                <p class="error_txt new_password_error"></p>

                        </div>
                        <div class="box">
                            <label for="email">Confirm Password:
                                <input type="password" name="confPassowrd" id="confPassowrd"
                                    placeholder="Confirm password in here">
                                <p class="error_txt confirm_password_error"></p>

                        </div>
                    </div>



                    <div class="pop_up_edit_save_cancel_wrapper">

                        <button class="primary_btn crud_btn">SAVE</button>
                        <button class="reset_btn hide">RESET</button>
                        <button class="cancel_btn">CANCEL</button>


                    </div>
            </section>
        </div>
    </div>

    <div class="admin_page_header_text">
        <h3>User Settings</h3>
    </div>

    <div class="admin_settings_wrapper">

        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Add New User</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <section class="upload">
                    <div class="form_Container">
                        <div class="form_wrappe  group_inputs">
                            <div class="box">
                                <label for="name">Name:
                                    <input type="text" name="name" id="name" placeholder="Enter your name">
                                    <p class="error_txt name_error"></p>
                            </div>

                            <div class="box">
                                <label for="email">Email:
                                    <input type="text" name="email" id="email" placeholder="example@gmail.com">
                                    <p class="error_txt email_error"></p>
                            </div>
                            <div class="box">
                                <label for="contactno">Contact No:
                                    <input type="text" name="contactNo" id="contactNo" placeholder="Ex: 0700000000">
                                    <p class="error_txt tel_error"></p>
                            </div>
                        </div>

                        <div class="form_wrappe  group_inputs">
                            <div class="box">
                                <label for="email">User Name:
                                    <input type="user_name" name="user_name" id="user_name"
                                        placeholder="Enter user name">
                                    <p class="error_txt username_error"></p>
                            </div>
                            <div class="box">
                                <label for="phone1">Password:
                                    <input type="password" name="password" id="password" require
                                        placeholder="Enter password">
                                    <p class="error_txt pwd_error"></p>
                            </div>
                            <div class="box">
                                <label for="phone2">Confirm Password:
                                    <input type="password" name="confirm_password" id="confirm_password" require
                                        placeholder="Re-enter password">
                                    <p class="error_txt confirmpwd_error"></p>
                            </div>
                        </div>
                        <div class="column btn-col form_control">
                            <button class="primary_btn add_user_save_btn">Save</button>
                            <button class="clear_btn add_user_clear_btn">Clear</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Manage Users</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="table_wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Contact No</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="project_table_body user_edit_table_body">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>



    </div>







    <!-- <script src="../../script/pageLoader.js"></script> -->
    <script src="../../script/collapse.js"></script>
    <script src="../../script/addUserInfo.js"></script>
    <script src="../../script/getAllUserData.js"></script>
    <script src="../../script/popup_form.js"></script>
    <script src="../../script/selectedEditUserdata.js"></script>
    <script src="../../script/selectedDeleteUserdata.js"></script>
    <script src="../../script/resetPassword.js"></script>




</body>

</html>