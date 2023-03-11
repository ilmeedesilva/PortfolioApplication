<?php
require_once './dbconnection/dbConnection.php';

$checkservicesTableExist = "SHOW TABLES LIKE 'addNewServices'";
$result = mysqli_query($conn, $checkservicesTableExist);
if (mysqli_num_rows($result) == 0) {
    $createservicesTableSql = "
    CREATE TABLE addNewServices (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        serviceName VARCHAR(50) NOT NULL,
        descr TEXT NOT NULL,image LONGTEXT NOT NULL,created_date DATE DEFAULT CURRENT_TIMESTAMP
    )";
    mysqli_query($conn, $createservicesTableSql);
}

$serviceName = $_POST['serviceName'];
$descr = $_POST['descr'];
$image = $_FILES['image']['tmp_name'];
$imageName = $_FILES['image']['name'];

$imageData = file_get_contents($image);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO addNewServices (serviceName, descr, image) VALUES ('$serviceName', '$descr', '$imageEncoded')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

require_once './dbconnection/dbConnectionClose.php';

?>


<!-- CREATE TABLE addNewService (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        serviceName VARCHAR(50) NOT NULL,
        descr TEXT NOT NULL,image LONGTEXT NOT NULL,created_date DATE DEFAULT CURRENT_TIMESTAMP
    )
); -->