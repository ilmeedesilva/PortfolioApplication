<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    <link rel="stylesheet" href="../../css/admin/admin.css">
    <link rel="stylesheet" href="../../css/style.css">
</head>

<body>


    <div class="admin_panel_wrapper">
        <div class="admin_nav">
            <div class="nav_header">
                <h4>Admin</h4>
            </div>
            <ul>
                <a href="main.php?page=home">
                    <li> <img src="../../resource/icon/home.png" alt="home icon"> Home</li>
                </a>
                <a href="main.php?page=project">
                    <li> <img src="../../resource/icon/projects.png" alt="project icon"> Projects</li>
                </a>
                <a href="main.php?page=about">
                    <li> <img src="../../resource/icon/about.png" alt="project icon"> About</li>
                </a>
                <a href="main.php?page=user">
                    <li> <img src="../../resource/icon/user.png" alt="project icon"> User</li>
                </a>
            </ul>
            <div class="log_out">
                <ul>
                    <a href="main.php?page=project">
                        <li> <img src="../../resource/icon/logout.png" alt="project icon">Logout</li>
                    </a>
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
                    // case 'logout':
                    //     include 'logout.php';
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



</body>

</html>