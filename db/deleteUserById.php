<?php
require_once './dbconnection/dbConnection.php';

$request_body = file_get_contents("php://input");
$data = json_decode($request_body, true);

if (isset($data['id'])) {
    $id = $data['id'];

} else {
    echo json_encode(array('success' => false, 'message' => 'ID not provided'));
}



$sql = $conn->prepare("DELETE FROM adduserinfo WHERE id = ?");
$sql->bind_param("i", $id);
if ($sql->execute()) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false, 'message' => $sql->error));
}


require_once './dbconnection/dbConnectionClose.php';
?>