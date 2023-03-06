<?php
require_once './dbconnection/dbConnection.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Get the values from the form data
    $description = $_POST['description'];
    $id = $_POST['id'];

    // Connect to the database
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Check if an image was uploaded
    if (!empty($_FILES['image']['tmp_name'])) {


        $image = $_FILES['image'];

        $imageData = file_get_contents($image['tmp_name']);
        $imageEncoded = base64_encode($imageData);


        // Update tagline with both description and image
        $stmt = $conn->prepare("UPDATE tagline SET description = ?, image = ? WHERE id = ?");
        $stmt->bind_param("sbi", $description, $imageEncoded, $id);
        if ($stmt->execute()) {
            echo "Tagline updated successfully";
        } else {
            echo "Error updating tagline: " . $conn->error;
        }

    } else {

        // Update the tagline with description only
        $stmt = $conn->prepare("UPDATE tagline SET description = ? WHERE id = ?");
        $stmt->bind_param("si", $description, $id);
        if ($stmt->execute()) {
            echo "Tagline updated successfully";
        } else {
            echo "Error updating tagline: " . $conn->error;
        }

    }

    require_once './dbconnection/dbConnectionClose.php';

} else {
    echo "Invalid request method";
}