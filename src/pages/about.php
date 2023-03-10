<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="../../css/about.css">
    <link rel="stylesheet" type="text/css" href="../../css/navigation.css">
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="stylesheet" href="../../css/admin/admin.css">
    <link rel="stylesheet" href="../../css/loaders.css">
    <link rel="stylesheet" href="../../css/loadingBanner.css">

    <style>
        .img-fluid {
            object-fit: cover;
        }
    </style>
</head>

<body>
    <div class="loader"></div>
    <?php
    include "../../includes/navigation.php";
    ?>
    <div class="main_section_full_wrapper project_img_wrapper about_header">
        <div class="page_header_title">
            <h5>ABOUT</h5>
        </div>
        <div class="gray_wrapper">

        </div>
        <div class="about_banner_img">

            <div class="loading-banner"></div>

        </div>
    </div>
    <div class="main_section_wrapper">

        <div class="main_section_wrapper mt_45 about_header_desc">

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

    </div>


    <div class="container-fluid">
        <!-- First Section -->
        <section class="container py-5">
            <div class="row about_vision">
                <div class="col-md-6 about_vision_img">
                    <div class="col mb-3">
                        <div class="loading-banner"></div>
                    </div>
                </div>
                <div class="col-md-6 about_vision_desc">
                    <h5>Vision</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et felis vitae justo
                        eleifend
                        faucibus. Morbi tincidunt auctor purus a lacinia. Praesent vitae libero pharetra, aliquet
                        velit
                        eu, pharetra ante. Sed quis nunc ac eros aliquet efficitur eu a elit.</p>
                </div>
            </div>
        </section>

        <!-- Second Section -->
        <section class="container py-5">

            <div class="row about_tagLine">
                <div class="col-md-6 order-2 order-md-1 about_tagLine_desc">
                    <h5>TagLine</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et felis vitae justo
                        eleifend
                        faucibus. Morbi tincidunt auctor purus a lacinia. Praesent vitae libero pharetra, aliquet
                        velit
                        eu, pharetra ante. Sed quis nunc ac eros aliquet efficitur eu a elit.</p>
                </div>
                <div class="col-md-6 order-1 order-md-2 about_tagLine_img">
                    <div class="col mb-3">
                        <div class="loading-banner"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Third Section -->
        <section class="container py-5">
            <div class="row about_motto">
                <div class="col-md-6 about_motto_img">
                    <div class="col mb-3">
                        <div class="loading-banner"></div>
                    </div>
                </div>
                <div class="col-md-6 about_motto_desc">
                    <h5>Motto</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et felis vitae justo
                        eleifend
                        faucibus. Morbi tincidunt auctor purus a lacinia. Praesent vitae libero pharetra, aliquet
                        velit
                        eu, pharetra ante. Sed quis nunc ac eros aliquet efficitur eu a elit.</p>
                </div>
            </div>
        </section>
    </div>











    <?php include('../../includes/footer.php'); ?>
    <script src="../../script/jquery-3.6.3.min.js"></script>
    <script src="../../script/pageLoader.js"></script>
    <script src="../../script/navigation.js">
    </script>
    <script src="../../script/mobileNav.js"></script>
    <script src="../../script/getLogo.js"> </script>
    <script src="../../script/getContactInfo.js"></script>
    <script src="../../script/getAbout.js"></script>
    <script src="../../script/getVision.js"></script>
    <script src="../../script/getTagLine.js"></script>
    <script src="../../script/getMotto.js"></script>
</body>

</html>