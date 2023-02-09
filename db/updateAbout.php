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
$descAbout = $_POST["descAbout"];

$imageData = file_get_contents($_FILES['image']['tmp_name']);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO aboutInfo (image,description) VALUES ('$imageEncoded','$descAbout')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>

<!-- CREATE TABLE about ( id INT AUTO_INCREMENT PRIMARY KEY, image BLOB,description varchar(200) not null ); -->