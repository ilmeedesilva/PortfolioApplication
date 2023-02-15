<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
$conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

$query = "SELECT * FROM projects";
$result = mysqli_query($conn, $query);

$projects = array();
while ($row = mysqli_fetch_assoc($result)) {
    $projects[] = $row;
}

header('Content-Type: application/json');
echo json_encode($projects);
?>