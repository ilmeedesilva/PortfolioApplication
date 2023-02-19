<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$checkUpdateProjectTableExist = "SHOW TABLES LIKE 'Updateproject'";
$result = mysqli_query($conn, $checkUpdateProjectTableExist);
if (mysqli_num_rows($result) == 0) {
    $createUpdateProjectTableSql = "
    CREATE TABLE Updateproject 
    ( id INT AUTO_INCREMENT PRIMARY KEY,
     image LONGTEXT,
     description varchar(1000) not null 
    )";
    mysqli_query($conn, $createUpdateProjectTableSql);
}

$sql = "SELECT * FROM Updateproject order by id desc limit 1";
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