<?php
session_start();

require_once './dbconnection/dbConnection.php';

$username = $conn->real_escape_string($_POST['username']);
$password = $conn->real_escape_string($_POST['password']);

$stmt = $conn->prepare("SELECT upassword FROM addUserInfo WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $hashed_password = $row['upassword'];

    if (password_verify($password, $hashed_password)) {
        $_SESSION['logged_userName'] = $username;
        if (isset($_SESSION['logged_userName'])) {
            header('Location: /src/admin/main.php');
            exit();
        }
    }
}

$_SESSION['error_message'] = "Invalid username or password";
header('Location: /src/admin/login.php');
exit();

?>