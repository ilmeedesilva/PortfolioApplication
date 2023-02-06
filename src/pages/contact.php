<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/contact.css">
    <link rel="stylesheet" type="text/css" href="../../css/navigation.css">
    <link rel="stylesheet" href="../../css/style.css">
</head>
<body>
<?php
    include "../../includes/navigation.php";
    ?>
    <div class="main_section_full_wrapper project_img_wrapper">
        <div class="page_header_title">
            <h5>CONTACT US</h5>
        </div>
        <div class="gray_wrapper">

        </div>
        <div class="page_main_img">
            <img class="img1" src="../../resource/image/contact-banner.jpeg" title="Contact us" alt="Contact us">
        </div>
    </div>
<div class="contact_wrapper">
    <div class="form_wrapper">
        <h3>Just say hi!</h3>
        <h5>Tell us more about you and we'll contact you soon :)</h5>
            <form action="">
                <div class="input_item">
                    <label for="">Name</label><br>
                    <input type="text" placeholder="Enter Name">
                    <p class="error_txt"></p>
                    </div>
                    <div class="input_item">
                        <label for="">Email</label><br>
                        <input type="text" placeholder="example@gmail.com">
                        <p class="error_txt"></p>
                    </div>
                    <div class="input_item">
                        <label for="">Contact No</label><br>
                        <input type="number" placeholder="0700000000">
                        <p class="error_txt"></p>
                    </div>
                    <div class="input_item">
                        <label for="">Message</label><br>
                        <textarea name="" id="" cols="50" rows="5" placeholder="Enter your message here"></textarea>
                        <p class="error_txt"></p>
                    </div>
                    <div class="form_control">
                        <button class="save_btn">Save</button>
                    </div>
                </form>
    </div>
        <div class="details_container">
            <div class="information">
                <h2>Contact Information</h2>
                    <div class="contact_info_address">
                        <p class="street_no">No. 01</p>
                        <P class="street_name">Udahamulla</P>
                        <p class="city">Nugegoda</p>
                        <p class="country">Sri Lanka</p><br>
                    </div>
                    <div class="contact_info_phone">
                        <p class="no1">Call us: 0775556667</p>
                    </div>
                    <div class="contact_info_email">
                        <p class="email">emailaddress@gmail.com</p>
                    </div>
                    <div class="contact_info_openingTag">
                        <p class="open_title">We're open from Monday - Friday</p>
                        <p class="open_title">9.00 am - 6.00 pm</p>
                    </div>
            </div>
        </div>
    </div>
</div>
    <?php include('../../includes/footer.php'); ?>
    <script src="../../script/navigation.js">
    </script>
</body>
</html>