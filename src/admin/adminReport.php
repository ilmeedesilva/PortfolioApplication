<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION['logged_userName'])) {
    header('Location: login.php');
    exit();
}

if (!isset($_GET['page'])) {
    header("Location: main.php?page=about");
    exit();
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Report</title>
    <link rel="stylesheet" href="../../css/popup.css">
    <link rel="stylesheet" href="../../css/form.css">
    <script src="../../script/jquery-3.6.3.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="../../css/loadingBanner.css">

    <style>
        .project_main_img img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }

        .report_section_img img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    </style>

</head>

<body>

    <div class="admin_page_header_text">
        <h3>Report</h3>
    </div>

    <div class="admin_settings_wrapper admin_report_wrapper">
        <div class="row">


            <div class="col">
                <div class="main_banner banner-wrapper"
                    style="border-radius: 12px;background-position: center;background-size: cover;background-repeat: no-repeat;">
                    <div class="banner_content_wrapper" style="
    margin: 0 30px;
    color: #ffffff;padding: 35px;
">
                        <div class="banner_text_section" style="
    max-width: 400px;
    height: 110px;
    overflow: hidden;
">
                            <h2 style="
    font-weight: 700;">Hi I'm Ilmee</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla mollitia vero
                                officiis laboriosam
                                vitae dolor eaque et unde, consequatur suscipit! Ullam hic molestias eveniet autem unde
                                officia illum aut.</p>
                            <!-- <button class="primary_btn main-btn">Learn More</button> -->
                        </div>
                        <div class="banner_img_section">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="container">
            <div class="row">
                <div class="col">
                    <div class="banner" style="background-image: url('your-image-url');">
                        <div class="banner-content">
                            <h2>Your Heading</h2>
                            <p>Your Text</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->


        <div class="row mt-5">
            <div class="col-md-6 mt-3" style="height: 200px !important;overflow: hidden;">
                <div class="main_section_full_wrapper project_img_wrapper about_header" style="
    height: 200px;
    overflow: hidden;
    border-radius: 15px;
">
                    <div class="page_header_title">
                        <h5>ABOUT</h5>
                    </div>
                    <div class="gray_wrapper">
                    </div>
                    <div class="about_banner_img report_section_img">
                        <div class="loading-banner"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mt-3" style="height: 200px !important;overflow: hidden;">
                <div class="main_section_full_wrapper project_img_wrapper" style="
    height: 200px;
    overflow: hidden;
    border-radius: 15px;
">
                    <div class="page_header_title">
                        <h5>PROJECTS</h5>
                    </div>
                    <div class="gray_wrapper">
                    </div>
                    <div class="project_main_img">
                        <div class="loading-banner"></div>
                    </div>
                </div>
            </div>
        </div>



        <div class="mt-5 text-center">
            <h5>Users List</h5>
        </div>
        <div class="table_wrapper">
            <table class="table">
                <thead>
                    <tr>
                        <th style="text-align: center;">Name</th>
                        <th style="text-align: center;">User Name</th>
                        <th style="text-align: center;">Email</th>
                        <th style="text-align: center;">Contact No</th>
                    </tr>
                </thead>
                <tbody class="project_table_body user_edit_table_body">
                </tbody>
            </table>
        </div>

        <div class="mt-5 text-center">
            <h5>E-mails</h5>
        </div>
        <div class="table_wrapper">
            <table class="table">
                <thead>
                    <tr>
                        <th style="text-align: center;">Name</th>
                        <th style="text-align: center;">Email</th>
                        <th style="text-align: center;">Contact No</th>
                        <th style="text-align: center;">Message</th>
                        <th style="text-align: center;">Recived Date</th>
                    </tr>
                </thead>
                <tbody class="project_table_body mail_edit_table_body">
                </tbody>
            </table>
        </div>







    </div>





    <script src="../../script/getHomeCover.js"></script>
    <script src="../../script/pageLoader.js"></script>
    <script src="../../script/getAbout.js"></script>
    <script src="../../script/getProject.js"></script>
    <script src="../../script/getAllReportData.js"></script>


</body>

</html>