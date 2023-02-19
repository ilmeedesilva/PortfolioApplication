<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Settings</title>
    <link rel="stylesheet" href="../../css/popup.css">
    <link rel="stylesheet" href="../../css/form.css">
</head>

<body>
    <div class="status_popup_wrapper popup_hide">
        <div class="status_icon">
            <img src="../../resource/icon/success.png" alt="status">
        </div>
        <div class="status_descrip">
            <h6>SUCCESS</h6>
            <p>WE WILL CONTACT YOU SOON AS POSSIBLE</p>
        </div>
    </div>

    <div class="admin_page_header_text">
        <h3>About Settings</h3>
    </div>

    <div class="admin_settings_wrapper">

        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update about</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                    
                <div class="add_project_wrapper">

                    <div class="img_upload_container">

                        <div class="title">
                            <h5>Upload Image</h5>
                        </div>

                        <div class="img_uploader">

                            <label for="" class="img_uploader_wrapper about_uploader_wrapper">
                                <input type="file" accept="image/*" class="image_uploader"
                                    onchange="selectedFileAbout(this)">
                            </label>
                            <p class="file_name"></p>
                            <p class="error_txt error_img_about"></p>
                            <p>Click here to upload</p>
                        </div>
                    </div>
                    <div class="form_wrapper">
                        <form action="">
                            <div class="input_item">
                                <label for="descr">Description</label><br>
                                <textarea name="aboutDesc" cols="30" rows="3"
                                    placeholder="Type your description here..."></textarea>
                                <p class="error_txt desc_error_about"></p>
                            </div>
                            <div class="form_control">
                                <button class="save_btn saveAbout">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- <div class="update_about">
                    <div class="desc_wrapper">
                        <div class="input_item">
                            <label for="">Description</label><br>
                            <textarea name="" id="" cols="50" rows="6"
                                placeholder="Type your description here..."></textarea>
                            <p class="error_txt"></p>
                        </div>
                    </div>
                    <div class="btn_save_control">
                        <button class="save_btn primary_btn">Save</button>
                    </div>
                </div>  -->
            </div>
        </div>

        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update Vision</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="add_project_wrapper">
                    <div class="img_upload_container">
                        <div class="title">
                            <h5>Upload Image</h5>
                        </div>
                        <div class="img_uploader">
                            <label for="" class="img_uploader_wrapper vision_uploader_wrapper">
                                <input type="file" accept="image/*" class="image_uploader"
                                    onchange="selectedFileVision(this)">
                            </label>
                            <p class="vision_img_name"></p>
                            <p class="error_txt error_img_vision"></p>
                            <p>Click here to upload</p>
                        </div>
                    </div>
                    <div class="form_wrapper">
                        <form action="">
                            <div class="input_item">
                                <label for="descr">Description</label><br>
                                <textarea name="visionDesc" cols="30" rows="3"
                                    placeholder="Type your description here..."></textarea>
                                <p class="error_txt desc_error_vision"></p>
                            </div>
                            <div class="form_control">
                                <button class="save_btn saveVision">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update TagLine</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="add_project_wrapper">
                    <div class="img_upload_container">
                        <div class="title">
                            <h5>Upload Image</h5>
                        </div>
                        <div class="img_uploader">
                            <label for="" class="img_uploader_wrapper tagLine_uploader_wrapper">
                                <input type="file" accept="image/*" class="image_uploader"
                                    onchange="selectedFileTagLine(this)">
                            </label>
                            <p class="tagLine_img_name"></p>
                            <p class="error_txt error_img_tagLine"></p>
                            <p>Click here to upload</p>
                        </div>
                    </div>
                    <div class="form_wrapper">
                        <form action="">
                            <div class="input_item">
                                <label for="descr">Description</label><br>
                                <textarea name="tagLineDesc" cols="30" rows="3"
                                    placeholder="Type your description here..."></textarea>
                                <p class="error_txt desc_error_tagLine"></p>
                            </div>
                            <div class="form_control">
                                <button class="save_btn saveTagLine">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update Motto</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="add_project_wrapper">
                    <div class="img_upload_container">
                        <div class="title">
                            <h5>Upload Image</h5>
                        </div>
                        <div class="img_uploader">
                            <label for="" class="img_uploader_wrapper motto_uploader_wrapper">
                                <input type="file" accept="image/*" class="image_uploader"
                                    onchange="selectedFileMotto(this)">
                            </label>
                            <p class="motto_img_name"></p>
                            <p class="error_txt error_img_motto"></p>
                            <p>Click here to upload</p>
                        </div>
                    </div>
                    <div class="form_wrapper">
                        <form action="">
                            <div class="input_item">
                                <label for="descr">Description</label><br>
                                <textarea name="mottoDesc" cols="30" rows="3"
                                    placeholder="Type your description here..."></textarea>
                                <p class="error_txt desc_error_motto"></p>
                            </div>
                            <div class="form_control">
                                <button class="save_btn saveMotto">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    </div>




    <script src="../../script/collapse.js"></script>
    <script src="../../script/updateAbout.js"></script>
    <script src="../../script/getAbout.js"></script>
    <script src="../../script/updateVision.js"></script>
    <script src="../../script/getVision.js"></script>
    <script src="../../script/updateTagLine.js"></script>
    <script src="../../script/getTagLine.js"></script>
    <script src="../../script/updateMotto.js"></script>
    <script src="../../script/getMotto.js"></script>
</body>

</html>