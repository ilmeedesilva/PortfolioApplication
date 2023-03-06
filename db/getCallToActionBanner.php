<?php
require_once './dbconnection/dbConnection.php';

$checkCallToActionTableExist = "SHOW TABLES LIKE 'callToAction'";
$result = mysqli_query($conn, $checkCallToActionTableExist);
if (mysqli_num_rows($result) == 0) {
    $createCallToActionTableSql = "
    CREATE TABLE callToAction (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        mainTitle VARCHAR(300) NOT NULL,
        subTitle VARCHAR(300) NOT NULL,
        image LONGTEXT NOT NULL
    )";
    mysqli_query($conn, $createCallToActionTableSql);
}

$sql = "SELECT * FROM callToAction order by id desc limit 1";
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