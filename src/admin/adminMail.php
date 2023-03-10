<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION['logged_userName'])) {
    header('Location: login.php');
    exit();
}


if (!isset($_GET['page'])) {
    header("Location: main.php?page=mail");
    exit();
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Mail</title>
    <link rel="stylesheet" href="../../css/admin/admin.css">
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="stylesheet" href="../../css/form.css">
    <script src="../../script/jquery-3.6.3.min.js"></script>
</head>

<body>

    <!-- <div class="loader"></div> -->
    <div class="admin_page_header_text">
        <h3>View Mail</h3>
    </div>

    <div class="admin_settings_wrapper admin_mail_wrapper mail_wrapper">



    </div>



    <!-- <script src="../../script/pageLoader.js"></script> -->
    <script src="../../script/collapse.js"></script>

    <script src="../../script/getMail.js"></script>
</body>

</html>