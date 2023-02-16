<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$checkUpdateProjectTableExist = "SHOW TABLES LIKE 'Updateproject'";
$result = mysqli_query($conn, $checkUpdateProjectTableExist);
if (mysqli_num_rows($result) == 0) {
    $createUpdateProjectTableSql = "
    CREATE TABLE Updateproject 
    ( id INT AUTO_INCREMENT PRIMARY KEY,
     image LONGTEXT,
     description varchar(200) not null 
    )";
    mysqli_query($conn, $createUpdateProjectTableSql);
}


$imageName = $_FILES['image']['name'];
$descProject = $_POST["descProject"];

$imageData = file_get_contents($_FILES['image']['tmp_name']);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO Updateproject (image,description) VALUES ('$imageEncoded','$descProject')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>

<!-- CREATE TABLE Updateproject ( id INT AUTO_INCREMENT PRIMARY KEY, image LONGTEXT,description varchar(200) not null ); -->