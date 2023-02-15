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
                    <div class="img_box prev_img">

                    </div>
                    <input type="file" accept="image/*" class="image_uploader uploader_edit_project">
                    <p class="error_txt uploader_edit_project_error"></p>
                </div>
                <div class="header_text_wrapper">
                    <input type="text" name="edit_project_header">
                    <p class="error_txt edit_project_header_error_txt"></p>
                </div>
                <div class="header_text_wrapper">
                    <input type="date" name="edit_project_date">
                    <p class="error_txt edit_project_create_date"></p>
                </div>
                <div class="desc_text_wrapper">
                    <textarea name="edit_project_dec" cols="30" rows="10"></textarea>
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
                <div class="add_project_wrapper">
                    <div class="img_upload_container">
                        <div class="title">
                            <h5>Upload Image</h5>
                        </div>
                        <div class="img_uploader ">
                            <label for="updateProject" class="img_uploader_wrapper project_uploader_wrapper">
                                <input type="file" accept="image/*" name="updateProject" class="image_uploader"
                                    onchange="updateSelectedFileProject(this)">
                            </label>
                            <p class="update_project_file_name"></p>
                            <p class="error_txt error_img_project"></p>
                            <p>Click here to upload</p>
                        </div>
                    </div>
                    <div class="form_wrapper">
                        <form action="">
                            <div class="input_item">
                                <label for="descr">Description</label><br>
                                <textarea name="projectDesc" cols="50" rows="5"
                                    placeholder="Type your description here..."></textarea>
                                <p class="error_txt desc_error_project"></p>
                            </div>
                            <div class="form_control">
                                <button class="saveProject primary_btn">Save</button>
                                <button class="clear_btn clear_update_project_btn">Clear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="collapse_section collapse_Section_active">
            <div class="collapse_section_header">
                <h4>Add New Project</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="add_project_wrapper">
                    <div class="img_upload_container">
                        <div class="title">
                            <h5>Upload Image</h5>
                        </div>
                        <div class="img_uploader">
                            <label for="" class="img_uploader_wrapper add_new_project_img_wrapper">
                                <input type="file" accept="image/*" class="image_uploader"
                                    onchange="selectedAddNewProjectFile(this)">
                            </label>
                            <p class="add_project_file_name"></p>
                            <p class="error_txt add_project_error_img"></p>
                            <p>Click here to upload</p>
                        </div>
                    </div>
                    <div class="form_wrapper">
                        <form action="">
                            <div class="input_item">
                                <label for="projectName">Project Name</label><br>
                                <input type="text" name="projectName" placeholder="Enter Project Name">
                                <p class="error_txt proj_error"></p>
                            </div>
                            <div class="input_item">
                                <label for="date">Project Completed Date</label><br>
                                <input type="date" name="date">
                                <p class="error_txt date_error"></p>
                            </div>
                            <div class="input_item">
                                <label for="descr">Description</label><br>
                                <textarea name="descr" cols="50" rows="5"
                                    placeholder="Type your description here..."></textarea>
                                <p class="error_txt desc_error"></p>
                            </div>
                            <div class="form_control">
                                <button class="save_btn">Save</button>
                                <button class="clear_btn clear_add_project_btn">Clear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>




        <div class="collapse_section">
            <div class="collapse_section_header">
                <h4>Update Project</h4>
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
                <h4>Delete Project</h4>
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
    <script src="../../script/popup_form.js"></script>
    <script src="../../script/updateProject.js"></script>
    <script src="../../script/getProject.js"></script>
    <script src="../../script/getAllProjectsData.js"></script>
    <script src="../../script/selectedDeleteProjectdata.js"></script>
    <script src="../../script/selectedEditProjectdata.js"></script>

</body>

</html>