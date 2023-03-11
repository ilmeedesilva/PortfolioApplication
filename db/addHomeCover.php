<?php
require_once './dbconnection/dbConnection.php';

$checkHomeCoverTableExist = "SHOW TABLES LIKE 'homeCover'";
$result = mysqli_query($conn, $checkHomeCoverTableExist);
if (mysqli_num_rows($result) == 0) {
    $createHomeCoverTableSql = "
    CREATE TABLE homeCover (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        headerText VARCHAR(100) NOT NULL,
        description VARCHAR(500) NOT NULL,
        image LONGTEXT NOT NULL
    )";
    mysqli_query($conn, $createHomeCoverTableSql);
}

$headerText = $_POST['headerText'];
$description = $_POST['description'];
$image = $_FILES['image']['tmp_name'];
$imageName = $_FILES['image']['name'];

$imageData = file_get_contents($image);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO homeCover (headerText, description, image) VALUES ('$headerText', '$description', '$imageEncoded')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

require_once './dbconnection/dbConnectionClose.php';

?>


<!-- CREATE TABLE homeCover (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        headerText VARCHAR(100) NOT NULL,
        description VARCHAR(500) NOT NULL,
        image LONGTEXT NOT NULL
    )"; -->