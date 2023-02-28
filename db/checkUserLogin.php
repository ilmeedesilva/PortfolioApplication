<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


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

$conn->close();
?>