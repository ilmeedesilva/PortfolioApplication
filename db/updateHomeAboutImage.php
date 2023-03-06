<?php
require_once './dbconnection/dbConnection.php';

$checkAboutImageTableExist = "SHOW TABLES LIKE 'homeAboutImg'";
$result = mysqli_query($conn, $checkAboutImageTableExist);
if (mysqli_num_rows($result) == 0) {
    $createAboutImageTableSql = "
    CREATE TABLE homeAboutImg ( id INT AUTO_INCREMENT PRIMARY KEY, image longtext )";
    mysqli_query($conn, $createAboutImageTableSql);
}

$imageName = $_FILES['image']['name'];

$imageData = file_get_contents($_FILES['image']['tmp_name']);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO homeAboutImg (image) VALUES ('$imageEncoded')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

require_once './dbconnection/dbConnectionClose.php';

?>

<!-- CREATE TABLE homeAboutImg ( id INT AUTO_INCREMENT PRIMARY KEY, image longtext ) -->