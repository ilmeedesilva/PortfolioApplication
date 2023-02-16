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

                        <div class="form_wrappe group_inputs">
                            <div class="box">
                                <label for="address">Street No:
                                    <input type="text" name="street_no" id="address" placeholder="Ex: No. 01">
                                    <p class="error_txt street_no_error"></p>
                            </div>
                            <div class="box">
                                <label for="address">Street & City:
                                    <input type="text" name="city_no" id="address"
                                        placeholder="Ex: Example Road, Colombo 01">
                                    <p class="error_txt city_error"></p>
                            </div>
                            <div class="box">
                                <label for="address">Country:
                                    <input type="text" name="country" id="address" placeholder="Ex: Sri Lanka">
                                    <p class="error_txt country_error"></p>
                            </div>
                        </div>

                        <div class="form_wrappe group_inputs">
                            <div class="box">
                                <label for="email">Email:
                                    <input type="email" name="mail" id="email" placeholder="example@gmail.com">
                                    <p class="error_txt mail_error"></p>
                            </div>
                            <div class="box">
                                <label for="phone1">Contact No 1:
                                    <input type="text" name="phone1" id="tel" require placeholder="0700000000">
                                    <p class="error_txt phone1_error"></p>
                            </div>
                            <div class="box">
                                <label for="phone2">Contact No 2:
                                    <input type="text" name="phone2" id="tel" require placeholder="0700000000">
                                    <p class="error_txt phone2_error"></p>
                            </div>
                        </div>
                        <div class="column btn-col">
                            <button class="primary_btn contact_info_save_btn">Save</button>
                            <!-- <button class="primary_btn contact_info_save_btn">Save</button> -->
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
                                <input type="text" name="slider1Title" id="Title" placeholder="Ex: New title">
                                <p class="error_txt slider1Title_error"></p>
                        </div>
                        <div class="Description">
                            <label for="Description">Description:
                                <textarea id="slider1Desc" name="slider1Desc" rows="4" cols="50"
                                    placeholder="Enter your description here..."></textarea>
                                <p class="error_txt slider1Desc_error"></p>
                        </div>
                        <div class="btn_upload">
                            <button class="select-image slider1_info">Save</button>
                        </div>
                    </div>
                    <div class="upload_wrappe">
                        <h3>Slider 2</h3>
                        <div class="layout">
                            <label for="header">Title:
                                <input type="text" name="slider2Title" id="Title" placeholder="Ex: New title">
                                <p class="error_txt slider2Title_error"></p>
                        </div>
                        <div class="Description">
                            <label for="Description">Description:
                                <textarea id="w3review" name="slider2Desc" rows="4" cols="50"
                                    placeholder="Enter your description here..."></textarea>
                                <p class="error_txt slider2Desc_error"></p>
                        </div>
                        <div class="btn_upload">
                            <button class="select-image slider2_info">Save</button>
                        </div>
                    </div>
                    <div class="upload_wrappe">
                        <h3>Slider 3</h3>
                        <div class="layout">
                            <label for="header">Title:
                                <input type="text" name="slider3Title" id="Title" placeholder="Ex: New title">
                                <p class="error_txt slider3Title_error"></p>
                        </div>
                        <div class="Description">
                            <label for="Description">Description:
                                <textarea id="w3review" name="slider3Desc" rows="4" cols="50"
                                    placeholder="Enter your description here..."></textarea>
                                <p class="error_txt slider3Desc_error"></p>
                        </div>
                        <div class="btn_upload">
                            <button class="select-image slider3_info">Save</button>
                        </div>
                    </div>
                </form>
                <!-- <div class="btn_upload">
                    <button class="select-image slider_info">Save</button>
                </div> -->
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
                        <div class="btn_upload">
                            <button class="select-image slider_image1">Save</button>
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
                        <div class="btn_upload">
                            <button class="select-image slider_image2">Save</button>
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
                        <div class="btn_upload">
                            <button class="select-image slider_image3">Save</button>
                        </div>
                    </div>
                </section>
                <!-- <div class="btn_upload">
                    <button class="select-image slider_image">Save</button>
                </div> -->
            </div>
        </div>
    </div>
    </div>
    </div>
    <script src="../../script/collapse.js"></script>
    <script src="../../script/setLogo.js"></script>
    <script src="../../script/updateContactInfo.js"></script>
    <script src="../../script/getContactInfo.js"></script>
    <script src="../../script/updateSliderInfo.js"></script>
</body>

</html>