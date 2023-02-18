<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

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
    upassword VARCHAR(20) NOT NULL,
    created_date DATE DEFAULT CURRENT_TIMESTAMP )";
    mysqli_query($conn, $createAddUserInfoTableSql);
}

$name = $_POST["name"];
$email = $_POST["email"];
$contactno = $_POST["contactNo"];
$username = $_POST["user_name"];
$pwd = $_POST["password"];

$sql = "INSERT INTO adduserinfo (uname, email, contactno, username, upassword)
VALUES ('$name', '$email', '$contactno', '$username', '$pwd')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

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