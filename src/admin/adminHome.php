<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION['logged_userName'])) {
    header('Location: login.php');
    exit();
}


if (!isset($_GET['page'])) {
    header("Location: main.php?page=home");
    exit();
}


?>

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
    <script src="../../script/jquery-3.6.3.min.js"></script>
</head>

<body>

    <div class="loader"></div>
    <div class="status_popup_wrapper popup_hide">
        <div class="status_icon">
            <img src="../../resource/icon/success.png" alt="status">
        </div>
        <div class="status_descrip">
            <h6>SUCCESS</h6>
            <p>WE WILL CONTACT YOU SOON AS POSSIBLE</p>
        </div>
    </div>

    <!-- <div class="popup_form_wrapper hide">
        <div class="gray_cover"></div>

        <div class="popup_form">
            <div class="close_btn">
                <img src="../../resource/icon/close.png" alt="close_btn">
            </div>

            <div class="collapse_section_body">
                <section class="upload">
                    <div class="form_Container">
                        <div class="form_wrappe group_inputs edit_service">
                            <div class="box">
                                <label for="address">Title:
                                    <input type="text" name="edit_title" placeholder="Enter title">
                                    <p class="error_txt edittitle_error"></p>
                            </div>
                            <div class="box">
                                <label for="descr">Description:</label><br>
                                <textarea name="edit_desc" cols="30" rows="3"
                                    placeholder="Type your description here..."></textarea>
                                <p class="error_txt editdesc_error"></p>
                            </div>
                        </div>
                        <div class="pop_up_edit_save_cancel_wrapper">
                            <button class="primary_btn delete_edit_service_save">SAVE</button>
                            <button class="cancel_btn">CANCEL</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div> -->



    <div class="popup_form_wrapper hide">
        <div class="gray_cover"></div>
        <!-- 
        <div class="popup_form">
            <div class="close_btn">
                <img src="../../resource/icon/close.png" alt="close_btn">
            </div>

            <div class="collapse_section_body">
                <section class="upload">
                    <div class="form_Container">
                        <div class="form_wrappe group_inputs edit_service">
                            <div class="box">
                                <label for="title">Title:
                                    <input type="text" name="edit_title" placeholder="Enter title">
                                    <p class="error_txt edittitle_error"></p>
                            </div>
                            <div class="box">
                                <label for="descr">Description:</label><br>
                                <textarea name="edit_desc" cols="30" rows="3"
                                    placeholder="Type your description here..."></textarea>
                                <p class="error_txt editdesc_error"></p>
                            </div>
                        </div>
                        <div class="pop_up_edit_save_cancel_wrapper">
                            <button class="primary_btn delete_edit_service_save">SAVE</button>
                            <button class="cancel_btn">CANCEL</button>
                        </div>
                    </div>
                </section>
            </div>
        </div> -->

        <div class="popup_form">
            <div class="close_btn">
                <img src="../../resource/icon/close.png" alt="close_btn">
            </div>
            <div class="form_container social_media_form_container">
                <div class="image_wrapper">
                    <div class="group_lb_img">
                        <label for="">previous Image</label>
                        <div class="img_box prev_img prev_social_img">
                        </div>
                    </div>
                    <div class="group_lb_img">
                        <label for="" class="group_lb_img_pos_ab">upload Image</label>
                        <input type="file" accept="image/*" class="image_uploader uploader_edit_social_media_icon">
                        <p class="error_txt uploader_edit_social_media_icon_error"></p>
                    </div>
                </div>
                <div class="header_text_wrapper">
                    <label for="">Social Media Name</label>
                    <input type="text" name="edit_social_media_name">
                    <p class="error_txt edit_social_media_name_error_txt"></p>
                </div>
                <div class="header_text_wrapper">
                    <label for="">Social Media Link</label>
                    <input type="text" name="edit_social_media_link">
                    <p class="error_txt edit_social_media_link_error_txt"></p>
                </div>
                <div class="pop_up_edit_save_cancel_wrapper">
                    <button class="primary_btn delete_social_media_save">SAVE</button>
                    <button class="cancel_btn">CANCEL</button>
                </div>
            </div>

            <div class="services_form_wrapper">
                <section class="upload">
                    <div class="form_Container">
                        <div class="form_wrappe group_inputs edit_service">
                            <div class="box">
                                <label for="edit_title">Title:
                                    <input type="text" name="edit_title" id="edit_title" placeholder="Enter title">
                                    <p class="error_txt edittitle_error"></p>
                            </div>
                            <div class="box">
                                <label for="edit_desc">Description:</label><br>
                                <textarea name="edit_desc" cols="30" rows="3"
                                    placeholder="Type your description here..."></textarea>
                                <p class="error_txt editdesc_error"></p>
                            </div>
                        </div>
                        <div class="pop_up_edit_save_cancel_wrapper">
                            <button class="primary_btn delete_edit_service_save">SAVE</button>
                            <button class="cancel_btn">CANCEL</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>


    <div class="admin_page_header_text">
        <h3>Home Settings</h3>
    </div>
    <!--Update Company Logo-->
    <div class="admin_settings_wrapper">


        <!--Update Company Name-->
        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update Company Name</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="form-container">
                    <div class="form-group">
                        <label for="company-name">Company Name</label>
                        <input type="text" name="companyName" id="new-company-name" placeholder="Enter company name">
                        <p class="error_txt company_name_error"></p>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="column col_2">
                        <button class="select-image logo_save_btn">Save</button>
                    </div>
                </div>
            </div>
        </div>



        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update Company Logo</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <section class="upload">
                    <div>
                        <p class="project_page_update_pk" style="display: none;"></p>
                        <div class="selected_cover_img_view selected_logo_img_view">
                        </div>
                    </div>
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


        <!-- update home cover image -->

        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update Home Cover Image</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="project_crud_wrapper">
                    <div class="selected_img_view">
                    </div>
                    <div class="project_img_wrapper">
                        <div class="img_upload_header_txt">
                            <p>Upload Cover Image</p>
                        </div>
                        <div class="image_uploader_wrapper img_uploader_label_input_wrapper">
                            <label for="image_upload_icon">
                                <img src="../../resource/icon/uploadIcon.png" alt="Upload Image">
                            </label>
                            <input type="file" id="image-upload" name="image-upload" accept="image/*">
                            <p>Click the icon to upload image</p>
                            <p class="error_txt add_new_home_cover_img_err"></p>
                        </div>
                    </div>

                    <div class="form-container">
                        <div class="form-group">
                            <label for="project-name">Header Text</label>
                            <input type="text" name="service" placeholder="Enter header text">
                            <p class="error_txthome_cover_header_text_error"></p>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea id="description" placeholder="Enter project description here..." rows="3"
                                cols="30"></textarea>
                            <p class="error_txt home_cover_desc_error"></p>
                        </div>
                    </div>
                    <div class="save-container form_control">
                        <button id="save" class="primary_btn home_cover_save_btn">Save</button>
                        <button class="clear_btn home_cover_clear_btn">Clear</button>
                    </div>
                </div>
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
                            <div class="box short_input25">
                                <label for="address">Street No:
                                    <input type="text" name="street_no" id="address" placeholder="Ex: No. 01">
                                    <p class="error_txt street_no_error"></p>
                            </div>
                        </div>
                        <div class="form_wrappe group_inputs">
                            <div class="box">
                                <label for="address">Street:
                                    <input type="text" name="street" id="address" placeholder="Ex: Example Road">
                                    <p class="error_txt street_error"></p>
                            </div>
                            <div class="box">
                                <label for="address">City:
                                    <input type="text" name="city_no" id="address" placeholder="Ex: Colombo 01">
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

                        <div class="form_wrappe group_inputs">
                            <div class="box">
                                <label for="appointment">Opening Hours:</label>
                                <input type="time" id="appointment" name="openinig_hrs" min="09:00" max="18:00">
                                <p class="error_txt opening_hrs_error"></p>
                            </div>
                            <div class="box">
                                <label for="appointment">Closing Hours:</label>
                                <input type="time" id="appointment" name="closing_hrs" min="09:00" max="18:00">
                                <p class="error_txt closing_hrs_error"></p>
                            </div>
                        </div>








                        <div class="column btn-col">



                            <div class="column btn-col form_control">
                                <button class="primary_btn contact_info_save_btn">Save</button>
                                <!-- <button class="clear_btn add_contactInfo_clear_btn">Clear</button> -->
                                <!-- <button class="primary_btn contact_info_save_btn">Save</button> -->
                            </div>
                        </div>
                </section>
            </div>
        </div>


        <!-- add new social media  -->


        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Add new Social Media</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="project_crud_wrapper">
                    <div class="selected_img_view selected_add_new_social_icon_view">
                    </div>
                    <div class="selected_cover_img_view">
                    </div>
                    <div class="project_img_wrapper">
                        <div class="img_upload_header_txt">
                            <p>Upload Social Media Icon</p>
                        </div>
                        <div class="image_uploader_wrapper img_uploader_label_input_wrapper">
                            <label for="image_upload_icon">
                                <img src="../../resource/icon/uploadIcon.png" alt="Upload Image">
                            </label>
                            <input type="file" id="new_social_media_icon" name="new_social_media_icon" accept="image/*">
                            <p>Click the icon to upload image</p>
                            <p class="error_txt new_social_media_icon_err"></p>
                        </div>
                    </div>

                    <div class="form-container">
                        <div class="form-group">
                            <label for="add_social_link">Social Media Name</label>
                            <input type="text" name="add_social_link_name" id="new_social_media_link_name"
                                placeholder="ex: facebook"></input>
                            <p class="error_txt add_new_social_link__name_error"></p>
                            <label for="add_social_link">Social Media Link</label>
                            <input type="text" name="add_social_link" id="new_social_media_link"
                                placeholder="ex: https://www.example.com"></input>
                            <p class="error_txt add_new_social_link_error"></p>
                        </div>
                    </div>

                    <div class="save-container form_control">
                        <button id="add_new_social_media" class="primary_btn">Save</button>
                        <button class="clear_btn add_newsocialmedia_clear_btn">Clear</button>
                    </div>
                </div>
            </div>
        </div>

        <!--Modify social media-->
        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Manage Social Medias</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="table_wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Link</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="project_table_body social_media_modify_table_body">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!--Add Services title & description-->
        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update Services</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>

            <div class="collapse_section_body">
                <section class="upload">
                    <div class="form_Container">
                        <div class="form_wrappe group_inputs">
                            <div class="box">
                                <label for="address">Title:
                                    <input type="text" name="title" placeholder="Enter title">
                                    <p class="error_txt title_error"></p>
                            </div>
                            <div class="box">
                                <label for="descr">Description:</label><br>
                                <textarea name="servicesdesc" cols="30" rows="3"
                                    placeholder="Type your description here..."></textarea>
                                <p class="error_txt desc_error"></p>
                            </div>
                        </div>
                        <div class="column btn-col form_control">
                            <button class="primary_btn add_titledesc_save_btn">Save</button>
                            <button class="clear_btn add_titledesc_clear_btn">Clear</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <!-- Add new Service -->
        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Add New Service</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="project_crud_wrapper">
                    <div class="selected_img_view selected_img_view_new_service">
                    </div>
                    <div class="project_img_wrapper">
                        <div class="img_upload_header_txt">
                            <p>Upload Icon</p>
                        </div>
                        <div class="image_uploader_wrapper img_uploader_label_input_wrapper">
                            <label for="image_upload_icon">
                                <img src="../../resource/icon/uploadIcon.png" alt="Upload Image">
                            </label>
                            <input type="file" id="image-upload-new-service" name="image-upload_new_servic"
                                accept="image/*">
                            <p>Click the icon to upload image</p>
                            <p class="error_txt add_new_service_img_err"></p>
                        </div>
                    </div>

                    <div class="form-container">
                        <div class="form-group">
                            <label for="project-name">Service</label>
                            <input type="text" name="service" id="new-service-name" placeholder="Enter service">
                            <p class="error_txt new_service_error"></p>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea id="new-service-description" placeholder="Enter project description here..."
                                rows="3" cols="30"></textarea>
                            <p class="error_txt desc_error_new_service"></p>
                        </div>
                    </div>
                    <div class="save-container form_control">
                        <button id="save" class="primary_btn add_service_save_btn">Save</button>
                        <button class="clear_btn add_service_clear_btn">Clear</button>
                    </div>
                </div>
            </div>
        </div>
        <!--Manage services-->
        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Manage Services</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="table_wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="project_table_body service_edit_table_body">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>



        <!--call to action section-->
        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Call to action section</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="project_crud_wrapper">
                    <p class="project_page_update_pk" style="display: none;"></p>
                    <div class="selected_img_view selected_img_view_cta">
                    </div>
                    <div class="project_img_wrapper">
                        <div class="img_upload_header_txt">
                            <p>Upload background Image</p>
                        </div>
                        <div class="image_uploader_wrapper img_uploader_label_input_wrapper">
                            <label for="image_upload_icon">
                                <img src="../../resource/icon/uploadIcon.png" alt="Upload Image">
                            </label>
                            <input type="file" id="call-to-action-image-upload" name="call-to-action-image-upload"
                                accept="image/*">
                            <p>Click the icon to upload image</p>
                            <p class="error_txt call_to_action_img_err"></p>
                        </div>
                    </div>

                    <div class="form-container">
                        <div class="form-group">
                            <label for="project-name">Main Title</label>
                            <input type="text" name="call_to_action_Main_Title" placeholder="Enter main Title"
                                id="Cta-Main-Title">
                            <p class="error_txt call_to_action_main_title_error"></p>
                        </div>
                        <div class="form-group">
                            <label for="project-name">Sub Title</label>
                            <input type="text" name="call_to_action_Sub_Title" placeholder="Enter Sub Title"
                                id="Cta-Sub-Title">
                            <p class="error_txt call_to_action_sub_title_error"></p>
                        </div>
                    </div>
                    <div class="save-container form_control">
                        <button id="save" class="primary_btn cta_save_btn">Save</button>
                        <button class="clear_btn cta_clear_btn">Clear</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Update About Image -->

        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update About Image</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <section class="upload">
                    <div>
                        <p class="project_page_update_pk" style="display: none;"></p>
                        <div class="selected_cover_img_view selected_about_img_view">
                        </div>
                    </div>
                    <div class="Container">



                        <div class="wrapper">
                            <div class="img-area column col_1">
                                <div class="img_uploader">
                                    <label for="" class="img_uploader_wrapper about_img_uploader_wrapper">
                                        <input type="file" accept="image/*" class="image_uploader"
                                            onchange="selectedAboutImageFile(this)">
                                    </label>
                                    <p class="file_about_img"></p>
                                    <p class="error_txt error_abt_img"></p>
                                    <p>Click here to upload</p>
                                </div>
                            </div>
                            <div class="column col_2">
                                <button class="select-image about_img_save_btn">Save</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>


        <!--Update slider-->
        <!-- <div class="collapse_section">
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
                                <textarea id="slider1Desc" name="slider1Desc" rows="10" cols="40"
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
                                <textarea id="w3review" name="slider2Desc" rows="10" cols="40"
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
                <div class="btn_upload">
                    <button class="select-image slider_info">Save</button>
                </div> 
            </div>
        </div> -->

        <!--Update Slider Images
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
                <div class="btn_upload">
                    <button class="select-image slider_image">Save</button>
                </div> 
            </div>
        </div>-->
    </div>
    </div>
    </div>
    <script src="../../script/pageLoader.js"></script>
    <script src="../../script/collapse.js"></script>
    <script src="../../script/setLogo.js"></script>
    <script src="../../script/updateContactInfo.js"></script>
    <script src="../../script/addNewSocialMedia.js"></script>
    <script src="../../script/getContactInfo.js"></script>
    <script src="../../script/getLogo.js"></script>
    <script src="../../script/getAllSocialMedias.js"></script>
    <script src="../../script/popup_form.js"></script>
    <!-- <script src="../../script/updateSliderInfo.js"></script> -->
    <script src="../../script/selectedSocialMediaDeleteData.js"></script>
    <script src="../../script/selectedSocialMediaEditData.js"></script>
    <script src="../../script/updateHomeAboutImage.js"></script>
    <script src="../../script/getHomeAboutImage.js"></script>
    <script src="../../script/addServicesTitleDescription.js"></script>
    <script src="../../script/selectedEditServicedata.js"></script>
    <script src="../../script/selectedDeleteServicedata.js"></script>
    <script src="../../script/getAllServiceData.js"></script>
    <!-- <script src="../../script/logout.js"></script> -->
    <script src="../../script/setCallToActionBanner.js"></script>
    <script src="../../script/getCallToActionBanner.js"></script>
    <script src="../../script/addNewService.js"></script>
    <script src="../../script/companyName.js"></script>
    <script src="../../script/getCompanyName.js"></script>

</body>

</html>