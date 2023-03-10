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
    <title>About Settings</title>
    <link rel="stylesheet" href="../../css/popup.css">
    <link rel="stylesheet" href="../../css/form.css">
    <script src="../../script/jquery-3.6.3.min.js"></script>
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
                <h4>Update About</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="project_crud_wrapper">
                    <p class="project_page_update_pk" style="display: none;"></p>
                    <div class="selected_cover_img_view selected_img_about_view">
                    </div>
                    <div class="project_img_wrapper">
                        <div class="img_upload_header_txt">
                            <p>Upload Cover Image</p>
                        </div>
                        <div class="image_uploader_wrapper img_uploader_label_input_wrapper about_uploader_wrapper">
                            <label for="image_upload_icon">
                                <img src="../../resource/icon/uploadIcon.png" alt="Upload Image">
                            </label>
                            <input type="file" id="about_cover_image-upload" name="cover_image-upload" accept="image/*">
                            <p>Click the icon to upload image</p>
                            <p class="error_txt add_about_cover_img_err"></p>
                        </div>
                    </div>

                    <div class="form-container">
                        <div class="form-group">
                            <label for="about_page_description">Description</label>
                            <textarea id="about_page_description" name="about_page_description" rows="8"
                                cols="30"></textarea>
                            <p class="error_txt update_about_desc_error"></p>
                        </div>
                    </div>

                    <div class="save-container">
                        <button id="about_cover_page_save" class="primary_btn">Save</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update Vision</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="project_crud_wrapper">
                    <p class="project_page_update_pk" style="display: none;"></p>
                    <div class="selected_cover_img_view selected_img_vision_view">
                    </div>
                    <div class="project_img_wrapper">
                        <div class="img_upload_header_txt">
                            <p>Upload Cover Image</p>
                        </div>
                        <div class="image_uploader_wrapper img_uploader_label_input_wrapper vision_uploader_wrapper">
                            <label for="image_upload_icon">
                                <img src="../../resource/icon/uploadIcon.png" alt="Upload Image">
                            </label>
                            <input type="file" id="vision_cover_image-upload" name="cover_image-upload"
                                accept="image/*">
                            <p>Click the icon to upload image</p>
                            <p class="error_txt add_vision_cover_img_err"></p>
                        </div>
                    </div>

                    <div class="form-container">
                        <div class="form-group">
                            <label for="vision_page_description">Description</label>
                            <textarea id="vision_page_description" name="vision_page_description" rows="8"
                                cols="30"></textarea>
                            <p class="error_txt update_vision_desc_error"></p>
                        </div>
                    </div>

                    <div class="save-container">
                        <button id="vision_page_save" class="primary_btn">Save</button>
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
                <div class="project_crud_wrapper">
                    <p class="project_page_update_pk" style="display: none;"></p>
                    <div class="selected_cover_img_view selected_img_tagLine_view">
                    </div>
                    <div class="project_img_wrapper">
                        <div class="img_upload_header_txt">
                            <p>Upload Cover Image</p>
                        </div>
                        <div class="image_uploader_wrapper img_uploader_label_input_wrapper tagLine_uploader_wrapper">
                            <label for="image_upload_icon">
                                <img src="../../resource/icon/uploadIcon.png" alt="Upload Image">
                            </label>
                            <input type="file" id="tagLine_cover_image-upload" name="cover_image-upload"
                                accept="image/*">
                            <p>Click the icon to upload image</p>
                            <p class="error_txt add_tagLine_cover_img_err"></p>
                        </div>
                    </div>

                    <div class="form-container">
                        <div class="form-group">
                            <label for="tagLine_page_description">Description</label>
                            <textarea id="tagLine_page_description" name="tagLine_page_description" rows="8"
                                cols="30"></textarea>
                            <p class="error_txt update_tagLine_desc_error"></p>
                        </div>
                    </div>

                    <div class="save-container">
                        <button id="tagLine_page_save" class="primary_btn">Save</button>
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
                <div class="project_crud_wrapper">
                    <p class="project_page_update_pk" style="display: none;"></p>
                    <div class="selected_cover_img_view selected_img_motto_view">
                    </div>
                    <div class="project_img_wrapper">
                        <div class="img_upload_header_txt">
                            <p>Upload Cover Image</p>
                        </div>
                        <div class="image_uploader_wrapper img_uploader_label_input_wrapper motto_uploader_wrapper">
                            <label for="image_upload_icon">
                                <img src="../../resource/icon/uploadIcon.png" alt="Upload Image">
                            </label>
                            <input type="file" id="motto_cover_image-upload" name="cover_image-upload" accept="image/*">
                            <p>Click the icon to upload image</p>
                            <p class="error_txt add_motto_cover_img_err"></p>
                        </div>
                    </div>

                    <div class="form-container">
                        <div class="form-group">
                            <label for="motto_page_description">Description</label>
                            <textarea id="motto_page_description" name="motto_page_description" rows="8"
                                cols="30"></textarea>
                            <p class="error_txt update_motto_desc_error"></p>
                        </div>
                    </div>

                    <div class="save-container">
                        <button id="motto_page_save" class="primary_btn">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>






    <script src="../../script/pageLoader.js"></script>
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