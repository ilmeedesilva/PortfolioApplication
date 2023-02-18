<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$checkUpdateContactInfoTableExist = "SHOW TABLES LIKE 'updatecontactinfo'";
$result = mysqli_query($conn, $checkUpdateContactInfoTableExist);
if (mysqli_num_rows($result) == 0) {
    $createUpdateContactInfoTableSql = "
    CREATE TABLE updatecontactinfo 
    ( id INT AUTO_INCREMENT PRIMARY KEY,
    streetno VARCHAR(20) NOT NULL,
    street_name VARCHAR(30) NOT NULL,
    city VARCHAR(20) NOT NULL,
    country VARCHAR(30) NOT NULL,
    email VARCHAR(40) NOT NULL,
    phone1 VARCHAR(30) NOT NULL,
    phone2 VARCHAR(30) NOT NULL,
    opening_hr TIME,closing_hr TIME )";
    mysqli_query($conn, $createUpdateContactInfoTableSql);
}

$sql = "SELECT * FROM updatecontactinfo  order by id desc limit 1";
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