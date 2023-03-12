<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION['logged_userName'])) {
    header('Location: login.php');
    exit();
}


if (!isset($_GET['page'])) {
    header("Location: main.php?page=home");
    exit();
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Settings</title>
    <link rel="stylesheet" href="../../css/popup.css">
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="stylesheet" href="../../css/form.css">
    <link rel="stylesheet" href="../../css/admin/admin.css">
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
            <p>WE WILL CONTACT YOU SOON AS POSSIBLE</p>
        </div>
    </div>

    <!-- <div class="loader"></div> -->
    <div class="admin_page_header_text">
        <h3>Contact Settings</h3>
    </div>
    <!--Update Company Logo-->
    <div class="admin_settings_wrapper">

        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update Contact</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <section class="upload">
                    <div>
                        <p class="project_page_update_pk" style="display: none;"></p>
                        <div class="selected_cover_img_view selected_banner_img_view">
                        </div>
                    </div>
                    <div class="Container">
                        <div class="wrapper">
                            <div class="img-area column col_1">
                                <div class="img_uploader">
                                    <label for="" class="img_uploader_wrapper banner_uploader_wrapper">
                                        <input type="file" accept="image/*" class="image_uploader"
                                            onchange="selectedBannerFile(this)">
                                    </label>
                                    <p class="file_name"></p>
                                    <p class="error_txt error_banner"></p>
                                    <p>Click here to upload</p>
                                </div>
                            </div>
                            <div class="column col_2">
                                <button class="select-image banner_save_btn">Save</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    </div>
    </div>
    </div>

    <script src="../../script/pageLoader.js"></script>
    <script src="../../script/collapse.js"></script>
    <script src="../../script/setContactBanner.js"></script>
    <script src="../../script/getContactBanner.js"></script>


</body>

</html>