<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";


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


        // Update the project with both description and image
        $stmt = $conn->prepare("UPDATE updateproject SET description = ?, image = ? WHERE id = ?");
        $stmt->bind_param("sbi", $description, $imageEncoded, $id);
        if ($stmt->execute()) {
            echo "Project updated successfully";
        } else {
            echo "Error updating project: " . $conn->error;
        }

    } else {

        // Update the project with description only
        $stmt = $conn->prepare("UPDATE updateproject SET description = ? WHERE id = ?");
        $stmt->bind_param("si", $description, $id);
        if ($stmt->execute()) {
            echo "Project updated successfully";
        } else {
            echo "Error updating project: " . $conn->error;
        }

    }

    // Close the database connection
    $conn->close();

} else {
    echo "Invalid request method";
}