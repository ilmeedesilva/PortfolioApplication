<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects Settings</title>
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
            <p></p>
        </div>
    </div>

    <div class="popup_form_wrapper hide">
        <div class="gray_cover"></div>
        <div class="popup_form">
            <div class="close_btn">
                <img src="../../resource/icon/close.png" alt="close_btn">
            </div>
            <div class="form_container">
                <div class="image_wrapper">
                    <div class="group_lb_img">
                        <label for="">previus Image</label>
                        <div class="img_box prev_img">

                        </div>
                    </div>
                    <div class="group_lb_img">
                        <label for="" class="group_lb_img_pos_ab">upload Image</label>
                        <input type="file" accept="image/*" class="image_uploader uploader_edit_project">
                        <p class="error_txt uploader_edit_project_error"></p>
                    </div>
                </div>
                <div class="header_text_wrapper">
                    <label for="">Project Title</label>
                    <input type="text" name="edit_project_header">
                    <p class="error_txt edit_project_header_error_txt"></p>
                </div>
                <div class="header_text_wrapper">
                    <label for="">Project fished date</label>
                    <input type="date" name="edit_project_date">
                    <p class="error_txt edit_project_create_date"></p>
                </div>
                <div class="desc_text_wrapper">
                    <label for="">Project Description</label>
                    <textarea name="edit_project_dec" cols="30" rows="3"></textarea>
                    <p class="error_txt edit_project_dec"></p>
                </div>
                <div class="pop_up_edit_save_cancel_wrapper">
                    <button class="primary_btn">SAVE</button>
                    <button class="cancel_btn">CANCEL</button>
                </div>
            </div>
        </div>
    </div>

    <div class="admin_page_header_text">
        <h3>Projects Settings</h3>
    </div>
    <div class="admin_settings_wrapper">









        <div class="collapse_section collapse_Section_active">
            <div class="collapse_section_header">
                <h4>Update project page</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="project_crud_wrapper">
                    <div class="selected_cover_img_view">
                    </div>
                    <div class="project_img_wrapper">
                        <div class="img_upload_header_txt">
                            <p>Upload Cover Image</p>
                        </div>
                        <div class="image_uploader_wrapper">
                            <label for="image_upload_icon">
                                <img src="../../resource/icon/uploadIcon.png" alt="Upload Image">
                            </label>
                            <input type="file" id="cover_image-upload" name="cover_image-upload" accept="image/*">
                            <p>Click the icon to upload image</p>
                            <p class="error_txt add_new_project_cover_img_err"></p>
                        </div>
                    </div>

                    <div class="form-container">
                        <div class="form-group">
                            <label for="project_page_description">Description</label>
                            <textarea id="project_page_description" name="project_page_description"></textarea>
                            <p class="error_txt update_project_desc_error"></p>
                        </div>
                    </div>
                    <div class="save-container">
                        <button id="project_page_save" class="primary_btn">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Add New Project</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="project_crud_wrapper">
                    <div class="selected_img_view">
                    </div>
                    <div class="project_img_wrapper">
                        <div class="img_upload_header_txt">
                            <p>Upload Image</p>
                        </div>
                        <div class="image_uploader_wrapper">
                            <label for="image_upload_icon">
                                <img src="../../resource/icon/uploadIcon.png" alt="Upload Image">
                            </label>
                            <input type="file" id="image-upload" name="image-upload" accept="image/*">
                            <p>Click the icon to upload image</p>
                            <p class="error_txt add_new_project_img_err"></p>
                        </div>
                    </div>

                    <div class="form-container">
                        <div class="form-group">
                            <label for="project-name">Project Name</label>
                            <input type="text" id="project-name">
                            <p class="error_txt"></p>
                        </div>
                        <div class="form-group">
                            <label for="finish-date">Finish Date</label>
                            <input type="date" id="finish-date">
                            <p class="error_txt"></p>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea id="description"></textarea>
                            <p class="error_txt"></p>
                        </div>
                    </div>
                    <div class="save-container">
                        <button id="save" class="primary_btn">Save</button>
                    </div>
                </div>
            </div>
        </div>




        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update Projects</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="table_wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Created Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="project_table_body project_edit_table_body">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Delete Projects</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <!-- <div class="table_wrapper">
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Created Date</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>ABCD Project</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td>10-08-2022</td>
                            <td><button class="control_btn delete_control delete_btn">Delete</button></td>
                        </tr>
                        <tr>
                            <td>EFGH Project</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td>02-14-2022</td>
                            <td><button class="control_btn delete_control delete_btn">Delete</button></td>
                        </tr>
                    </table>
                </div> -->

                <div class="table_wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Created Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="project_table_body project_delete_table_body">
                        </tbody>
                    </table>
                </div>


            </div>
        </div>

    </div>

    <script src="../../script/collapse.js"></script>
    <script src="../../script/project.js"></script>
    <script src="../../script/addNewProject.js"></script>
    <script src="../../script/updateProjectPage.js"></script>
    <script src="../../script/popup_form.js"></script>
    <!-- <script src="../../script/updateProject.js"></script> -->
    <script src="../../script/getProject.js"></script>
    <script src="../../script/getAllProjectsData.js"></script>
    <script src="../../script/selectedDeleteProjectdata.js"></script>
    <script src="../../script/selectedEditProjectdata.js"></script>

</body>

</html>