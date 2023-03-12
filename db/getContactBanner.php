<?php
require_once './dbconnection/dbConnection.php';

$checkContactBannerExist = "SHOW TABLES LIKE 'contactBanner'";
$result = mysqli_query($conn, $checkContactBannerExist);
if (mysqli_num_rows($result) == 0) {
    $createContactBannerTableSql = "
    CREATE TABLE contactBanner ( id INT AUTO_INCREMENT PRIMARY KEY, image Longtext )";
    mysqli_query($conn, $createContactBannerTableSql);
}

$sql = "SELECT * FROM contactBanner order by id desc limit 1";
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