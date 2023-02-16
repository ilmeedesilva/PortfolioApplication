<?php

// Connect to the database
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

// Get the id from the request
$id = $_POST['id'];

// Prepare and execute the SQL statement
$sql = "SELECT * FROM projects WHERE id=?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "i", $id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

// Fetch the result and return it as a JSON object
$rows = array();
while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
}

echo json_encode($rows);

mysqli_close($conn);