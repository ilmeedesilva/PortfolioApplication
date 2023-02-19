<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}




$imageName = $_FILES['image']['name'];
$descVision = $_POST["descVision"];

$imageData = file_get_contents($_FILES['image']['tmp_name']);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO vision (image,description) VALUES ('$imageEncoded','$descVision')";




if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}



mysqli_close($conn);

?>

<!-- CREATE TABLE vision ( id INT AUTO_INCREMENT PRIMARY KEY, image LONGTEXT,description varchar(500) not null );-->