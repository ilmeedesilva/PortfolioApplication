<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
$conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

$query = "SELECT * FROM adduserinfo";
$result = mysqli_query($conn, $query);

$users = array();
while ($row = mysqli_fetch_assoc($result)) {
    $users[] = $row;
}

header('Content-Type: application/json');
echo json_encode($users);
?>