<?php
require_once './dbconnection/dbConnection.php';

if (isset($_POST['project_id'])) {
    $projectId = $_POST['project_id'];
    $projectName = $_POST['project_name'];
    $date = $_POST['date'];
    $descr = $_POST['descr'];

    $sql = "UPDATE projects SET projectName='$projectName', date='$date', descr='$descr' WHERE id=$projectId";

    if (isset($_FILES['image'])) {
        $file = $_FILES['image'];
        $fileName = $file['name'];
        $fileTmpName = $file['tmp_name'];
        $fileError = $file['error'];

        if ($fileError === 0) {
            $imageData = base64_encode(file_get_contents($fileTmpName));
            $sql = "UPDATE projects SET projectName='$projectName', date='$date', descr='$descr', image='$imageData' WHERE id=$projectId";
        }
    }

    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "No project ID provided";
}

require_once './dbconnection/dbConnectionClose.php';
?>