<?php
require_once './dbconnection/dbConnection.php';

$checkAboutImageTableExist = "SHOW TABLES LIKE 'homeAboutImg'";
$result = mysqli_query($conn, $checkAboutImageTableExist);
if (mysqli_num_rows($result) == 0) {
    $createAboutImageTableSql = "
    CREATE TABLE homeAboutImg ( id INT AUTO_INCREMENT PRIMARY KEY, image longtext )";
    mysqli_query($conn, $createAboutImageTableSql);
}

$sql = "SELECT * FROM homeAboutImg order by id desc limit 1";
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