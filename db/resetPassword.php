<?php
require_once './dbconnection/dbConnection.php';


$data = json_decode(file_get_contents("php://input"));


$userID = mysqli_real_escape_string($conn, $data->userID);
$newPassword = mysqli_real_escape_string($conn, $data->newPassword);


$hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);


$sql = "UPDATE adduserinfo SET upassword='$hashedPassword' WHERE id='$userID'";

if ($conn->query($sql) === TRUE) {
    echo json_encode(array("success" => true));
} else {
    echo json_encode(array("success" => false, "error" => $conn->error));
}

require_once './dbconnection/dbConnectionClose.php';
?>