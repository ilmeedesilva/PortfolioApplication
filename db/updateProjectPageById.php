<?php
require_once './dbconnection/dbConnection.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $description = $_POST['description'];
    $id = $_POST['id'];

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if (!empty($_FILES['image']['tmp_name'])) {


        $image = $_FILES['image'];

        $imageData = file_get_contents($image['tmp_name']);
        $imageEncoded = base64_encode($imageData);


        $stmt = $conn->prepare("UPDATE updateproject SET description = ?, image = ? WHERE id = ?");
        $stmt->bind_param("sbi", $description, $imageEncoded, $id);
        if ($stmt->execute()) {
            echo "Project updated successfully";
        } else {
            echo "Error updating project: " . $conn->error;
        }

    } else {

        $stmt = $conn->prepare("UPDATE updateproject SET description = ? WHERE id = ?");
        $stmt->bind_param("si", $description, $id);
        if ($stmt->execute()) {
            echo "Project updated successfully";
        } else {
            echo "Error updating project: " . $conn->error;
        }

    }

    require_once './dbconnection/dbConnectionClose.php';

} else {
    echo "Invalid request method";
}

?>