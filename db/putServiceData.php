<?php
require_once './dbconnection/dbConnection.php';


$serviceId = $_POST['id'];
$serviceTitle = $_POST['title'];
$serviceDesc = $_POST['description'];

$sql = "UPDATE services SET title='$serviceTitle', description='$serviceDesc' WHERE id= $serviceId";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


require_once './dbconnection/dbConnectionClose.php';

?>