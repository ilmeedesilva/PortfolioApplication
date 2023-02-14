<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$checkVisionTableExist = "SHOW TABLES LIKE 'vision'";//check karanwa vision kiyala table eke tiyanwa da kiyala ape db eke 
$result = mysqli_query($conn, $checkVisionTableExist);
if (mysqli_num_rows($result) == 0) {// ehema table ekak nathan
    $createVisionTableSql = "
        CREATE TABLE vision (
            id INT AUTO_INCREMENT PRIMARY KEY,
            image LONGTEXT,
            description VARCHAR(200) not null
        )
    ";
    mysqli_query($conn, $createVisionTableSql);
}

$checkVisionTableExist2 = "SHOW TABLES LIKE 'oldVisionData'";//check karanwa vision kiyala table eke tiyanwa da kiyala ape db eke 
$result2 = mysqli_query($conn, $checkVisionTableExist2);
if (mysqli_num_rows($result2) == 0) {// ehema table ekak nathan
    $createOldVisionTableSql = "
        CREATE TABLE  oldVisionData(
            id INT AUTO_INCREMENT PRIMARY KEY, 
            image LONGTEXT,
            description varchar(200) not null
        )
    ";
    mysqli_query($conn, $createOldVisionTableSql);
}

$imageName = $_FILES['image']['name'];
$descVision = $_POST["descVision"];

$imageData = file_get_contents($_FILES['image']['tmp_name']);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO vision (image,description) VALUES ('$imageEncoded','$descVision')";


$triggerSql = "CREATE TRIGGER data_move_to_old_vision AFTER INSERT ON vision FOR EACH ROW BEGIN INSERT INTO oldVisionData (id, image, description) VALUES (NEW.id, NEW.image, NEW.description); END;";
mysqli_query($conn, $triggerSql);

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}



mysqli_close($conn);

?>

<!-- CREATE TABLE vision ( id INT AUTO_INCREMENT PRIMARY KEY, image LONGTEXT,description varchar(200) not null );-->
<!-- CREATE TABLE oldVisionData ( id INT AUTO_INCREMENT PRIMARY KEY, image LONGTEXT,description varchar(200) not null );-->