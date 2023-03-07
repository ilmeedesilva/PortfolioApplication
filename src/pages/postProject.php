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
</head>

<body>
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
            <img class="img1" src="../../resource/image/projects.jpg" title="About us" alt="About us">
        </div>
    </div>

    <div class="dynamic_container"></div>

    </div>
    <?php include('../../includes/footer.php'); ?>
    <script src="../../script/jquery-3.6.3.min.js"></script>
    <script src="../../script/navigation.js">
    </script>
    <script src="../../script/getData.js">
    </script>
    <script src="../../script/getLogo.js"> </script>
    <script src="../../script/getContactInfo.js"></script>
    <script src="../../script/getDynamicProjects.js"></script>
</body>

</html>