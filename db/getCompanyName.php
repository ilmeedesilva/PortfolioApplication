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

$sql = "SELECT * FROM companyName  order by id desc limit 1";
$result = mysqli_query($conn, $sql);

$data = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($data);

require_once './dbconnection/dbConnectionClose.php';
?>