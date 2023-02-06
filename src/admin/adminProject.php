<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects Settings</title>
</head>

<body>
    <div class="admin_page_header_text">
        <h3>Projects Settings</h3>

        <div class="settings_section_wrapper">
            <div class="settings_section_header">
                <h4>add new Project</h4>
            </div>
            <div class="settings_section_img_uploader">
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
            </div>
        </div>


    </div>
</body>

</html>