<?php
require_once './dbconnection/dbConnection.php';

$title1 = $_POST["title1"];
$title2 = $_POST["title2"];
$title3 = $_POST["title3"];
$desc1 = $_POST["desc1"];
$desc2 = $_POST["desc2"];
$desc3 = $_POST["desc3"];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO updateSliderinfo (title1, desc1, title2, desc2 , title3, desc3)
VALUES ('$title1', '$desc1', '$title2', '$desc2', '$title3','$desc3')";

if ($conn->query($sql) === TRUE) {
    echo "success";

} else {
    echo "Error";
}

require_once './dbconnection/dbConnectionClose.php';
?>

<!-- contact update info admin page query

CREATE TABLE updateSliderinfo 
( id INT AUTO_INCREMENT PRIMARY KEY,
title1 VARCHAR(20) NOT NULL,
desc1 VARCHAR(20) NOT NULL,
title2 VARCHAR(30) NOT NULL,
desc2 VARCHAR(30) NOT NULL,
title3 VARCHAR(30) NOT NULL,
desc3 VARCHAR(30) NOT NULL,
created_date DATE DEFAULT CURRENT_TIMESTAMP );


-->