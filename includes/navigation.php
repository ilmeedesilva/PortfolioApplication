<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>navigation</title>

</head>

<body>
    <div class="top_navigation">
        <div class="top_nav_left">
            <a href="../../index.php">
                <svg width="95" height="60">
                    <defs>
                        <linearGradient id="shine" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stop-color="#f0f0f0" stop-opacity="0.1">
                                <animate attributeName="stop-opacity" values="0.1; 0.9; 0.1" dur="2s"
                                    repeatCount="indefinite" />
                            </stop>
                            <stop offset="100%" stop-color="#dddddd" stop-opacity="0.1" />
                        </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="95" height="60" rx="10" fill="url(#shine)" />
                </svg>
            </a>
        </div>
        <div class="top_nav_right">
            <div class="toggle_menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li><a href="../../index.php">Home</a></li>
                <li><a href="../../src/pages/project.php">Project</a></li>
                <li><a href="../../src/pages/about.php">About</a></li>
                <li><a href="../../src/admin/login.php">Extra</a></li>
                <li><a href="../../src/pages/contact.php">Contact</a></li>
            </ul>
        </div>
    </div>

    <!-- <script src="../script/navigation.js"> -->
    </script>

</body>

</html>