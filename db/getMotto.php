<?php
require_once './dbconnection/dbConnection.php';


$checkMottoTableExist = "SHOW TABLES LIKE 'motto'";
$result = mysqli_query($conn, $checkMottoTableExist);
if (mysqli_num_rows($result) == 0) {
    $createMottoTableSql = "
        CREATE TABLE motto (
            id INT AUTO_INCREMENT PRIMARY KEY,
            image LONGTEXT,
            description VARCHAR(500) not null
        )
    ";
    mysqli_query($conn, $createMottoTableSql);
}



$sql = "SELECT * FROM motto order by id desc limit 1";
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