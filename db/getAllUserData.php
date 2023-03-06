<?php
require_once './dbconnection/dbConnection.php';

$query = "SELECT * FROM adduserinfo";
$result = mysqli_query($conn, $query);

$users = array();
while ($row = mysqli_fetch_assoc($result)) {
    $users[] = $row;
}

header('Content-Type: application/json');
echo json_encode($users);


require_once './dbconnection/dbConnectionClose.php';
?>