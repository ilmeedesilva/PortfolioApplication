<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="../../css/project.css">
    <link rel="stylesheet" type="text/css" href="../../css/navigation.css">
    <link rel="stylesheet" href="../../css/style.css">
</head>
<body>
<?php 
    include "../../includes/navigation.php"; 
    ?>
    <div class="project mt_45">
        <div class="title_top">
            <h1>PROJECTS</h1>
        </div>
        <div class="content_bottom project_item_wrapper">
            <div class="container">
                <div class="row">
                    <div class="col blog_wrapper">
                        <div class="blue_cover"></div>
                        <a href="#"><img src="../../resource/image/img1.jpg" alt="image1"></a>
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                        <div class="sub_details d-flex justify-content-between align-items-center">
                            <p>Lorem ipsum dolor</p>
                            <p>10.10.2022</p>
                        </div>   
                    </div>

                    <div class="col blog_wrapper">
                    <div class="blue_cover"></div>
                        <a href="#"><img src="../../resource/image/img1.jpg" alt="image1"></a>
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                        <div class="sub_details d-flex justify-content-between align-items-center">
                            <p>Lorem ipsum dolor</p>
                            <p>10.10.2022</p>
                        </div>   
                    </div>

                    <div class="col blog_wrapper">
                    <div class="blue_cover"></div>
                        <a href="#"><img src="../../resource/image/img1.jpg" alt="image1"></a>
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                        <div class="sub_details d-flex justify-content-between align-items-centers">
                            <p>Lorem ipsum dolor</p>
                            <p>10.10.2022</p>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="add_project_wrapper">
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
    </div>

    <script src="../../script/navigation.js"> 
    </script>
</body>
</html>