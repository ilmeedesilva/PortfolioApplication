<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$checkCallToActionTableExist = "SHOW TABLES LIKE 'callToAction'";
$result = mysqli_query($conn, $checkCallToActionTableExist);
if (mysqli_num_rows($result) == 0) {
    $createCallToActionTableSql = "
    CREATE TABLE callToAction (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        mainTitle VARCHAR(300) NOT NULL,
        subTitle VARCHAR(300) NOT NULL,
        image LONGTEXT NOT NULL
    )";
    mysqli_query($conn, $createCallToActionTableSql);
}

$sql = "SELECT * FROM callToAction order by id desc limit 1";
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