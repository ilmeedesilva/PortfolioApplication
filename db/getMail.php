<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$checkContactUserTableExist = "SHOW TABLES LIKE 'contactUser'";
$result = mysqli_query($conn, $checkContactUserTableExist);
if (mysqli_num_rows($result) == 0) {
    $createContactUserTableSql = "
    CREATE TABLE contactUser 
    ( id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    message TEXT NOT NULL,
    created_date DATE DEFAULT CURRENT_TIMESTAMP )";
    mysqli_query($conn, $createContactUserTableSql);
}

$sql = "SELECT name, email, phone, message FROM contactUser";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $mailData[] = $row;
    }
} else {
    echo "0 results";
}

$conn->close();

echo json_encode($mailData);
?>