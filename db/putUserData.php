<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$name = $_POST["edit_name"];
$email = $_POST["edit_email"];
$contactno = $_POST["edit_contactNo"];
$username = $_POST["edit_user_name"];


$request_body = file_get_contents("php://input");
$data = json_decode($request_body, true);

if (isset($data['id'])) {
    $id = $data['id'];
    
} else {
    echo json_encode(array('success' => false, 'message' => 'ID not provided'));
}


$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}



$sql = $conn->prepare("UPDATE adduserinfo SET uname='$name', email='$email', contactno='$contactno', username='$username' WHERE id = ?");
$sql->bind_param("i", $id);
if ($sql->execute()) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false, 'message' => $sql->error));
}
?>