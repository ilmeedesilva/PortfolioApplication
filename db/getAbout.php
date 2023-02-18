<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$checkAboutTableExist = "SHOW TABLES LIKE 'about'";
$result = mysqli_query($conn, $checkAboutTableExist);
if (mysqli_num_rows($result) == 0) {
    $createAboutTableSql = "
    CREATE TABLE about ( id INT AUTO_INCREMENT PRIMARY KEY, 
    image LONGTEXT,
    description varchar(200) not null )
    ";
    mysqli_query($conn, $createAboutTableSql);
}

$sql = "SELECT * FROM about order by id desc limit 1";
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