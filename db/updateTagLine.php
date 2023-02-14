<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$checkTagLineTableExist = "SHOW TABLES LIKE 'tagLine'";
$result = mysqli_query($conn, $checkTagLineTableExist);
if (mysqli_num_rows($result) == 0) {
    $createTagLineTableSql = "
        CREATE TABLE tagLine (
            id INT AUTO_INCREMENT PRIMARY KEY,
            image LONGTEXT,
            description VARCHAR(200) not null
        )
    ";
    mysqli_query($conn, $createTagLineTableSql);
}



$imageName = $_FILES['image']['name'];
$descTagLine = $_POST["descTagLine"];

$imageData = file_get_contents($_FILES['image']['tmp_name']);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO tagLine (image,description) VALUES ('$imageEncoded','$descTagLine')";




if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}



mysqli_close($conn);

?>