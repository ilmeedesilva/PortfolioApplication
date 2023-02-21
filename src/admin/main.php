<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    <link rel="stylesheet" href="../../css/admin/admin.css">
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="stylesheet" href="../../css/form.css">
</head>

<body>
    <div class="logo_out_conf hide">
        <div class="gray_cover"></div>
        <div class="logo_out_conf_box">
            <p>Are your sure you want to logout?</p>
            <div class="logo_out_conf_box_btns">
                <button class="btnYes">Yes</button>
                <button class="btnNo">No</button>
            </div>
        </div>
    </div>

    <div class="admin_panel_wrapper">
        <div class="admin_nav">
            <div class="nav_header">
                <h4>Admin</h4>
            </div>
            <ul>
                <a href="main.php?page=home" <?php echo isset($_GET['page']) && $_GET['page'] == 'home' ? 'class="admin_link_active"' : '' ?>>
                    <li> <img src="../../resource/icon/home.png" alt="home icon"> Home</li>
                </a>
                <a href="main.php?page=project" <?php echo isset($_GET['page']) && $_GET['page'] == 'project' ? 'class="admin_link_active"' : '' ?>>
                    <li> <img src="../../resource/icon/projects.png" alt="project icon"> Projects</li>
                </a>
                <a href="main.php?page=about" <?php echo isset($_GET['page']) && $_GET['page'] == 'about' ? 'class="admin_link_active"' : '' ?>>
                    <li> <img src="../../resource/icon/about.png" alt="project icon"> About</li>
                </a>
                <a href="main.php?page=mail" <?php echo isset($_GET['page']) && $_GET['page'] == 'mail' ? 'class="admin_link_active"' : '' ?>>
                    <li> <img src="../../resource/icon/email.png" alt="project icon"> Mail</li>
                </a>
                <a href="main.php?page=user" <?php echo isset($_GET['page']) && $_GET['page'] == 'user' ? 'class="admin_link_active"' : '' ?>>
                    <li> <img src="../../resource/icon/user.png" alt="project icon"> User</li>
                </a>
            </ul>
            <div class="log_out logout_wrapper">
                <ul>

                    <li> <img src="../../resource/icon/logout.png" alt="project icon" class="logout_btn">Logout</li>

                </ul>
            </div>
        </div>

        <div class="admin_main_content">


            <?php
            if (isset($_GET['page'])) {
                $page = $_GET['page'];
                switch ($page) {
                    case 'home':
                        include 'adminHome.php';
                        break;
                    case 'project':
                        include 'adminProject.php';
                        break;
                    case 'about':
                        include 'adminAbout.php';
                        break;
                    // case 'extra':
                    //     include 'extra.php';
                    //     break;
                    case 'user':
                        include 'adminUser.php';
                        break;
                    case 'mail':
                        include 'adminMail.php';
                        break;
                    // case 'logout':
                    //     include '../pages/home.php';
                    //     break;
                    default:
                        include 'adminHome.php';
                        break;
                }
            } else {
                include 'adminHome.php';
            }
            ?>
        </div>
    </div>


    <script src="../../script/logout.js"></script>
</body>

</html>