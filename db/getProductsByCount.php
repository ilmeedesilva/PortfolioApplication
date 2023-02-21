<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Get the count of projects from the query string
$count = isset($_GET['count']) ? $_GET['count'] : 10;

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

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

mysqli_close($conn);
?>