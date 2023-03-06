<?php
require_once './dbconnection/dbConnection.php';

$imageName = $_FILES['image']['name'];
$descTagLine = $_POST["description"];

$imageData = file_get_contents($_FILES['image']['tmp_name']);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO tagLine (image,description) VALUES ('$imageEncoded','$descTagLine')";




if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}



require_once './dbconnection/dbConnectionClose.php';

?>