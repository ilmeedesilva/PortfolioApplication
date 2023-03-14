<?php
require_once './dbconnection/dbConnection.php';


$uid = $_POST["edit_id"];
$name = $_POST["edit_name"];
$email = $_POST["edit_email"];
$contactno = $_POST["edit_contactNo"];
$username = $_POST["edit_user_name"];


$sql = $conn->prepare("UPDATE adduserinfo SET uname=?, email=?, contactno=?, username=? WHERE id=?");


$sql->bind_param("ssssi", $name, $email, $contactno, $username, $uid);


if ($sql->execute()) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false, 'message' => $sql->error));
}


require_once './dbconnection/dbConnectionClose.php';
?>