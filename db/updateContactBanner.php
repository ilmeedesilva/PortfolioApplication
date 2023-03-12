<?php
require_once './dbconnection/dbConnection.php';

$checkContactBannerExist = "SHOW TABLES LIKE 'contactBanner'";
$result = mysqli_query($conn, $checkContactBannerExist);
if (mysqli_num_rows($result) == 0) {
    $createContactBannerTableSql = "
    CREATE TABLE contactBanner ( id INT AUTO_INCREMENT PRIMARY KEY, image LONGTEXT )";
    mysqli_query($conn, $createContactBannerTableSql);
}

$imageName = $_FILES['image']['name'];

$imageData = file_get_contents($_FILES['image']['tmp_name']);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO contactBanner (image) VALUES ('$imageEncoded')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

require_once './dbconnection/dbConnectionClose.php';

?>

<!-- CREATE TABLE contactBanner ( id INT AUTO_INCREMENT PRIMARY KEY, image LONGTEXT ); -->