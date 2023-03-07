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
            <img class="img1" src="../../resource/image/projects.jpg" title="About Projects" alt="About Projects">
        </div>
    </div>
    <div class="main_section_wrapper">
        <div class="project section_wrapper">
            <div class="page_top_desc project_header_desc">
                <p>
                </p>
            </div>
            <div class="filter_options">
                <label for="filter">Filter By:</label>
                <select name="filertOps">
                    <option value="Default">Default</option>
                    <option value="Recent">Recent</option>
                    <option value="Oldest">Oldest</option>
                </select><br>
            </div>

            <div class="content_bottom project_item_wrapper">
                <div class="container blog_container">
                    <!-- <div class="col blog_wrapper">
                        <div class="blog-top-section">
                            <div class="blue_cover"></div>
                            <div class="blog_img">
                                <img src="../../resource/image/img1.jpg" alt="image1">
                            </div>
                        </div>
                        <div class="blog-bottom-section">
                            <div class="discri">
                                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                            </div>
                            <div class="sub_details d-flex justify-content-between align-items-center">
                                <p>Lorem ipsum dolor</p>
                                <div class="date">
                                    <img src="../../resource/icon/calendar.png" alt="calendar">
                                    <p>10.10.2022</p>
                                </div>

                            </div>
                        </div>
                    </div> -->

                    <!-- <div class="col blog_wrapper">
                        <div class="blog-top-section">
                            <div class="blue_cover"></div>
                            <div class="blog_img">
                                <img src="../../resource/image/img1.jpg" alt="image1">
                            </div>
                        </div>
                        <div class="blog-bottom-section">
                            <div class="discri">
                                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                            </div>
                            <div class="sub_details d-flex justify-content-between align-items-center">
                                <p>Lorem ipsum dolor</p>
                                <div class="date">
                                    <img src="../../resource/icon/calendar.png" alt="calendar">
                                    <p>10.10.2022</p>
                                </div>

                            </div>
                        </div>
                    </div> -->



                    <!-- <div class="col blog_wrapper">
                        <div class="blog-top-section">
                            <div class="blue_cover"></div>
                            <div class="blog_img">
                                <img src="../../resource/image/img1.jpg" alt="image1">
                            </div>
                        </div>
                        <div class="blog-bottom-section">
                            <div class="discri">
                                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                            </div>
                            <div class="sub_details d-flex justify-content-between align-items-center">
                                <p>Lorem ipsum dolor</p>
                                <div class="date">
                                    <img src="../../resource/icon/calendar.png" alt="calendar">
                                    <p>10.10.2022</p>
                                </div>

                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>


        <!-- <div class="add_project_wrapper">
            <div class="img_upload_container">
                <div class="title">
                    <h5>Upload Image</h5>
                </div>
                <div class="img_uploader">
                    <label for="">
                        <img src="../../resource/icon/uploadimg.png" alt="upload">
                        <input type="file" accept="image/*">
                    </label>
                    <p>Click here to upload</p>
                </div>
            </div>
            <div class="form_wrapper">
                <form action="">
                    <div class="input_item">
                        <label for="">Project Name</label><br>
                        <input type="text" placeholder="Enter Project Name">
                        <p class="error_txt"></p>
                    </div>
                    <div class="input_item">
                        <label for="">Project Completed Date</label><br>
                        <input type="date">
                        <p class="error_txt"></p>
                    </div>
                    <div class="input_item">
                        <label for="">Description</label><br>
                        <textarea name="" id="" cols="50" rows="5"></textarea>
                        <p class="error_txt"></p>
                    </div>
                    <div class="form_control">
                        <button class="save_btn">Save</button>
                        <button class="clear_btn">Clear</button>
                    </div>
                </form>
            </div>
        </div> -->
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
</body>

</html>