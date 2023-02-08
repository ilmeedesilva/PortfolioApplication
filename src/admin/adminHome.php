<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Settings</title>
    <link rel="stylesheet" href="../../css/admin/admin.css">
    <link rel="stylesheet" href="../../css/style.css">
</head>

<body>
    <div class="admin_page_header_text">
        <h3>Home Settings</h3>
    </div>
    <!--Update Company Logo-->
    <div class="admin_settings_wrapper">

        <div class="collapse_section collapse_Section_active">
            <div class="collapse_section_header">
                <h4>Update Company Logo</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <section class="upload">

                    <div class="Container">
                        <div class="wrapper">

                            <div class="img-area column col_1">

                                <div class="img_uploader">
                                    <label for="" class="img_uploader_wrapper logo_uploader_wrapper">
                                        <input type="file" accept="image/*" class="image_uploader"
                                            onchange="selectedLogoFile(this)">
                                    </label>
                                    <p class="file_name"></p>
                                    <p class="error_txt error_logo"></p>
                                    <p>Click here to upload</p>
                                </div>

                            </div>

                            <div class="column col_2">
                                <button class="select-image logo_save_btn">Save</button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
        <!--Update Update Contact Info-->
        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update Contact Info</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>

            <div class="collapse_section_body">
                <section class="upload">
                    <div class="form_Container">

                        <div class="form_wrappe">
                            <div class="box">
                                <label for="address">Street No:
                                    <input type="text" name="street_no" id="address" placeholder="Street No">
                                    <p class="error_txt street_no_error"></p>
                            </div>
                            <div class="box">
                                <label for="address">City:
                                    <input type="text" name="city_no" id="address">
                                    <p class="error_txt city_no_error"></p>
                            </div>
                            <div class="box">
                                <label for="address">Country:
                                    <input type="text" name="country" id="address">
                                    <p class="error_txt country_error"></p>
                            </div>
                        </div>

                        <div class="form_wrappe">
                            <div class="box">
                                <label for="email">Email:
                                    <input type="email" name="mail" id="email">
                                    <p class="error_txt mail_error"></p>
                            </div>
                            <div class="box">
                                <label for="phone1">Phone1:
                                    <input type="text" name="phone1" id="tel" require>
                                    <p class="error_txt phone1_error"></p>
                            </div>
                            <div class="box">
                                <label for="phone2">Phone2:
                                    <input type="text" name="phone2" id="tel" require>
                                    <p class="error_txt phone2_error"></p>
                            </div>
                        </div>
                        <div class="column btn-col">
                            <input type="submit" name="" class="primary_btn contact_info_save_btn" value="Save">
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <!--Update slider-->
        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update Slider Text</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <form class="slider_update">
                    <div class="upload_wrappe">
                        <h3>Slider 1</h3>
                        <div class="layout">
                            <label for="title">Title:
                                <input type="text" name="slider1Title" id="Title">
                                <p class="error_txt slider1Title_error"></p>
                        </div>
                        <div class="Description">
                            <label for="Description">Description:
                                <textarea id="slider1Desc" name="slider1Desc" rows="4" cols="50"></textarea>
                                <p class="error_txt slider1Desc_error"></p>
                        </div>

                    </div>
                    <div class="upload_wrappe">
                        <h3>Slider 2</h3>
                        <div class="layout">
                            <label for="header">Title:
                                <input type="text" name="slider2Title" id="Title">
                                <p class="error_txt slider2Title_error"></p>
                        </div>
                        <div class="Description">
                            <label for="Description">Description:
                                <textarea id="w3review" name="slider2Desc" rows="4" cols="50"></textarea>
                                <p class="error_txt slider2Desc_error"></p>
                        </div>

                    </div>
                    <div class="upload_wrappe">
                        <h3>Slider 3</h3>
                        <div class="layout">
                            <label for="header">Title:
                                <input type="text" name="slider3Title" id="Title">
                                <p class="error_txt slider3Title_error"></p>
                        </div>
                        <div class="Description">
                            <label for="Description">Description:
                                <textarea id="w3review" name="slider3Desc" rows="4" cols="50"></textarea>
                                <p class="error_txt slider3Desc_error"></p>
                        </div>

                    </div>
                </form>
                <div class="btn_upload">
                    <button class="select-image">Save</button>
                </div>
            </div>
        </div>

        <!--Update Slider Images-->
        <div class="collapse_section">
            <div class="collapse_section_header">

                <h4>Update Slider Images</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <section class="upload">

                    <div class="Container">
                        <div class="slider_img">
                            <h3>Slider 1</h3>
                            <label for="" class="img_uploader_wrapper">
                                <input type="file" accept="image/*" class="image_uploader"
                                    onchange="selectedFile(this)">
                            </label>
                            <p class="file_name"></p>
                            <p class="error_txt error_img"></p>
                            <p>Click here to upload</p>
                        </div>
                    </div>

                    <div class="Container">
                        <div class="slider_img">

                            <h3>Slider 2</h3>
                            <label for="" class="img_uploader_wrapper">
                                <input type="file" accept="image/*" class="image_uploader"
                                    onchange="selectedFile(this)">
                            </label>
                            <p class="file_name"></p>
                            <p class="error_txt error_img"></p>
                            <p>Click here to upload</p>

                        </div>
                    </div>

                    <div class="Container">
                        <div class="slider_img">


                            <h3>Slider 3</h3>
                            <label for="" class="img_uploader_wrapper">
                                <input type="file" accept="image/*" class="image_uploader"
                                    onchange="selectedFile(this)">
                            </label>
                            <p class="file_name"></p>
                            <p class="error_txt error_img"></p>
                            <p>Click here to upload</p>


                        </div>
                    </div>
                </section>
                <div class="btn_upload">
                    <button class="select-image">Save</button>
                </div>
            </div>
        </div>

    </div>
    </div>
    </div>




    <script src="../../script/collapse.js"></script>
    <script src="../../script/setLogo.js"></script>
</body>

</html>