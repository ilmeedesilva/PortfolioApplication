<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Footer</title>
    <link rel="stylesheet" href="../../css/footer.css">
    <link rel="stylesheet" href="../../css/style.css">
</head>

<body>

    <div class="footer_wrapper">
        <div class="footer_content">

            <div class="footer_content_left">
                <div class="footer_content_logo_img">
                    <!-- <img src="../../resource/icon/comp_logo.jpg" alt="company logo"> -->
                    <svg width="150" height="100">
                        <defs>
                            <linearGradient id="shine" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stop-color="#111214" stop-opacity="1">
                                    <animate attributeName="stop-opacity" values="1; 1; 1" dur="2s"
                                        repeatCount="indefinite" />
                                </stop>
                                <stop offset="100%" stop-color="#222326" stop-opacity="1" />
                            </linearGradient>
                        </defs>
                        <rect x="0" y="0" width="150" height="100" rx="10" fill="#202226" />
                    </svg>
                </div>
                <div class="footer_content_social_icons">
                    <a href="#"><img src="../../resource/icon/facebook.png" alt="facebook"> </a>
                    <a href="#"><img src="../../resource/icon/twitter.png" alt="twitter"></a>
                    <a href="#"><img src="../../resource/icon/linkedin.png" alt="linkedin"></a>
                </div>
            </div>

            <div class="footer_content_center">
                <div class="wrapper_nav">
                    <ul>
                        <li><a href="home.php">Home</a></li>
                        <li><a href="project.php">Projects</a></li>
                        <li><a href="about.php">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div class="wrapper_about">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim provident quidem molestias? Velit,
                        neque placeat, optio, ipsum libero numquam tempora repellendus voluptate aliquam necessitatibus
                        obcaecati? Cupiditate natus consectetur odit repellat.</p>
                </div>

            </div>

            <div class="footer_content_right">
                <div class="footer_content_contact_info">
                    <h6>Contact Us</h6>
                    <div class="contact_info_address">
                        <p class="street_no">NO 01</p>
                        <p class="city">Nugegoda</p>
                        <p class="country">Sri Lanka</p>
                    </div>
                    <div class="contact_info_phone">
                        <p class="no1">0775556667</p>
                        <p class="no2">0776667778</p>
                    </div>

                    <div class="contact_info_email">
                        <p class="email">emailaddress@gmail.com</p>

                    </div>
                </div>
            </div>


        </div>
        <div class="footer_bottom_section">
            <div class="status">
                <p>all rights reserved @2023</p>
            </div>
        </div>
    </div>

</body>

</html>