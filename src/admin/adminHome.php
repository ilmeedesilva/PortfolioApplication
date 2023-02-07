<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Settings</title>
    <link rel="stylesheet" href="../../css/admin.css">
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

						    <img class="icon" src="../../resource\icon\uploadimg.png">
						    <input type="file" id="file">
						    <p>Image size must be less than <span>2MB</span></p>
						    
				  </div>

				  <div class="column col_2">
						    <button class="select-image">Save</button>
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
                                        <input type="text" name="street_no" id="address">
                                    </div>
                                    <div class="box">
                                        <label for="address">City:
                                        <input type="text" name="street_no" id="address">
                                    </div>
                                    <div class="box">
                                        <label for="address">Country:
                                        <input type="text" name="street_no" id="address">
                                    </div>
                    </div>

                    <div class="form_wrappe">
                                    <div class="box">
                                        <label for="email">Email:
                                        <input type="email" name="mail" id="email">
                                    </div>
                                    <div class="box">
                                        <label for="address">Phone1:
                                        <input type="text" name="number" id="tel" require>
                                    </div>
                                    <div class="box">
                                        <label for="address">Phone2:
                                        <input type="text" name="number" id="tel" require>
                                    </div>
                    </div>
                    <div class="column btn-col">
                            <input type="submit" name=""class="primary_btn " value="Save">
                     </div>
                </div>
                                        </section>
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
                                <label for="header">Title:
                                <input type="text" name="Title" id="Title">
                            </div>
                            <div class="Description">
                                <label for="Description">Description:
                                    <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
                            </div>
                            
            </div>
            <div class="upload_wrappe">
                <h3>Slider 2</h3>
                            <div class="layout">
                                <label for="header">Title:
                                <input type="text" name="Title" id="Title">
                            </div>
                            <div class="Description">
                                <label for="Description">Description:
                                    <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
                            </div>
                            
            </div>
            <div class="upload_wrappe">
                <h3>Slider 3</h3>
                            <div class="layout">
                                <label for="header">Title:
                                <input type="text" name="Title" id="Title">
                            </div>
                            <div class="Description">
                                <label for="Description">Description:
                                    <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
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
        
          <div class="Update_Slider">
                    <h3>Slider 1</h3>
                    <img class="icon" src="../../resource\icon\uploadimg.png">
                    <input class="slide_img"type="file" id="file">
                    <p>Image size must be less than <span>2MB</span></p>
                    
          </div>

    </div>
</div>

<div class="Container">
    <div class="slider_img">
        
          <div class="Update_Slider">
          <h3>Slider 2</h3>
                    <img class="icon" src="../../resource\icon\uploadimg.png">
                    <input class="slide_img"type="file" id="file">
                    <p>Image size must be less than <span>2MB</span></p>
                    
          </div>

    </div>
</div>

<div class="Container">
    <div class="slider_img">
        
          <div class="Update_Slider">
          <h3>Slider 3</h3>
                    <img class="icon" src="../../resource\icon\uploadimg.png">
                    <input class="slide_img"type="file" id="file">
                    <p>Image size must be less than <span>2MB</span></p>
                    
          </div>

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
</body>

</html>