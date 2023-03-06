<?php
require_once './dbconnection/dbConnection.php';

$checkUpdateProjectTableExist = "SHOW TABLES LIKE 'Updateproject'";
$result = mysqli_query($conn, $checkUpdateProjectTableExist);
if (mysqli_num_rows($result) == 0) {
    $createUpdateProjectTableSql = "
    CREATE TABLE Updateproject 
    ( id INT AUTO_INCREMENT PRIMARY KEY,
     image LONGTEXT,
     description varchar(1000) not null 
    )";
    mysqli_query($conn, $createUpdateProjectTableSql);
}


$imageName = $_FILES['image']['name'];
$description = $_POST["description"];

$imageData = file_get_contents($_FILES['image']['tmp_name']);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO Updateproject (image,description) VALUES ('$imageEncoded','$description')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

require_once './dbconnection/dbConnectionClose.php';

?>

<!-- CREATE TABLE Updateproject ( id INT AUTO_INCREMENT PRIMARY KEY, image LONGTEXT,description varchar(1000) not null ); -->