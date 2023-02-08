<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$name = $_POST["name"];// me tiyene js eken ena ara values tika
$email = $_POST["email"];
$tel = $_POST["tel"];
$msg = $_POST["msg"];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO contactUser (name, email, phone, message)//quer eke methana
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