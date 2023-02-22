<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$checkCallToActionTableExist = "SHOW TABLES LIKE 'callToAction'";
$result = mysqli_query($conn, $checkCallToActionTableExist);
if (mysqli_num_rows($result) == 0) {
    $createCallToActionTableSql = "
    CREATE TABLE callToAction (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        mainTitle VARCHAR(300) NOT NULL,
        subTitle VARCHAR(300) NOT NULL,
        image LONGTEXT NOT NULL
    )";
    mysqli_query($conn, $createCallToActionTableSql);
}

$mainTitle = $_POST['mainTitle'];
$subTitle = $_POST['subTitle'];
$image = $_FILES['image']['tmp_name'];
$imageName = $_FILES['image']['name'];

$imageData = file_get_contents($image);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO callToAction (mainTitle, subTitle, image) VALUES ('$mainTitle', '$subTitle', '$imageEncoded')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>


<!-- CREATE TABLE callToAction (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        mainTitle VARCHAR(300) NOT NULL,
        subTitle VARCHAR(300) NOT NULL,
        image LONGTEXT NOT NULL
    )"; -->