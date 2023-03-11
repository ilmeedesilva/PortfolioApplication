<?php
require_once './dbconnection/dbConnection.php';

$checkHomeCoverTableExist = "SHOW TABLES LIKE 'homeCover'";
$result = mysqli_query($conn, $checkHomeCoverTableExist);
if (mysqli_num_rows($result) == 0) {
    $createHomeCoverTableSql = "
    CREATE TABLE homeCover (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        headerText VARCHAR(100) NOT NULL,
        description VARCHAR(500) NOT NULL,
        image LONGTEXT NOT NULL
    )";
    mysqli_query($conn, $createHomeCoverTableSql);
}

$sql = "SELECT * FROM homeCover order by id desc limit 1";
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