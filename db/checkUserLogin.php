<?php
session_start();

require_once './dbconnection/dbConnection.php';


$username = $conn->real_escape_string($_POST['username']);
$password = $conn->real_escape_string($_POST['password']);


$stmt = $conn->prepare("SELECT * FROM adduserinfo WHERE username = ? AND upassword = ?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $_SESSION['logged_userName'] = $username;
    if (isset($_SESSION['logged_userName'])) {
        // print_r($_SESSION);
        // echo "username - " . $_SESSION['logged_userName'];
        header('Location: /src/admin/main.php');
        exit();
    } else {
        $_SESSION['error_message'] = "Invalid username or password";
        header('Location: /src/admin/login.php');
        exit();
    }
} else {
    $_SESSION['error_message'] = "Invalid username or password";
    header('Location: /src/admin/login.php');
}

require_once './dbconnection/dbConnectionClose.php';
?>