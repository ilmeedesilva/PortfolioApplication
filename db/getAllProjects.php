<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

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

$sql = "SELECT * FROM projects";
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