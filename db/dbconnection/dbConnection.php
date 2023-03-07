<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    error_log("Connection failed: " . mysqli_connect_error());
    die("Unable to connect to database");
}
?>