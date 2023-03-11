<?php
require_once './dbconnection/dbConnection.php';

$checkCompanyNameTableExist = "SHOW TABLES LIKE 'companyName'";
$result = mysqli_query($conn, $checkCompanyNameTableExist);
if (mysqli_num_rows($result) == 0) {
    $createCompanyNameTableSql = "
    CREATE TABLE companyName 
    ( id INT AUTO_INCREMENT PRIMARY KEY,
    companyName VARCHAR(50) NOT NULL,
    created_date DATE DEFAULT CURRENT_TIMESTAMP )";
    mysqli_query($conn, $createCompanyNameTableSql);
}

$companyName = $_POST["companyName"];

$sql = "INSERT INTO companyName (companyName)
VALUES ('$companyName')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

require_once './dbconnection/dbConnectionClose.php';
?>

<!-- Update Company Name admin page query

CREATE TABLE companyName 
    ( id INT AUTO_INCREMENT PRIMARY KEY,
    companyName VARCHAR(50) NOT NULL,
    created_date DATE DEFAULT CURRENT_TIMESTAMP )";

-->