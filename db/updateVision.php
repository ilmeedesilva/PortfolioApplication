<?php
require_once './dbconnection/dbConnection.php';




$imageName = $_FILES['image']['name'];
$descVision = $_POST["description"];

$imageData = file_get_contents($_FILES['image']['tmp_name']);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO vision (image,description) VALUES ('$imageEncoded','$descVision')";




if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}



require_once './dbconnection/dbConnectionClose.php';

?>

<!-- CREATE TABLE vision ( id INT AUTO_INCREMENT PRIMARY KEY, image LONGTEXT,description varchar(500) not null );-->