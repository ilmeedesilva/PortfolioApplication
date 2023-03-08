<?php
require_once './dbconnection/dbConnection.php';

$checkContactUserTableExist = "SHOW TABLES LIKE 'contactUser'";
$result = mysqli_query($conn, $checkContactUserTableExist);
if (mysqli_num_rows($result) == 0) {
    $createContactUserTableSql = "
    CREATE TABLE contactUser 
    ( id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    message TEXT NOT NULL,
    created_date DATE DEFAULT CURRENT_TIMESTAMP )";
    mysqli_query($conn, $createContactUserTableSql);
}

$sql = "SELECT name, email, phone, message FROM contactUser";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $mailData[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($mailData);
} else {
    echo "0 results";
}


require_once './dbconnection/dbConnectionClose.php';
?>