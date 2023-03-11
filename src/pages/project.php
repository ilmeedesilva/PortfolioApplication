<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="../../css/project.css">
    <link rel="stylesheet" type="text/css" href="../../css/navigation.css">
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="stylesheet" href="../../css/loaders.css">
    <link rel="stylesheet" href="../../css/loadingBanner.css">
</head>

<body>
    <div class="loader"></div>
    <?php
    include "../../includes/navigation.php";
    ?>
    <div class="main_section_full_wrapper project_img_wrapper">
        <div class="page_header_title">
            <h5>PROJECTS</h5>
        </div>
        <div class="gray_wrapper">

        </div>
        <div class="page_main_img">
            <div class="loading-banner"></div>
        </div>
    </div>
    <div class="main_section_wrapper">
        <div class="project section_wrapper">
            <div class="page_top_desc project_header_desc">
                <p>
                <div class="loading-txt-wrapper mb-3">
                    <div class="loading-txt"></div>
                    <div class="loading-txt"></div>
                    <div class="loading-txt"></div>
                    <div class="loading-txt"></div>
                    <div class="loading-txt"></div>
                </div>
                </p>
            </div>
            <div class="filter_options">
                <label for="filter">Filter By:</label>
                <select name="filertOps">
                    <option value="all">Default</option>
                    <option value="recent">Recent</option>
                    <option value="oldest">Oldest</option>
                </select><br>
            </div>


            <div class="project_loding_container container">
                <div class="row flex-column flex-md-row">
                    <div class="col mb-3">
                        <div class="loading-banner"></div>
                    </div>
                    <div class="col mb-3">
                        <div class="loading-banner"></div>
                    </div>
                    <div class="col mb-3">
                        <div class="loading-banner"></div>
                    </div>
                </div>
            </div>

            <div class="content_bottom project_item_wrapper">

                <div class="container blog_container">

                </div>
            </div>
        </div>




    </div>
    <?php include('../../includes/footer.php'); ?>
    <script src="../../script/pageLoader.js"></script>
    <script src="../../script/jquery-3.6.3.min.js"></script>
    <script src="../../script/navigation.js">
    </script>
    <script src="../../script/getAllProjects.js">
    </script>
    <script src="../../script/getLogo.js"> </script>
    <script src="../../script/getContactInfo.js"></script>
    <script src="../../script/getDynamicProjects.js"></script>
    <script src="../../script/mobileNav.js"></script>
    <script src="../../script/getProject.js"></script>
    <script src="../../script/getAbout.js"></script>
    <script src="../../script/getAllSocialMedias.js"></script>
</body>

</html>