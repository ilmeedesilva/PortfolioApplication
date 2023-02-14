<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$checkMottoTableExist = "SHOW TABLES LIKE 'motto'";
$result = mysqli_query($conn, $checkMottoTableExist);
if (mysqli_num_rows($result) == 0) {
    $createMottoTableSql = "
        CREATE TABLE motto (
            id INT AUTO_INCREMENT PRIMARY KEY,
            image LONGTEXT,
            description VARCHAR(200) not null
        )
    ";
    mysqli_query($conn, $createMottoTableSql);
}



$imageName = $_FILES['image']['name'];
$descMotto = $_POST["descMotto"];

$imageData = file_get_contents($_FILES['image']['tmp_name']);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO motto (image,description) VALUES ('$imageEncoded','$descMotto')";




if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}



mysqli_close($conn);

?>