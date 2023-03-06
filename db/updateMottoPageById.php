<?php
require_once './dbconnection/dbConnection.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Get the values from the form data
    $description = $_POST['description'];
    $id = $_POST['id'];


    // Check if an image was uploaded
    if (!empty($_FILES['image']['tmp_name'])) {


        $image = $_FILES['image'];

        $imageData = file_get_contents($image['tmp_name']);
        $imageEncoded = base64_encode($imageData);


        // Update motto with both description and image
        $stmt = $conn->prepare("UPDATE motto SET description = ?, image = ? WHERE id = ?");
        $stmt->bind_param("sbi", $description, $imageEncoded, $id);
        if ($stmt->execute()) {
            echo "Motto updated successfully";
        } else {
            echo "Error updating Motto: " . $conn->error;
        }

    } else {

        // Update the motto with description only
        $stmt = $conn->prepare("UPDATE motto SET description = ? WHERE id = ?");
        $stmt->bind_param("si", $description, $id);
        if ($stmt->execute()) {
            echo "Motto updated successfully";
        } else {
            echo "Error updating motto: " . $conn->error;
        }

    }

    require_once './dbconnection/dbConnectionClose.php';

} else {
    echo "Invalid request method";
}

?>