<?php
require_once './dbconnection/dbConnection.php';

if (isset($_POST['id'])) {

    $serviceId = $_POST['id'];
    $service = $_POST['addservice'];
    $serviceDesc = $_POST['serviceDesc'];

    $sql = "UPDATE addNewServices SET serviceName='$service', descr='$serviceDesc' WHERE id= $serviceId";

    if (isset($_FILES['image'])) {
        $file = $_FILES['image'];
        $fileName = $file['name'];
        $fileTmpName = $file['tmp_name'];
        $fileError = $file['error'];

        if ($fileError === 0) {
            $imageData = base64_encode(file_get_contents($fileTmpName));
            $sql = "UPDATE projects SET serviceName='$service', descr='$serviceDesc', image='$imageData' WHERE id=$serviceId";
        }
    }

    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "No service ID provided";
}


require_once './dbconnection/dbConnectionClose.php';

?>