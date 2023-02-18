<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
$conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

$checkProjectsTableExist = "SHOW TABLES LIKE 'projects'";
$result = mysqli_query($conn, $checkProjectsTableExist);
if (mysqli_num_rows($result) == 0) {
    $createProjectsTableSql = "
    CREATE TABLE projects (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        projectName VARCHAR(30) NOT NULL,
        date DATE NOT NULL,
        descr TEXT NOT NULL,
        image LONGTEXT NOT NULL
    )";
    mysqli_query($conn, $createProjectsTableSql);
}

$query = "SELECT * FROM projects";
$result = mysqli_query($conn, $query);

$projects = array();
while ($row = mysqli_fetch_assoc($result)) {
    $projects[] = $row;
}

header('Content-Type: application/json');
echo json_encode($projects);
?>