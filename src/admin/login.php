<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="UTF-8">
  <meta name="description" content="stock management system for managing inventory, supplies, and assets">
  <meta name="keywords" content="stock management, inventory management, supply chain, asset management">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="index, follow">
  <title>Login Form</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="../../css/admin/login.css">
  <script src="../../script/jquery-3.6.3.min.js"></script>
</head>

<body>
  <div class="login_form_wrapper">
    <div class="login_fomr_wrapper_cover"></div>
    <div class="login_form">

      <div class="login_form_content">

        <div class="login_form_header mt-5">
          <h5>WELCOME TO SYSTEM NAME</h5>
          <h6>SIGN IN HERE</h6>
        </div>

        <div class="form">
          <form action="../../db/checkUserLogin.php" method="POST">
            <div class="input_group login_input input_icons login_input icon_user_input mt-5">
              <label for="username" class="ml-4">USERNAME</label>
              <input type="text" name="username">
              <p class="error_msg er_usrnme"></p>
            </div>

            <div class="input_group login_input input_icons icon_password_input mt-5">
              <label for="password" class="ml-4">PASSWORD</label>
              <input type="password" name="password">
              <p class="error_msg er_pwd"></p>
            </div>

            <div class="mt-2">
              <p class="error_msg username_or_pswd_incrt">
                <?php
                if (isset($_SESSION['error_message'])) {
                  echo '<p class="error_msg">' . $_SESSION['error_message'] . '</p>';
                  unset($_SESSION['error_message']);
                }
                ?>
              </p>
            </div>

            <div class="rem_checkBox mt-5 d-flex justify-content-between">
              <label for="remember">
                <input type="checkbox" id="remember" name="remember" style="vertical-align: middle;">
                Remember Me
              </label>

            </div>

            <div class="login_sub_btn mt-5 d-flex flex-column align-items-center">
              <button type="submit">Submit</button>
              <a href="/" class="display-6 mt-3">
                <!-- <img src="../../resource/icon/redirect.png" alt="redirect"> -->
                return to home</a>
            </div>

        </div>
        </form>
      </div>
    </div>


  </div>
  </div>


  <script src="../../script/login/formChanges.js" charset="utf-8"></script>
  <script src="../../script/login/loginSubmit.js" charset="utf-8"></script>
</body>

</html>