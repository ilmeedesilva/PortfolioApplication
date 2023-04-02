<?php
require_once './dbconnection/dbConnection.php';

$checkAddUserInfoTableExist = "SHOW TABLES LIKE 'addUserInfo'";
$result = mysqli_query($conn, $checkAddUserInfoTableExist);
if (mysqli_num_rows($result) == 0) {
    $createAddUserInfoTableSql = "
    CREATE TABLE addUserInfo 
    ( id INT AUTO_INCREMENT PRIMARY KEY,
    uname VARCHAR(20) NOT NULL,
    email VARCHAR(40) NOT NULL,
    contactno VARCHAR(10) NOT NULL,
    username VARCHAR(15) NOT NULL,
    upassword VARCHAR(255) NOT NULL,
    created_date DATE DEFAULT CURRENT_TIMESTAMP )";
    mysqli_query($conn, $createAddUserInfoTableSql);
}

$name = $_POST["name"];
$email = $_POST["email"];
$contactno = $_POST["contactNo"];
$username = $_POST["user_name"];
$pwd = $_POST["password"];
$hashed_pwd = password_hash($pwd, PASSWORD_DEFAULT);

$sql = "INSERT INTO addUserInfo (uname, email, contactno, username, upassword)
VALUES ('$name', '$email', '$contactno', '$username', '$hashed_pwd')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

require_once './dbconnection/dbConnectionClose.php';
?>

<!-- Add user info admin page query

CREATE TABLE addUserInfo 
( id INT AUTO_INCREMENT PRIMARY KEY,
uname VARCHAR(20) NOT NULL,
email VARCHAR(40) NOT NULL,
contactno VARCHAR(10) NOT NULL,
username VARCHAR(15) NOT NULL,
upassword VARCHAR(20) NOT NULL,
created_date DATE DEFAULT CURRENT_TIMESTAMP );

-->