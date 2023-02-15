<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$request_body = file_get_contents("php://input");
$data = json_decode($request_body, true);

if (isset($data['id'])) {
    $id = $data['id'];
    // rest of code as before
} else {
    echo json_encode(array('success' => false, 'message' => 'ID not provided'));
}




$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}



$sql = $conn->prepare("DELETE FROM projects WHERE id = ?");
$sql->bind_param("i", $id);
if ($sql->execute()) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false, 'message' => $sql->error));
}
?>