<?php
require_once './dbconnection/dbConnection.php';

// Get the count of projects from the query string
$count = isset($_GET['count']) ? $_GET['count'] : 10;

$sql = "SELECT * FROM projects LIMIT $count";
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