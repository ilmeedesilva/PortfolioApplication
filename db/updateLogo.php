<?php
require_once './dbconnection/dbConnection.php';

$checkLogoTableExist = "SHOW TABLES LIKE 'logo'";
$result = mysqli_query($conn, $checkLogoTableExist);
if (mysqli_num_rows($result) == 0) {
    $createLogoTableSql = "
    CREATE TABLE logo ( id INT AUTO_INCREMENT PRIMARY KEY, image BLOB )";
    mysqli_query($conn, $createLogoTableSql);
}

$imageName = $_FILES['image']['name'];

$imageData = file_get_contents($_FILES['image']['tmp_name']);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO logo (image) VALUES ('$imageEncoded')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

require_once './dbconnection/dbConnectionClose.php';

?>

<!-- CREATE TABLE logo ( id INT AUTO_INCREMENT PRIMARY KEY, image BLOB ); -->