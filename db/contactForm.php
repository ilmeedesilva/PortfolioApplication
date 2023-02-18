<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$name = $_POST["name"];
$email = $_POST["email"];
$tel = $_POST["tel"];
$msg = $_POST["msg"];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$checkContactUserTableExist = "SHOW TABLES LIKE 'contactUser'";
$result = mysqli_query($conn, $checkContactUserTableExist);
if (mysqli_num_rows($result) == 0) {
    $createContactUserTableSql = "
    CREATE TABLE contactUser 
    ( id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    message TEXT NOT NULL,
    created_date DATE DEFAULT CURRENT_TIMESTAMP )";
    mysqli_query($conn, $createContactUserTableSql);
}

$sql = "INSERT INTO contactUser (name, email, phone, message)
VALUES ('$name', '$email', '$tel', '$msg')";

if ($conn->query($sql) === TRUE) {
    echo "success";
    // $to = "dilshanfernando32@gmail.com";
    // $subject = "New Contact Us Submition";
    // $message = "Name: $name\nEmail: $email\nPhone: $tel\nMessage: $msg";
    // $headers = "From: $email";
    // if (mail($to, $subject, $message, $headers)) {
    //     echo "success";
    // } else {
    //     echo "Error sending email";
    // }

} else {
    echo "Error";
}

$conn->close();
?>

<!-- contact us page query

CREAT DATABASE test;

CREATE TABLE contactUser 
( id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
phone VARCHAR(15) NOT NULL,
message TEXT NOT NULL,
created_date DATE DEFAULT CURRENT_TIMESTAMP );


-->