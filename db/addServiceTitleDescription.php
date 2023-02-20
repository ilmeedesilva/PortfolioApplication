<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$checkServicesTableExist = "SHOW TABLES LIKE 'services'";
$result = mysqli_query($conn, $checkServicesTableExist);
if (mysqli_num_rows($result) == 0) {
    $createServicesTableSql = "
    CREATE TABLE services 
    ( id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(100) NOT NULL,
    created_date DATE DEFAULT CURRENT_TIMESTAMP )";
    mysqli_query($conn, $createServicesTableSql);
}

$title = $_POST["title"];
$description = $_POST["servicesdesc"];

$sql = "INSERT INTO services (title, description)
VALUES ('$title', '$description')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>

<!-- Add Service title & description query

CREATE TABLE services 
    ( id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(100) NOT NULL,
    created_date DATE DEFAULT CURRENT_TIMESTAMP )"

-->