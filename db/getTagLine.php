<?php
require_once './dbconnection/dbConnection.php';


$checkTagLineTableExist = "SHOW TABLES LIKE 'tagLine'";
$result = mysqli_query($conn, $checkTagLineTableExist);
if (mysqli_num_rows($result) == 0) {
    $createTagLineTableSql = "
        CREATE TABLE tagLine (
            id INT AUTO_INCREMENT PRIMARY KEY,
            image LONGTEXT,
            description VARCHAR(500) not null
        )
    ";
    mysqli_query($conn, $createTagLineTableSql);
}



$sql = "SELECT * FROM tagLine order by id desc limit 1";
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