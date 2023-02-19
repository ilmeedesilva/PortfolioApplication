<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$checkLogoTableExist = "SHOW TABLES LIKE 'logo'";
$result = mysqli_query($conn, $checkLogoTableExist);
if (mysqli_num_rows($result) == 0) {
    $createLogoTableSql = "
    CREATE TABLE logo ( id INT AUTO_INCREMENT PRIMARY KEY, image Longtext )";
    mysqli_query($conn, $createLogoTableSql);
}

$sql = "SELECT * FROM logo order by id desc limit 1";
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