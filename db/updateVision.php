<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$checkVisionTableExist = "SHOW TABLES LIKE 'vision'";
$result = mysqli_query($conn, $checkVisionTableExist);
if (mysqli_num_rows($result) == 0) {
    $createVisionTableSql = "
        CREATE TABLE vision (
            id INT AUTO_INCREMENT PRIMARY KEY,
            image LONGTEXT,
            description VARCHAR(200) not null
        )
    ";
    mysqli_query($conn, $createVisionTableSql);
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

<!-- CREATE TABLE vision ( id INT AUTO_INCREMENT PRIMARY KEY, image LONGTEXT,description varchar(200) not null );-->
<!-- CREATE TABLE oldVisionData ( id INT AUTO_INCREMENT PRIMARY KEY, image LONGTEXT,description varchar(200) not null );-->