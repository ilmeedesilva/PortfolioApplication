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
        <h3>Projects Settings</h3>
    </div>
    <div class="admin_settings_wrapper">

        <div class="collapse_section collapse_Section_active">
            <div class="collapse_section_header">
                <h4>Update project description</h4>
                <img src="../../resource/icon/right-arrow.png" alt="arrow" srcset="">
            </div>
            <div class="collapse_section_body">
                <div class="update_project_desc">
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
                            <label for="" class="img_uploader_wrapper">
                                <input type="file" accept="image/*" class="image_uploader"
                                    onchange="selectedFile(this)">
                            </label>
                            <p class="file_name"></p>
                            <p class="error_txt error_img"></p>
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
                                <button class="clear_btn">Clear</button>
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
                            <td><button class="control_btn">Edit</button></td>
                        </tr>
                        <tr>
                            <td>EFGH Project</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td>02-14-2022</td>
                            <td><button class="control_btn">Edit</button></td>
                        </tr>
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
                <div class="table_wrapper">
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
                            <td><button class="control_btn">Delete</button></td>
                        </tr>
                        <tr>
                            <td>EFGH Project</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td>02-14-2022</td>
                            <td><button class="control_btn">Delete</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    </div>




    <script src="../../script/collapse.js"></script>
    <script src="../../script/project.js"></script>


</body>

</html>