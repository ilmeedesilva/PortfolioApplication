<?php
require_once './dbconnection/dbConnection.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Get the values from the form data
    $headerText = $_POST['headerText'];
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


        // Update the cover with both header,des and image
        $stmt = $conn->prepare("UPDATE homeCover SET headerText = ?, description = ?, image = ? WHERE id = ?");
        $stmt->bind_param("sbi", $headerText, $description, $imageEncoded, $id);
        if ($stmt->execute()) {
            echo "Cover updated successfully";
        } else {
            echo "Error updating cover: " . $conn->error;
        }

    } else if (!empty($_FILES['headerText'])) {

        // Update the cover with header text only
        $stmt = $conn->prepare("UPDATE homeCover SET headerText = ?, description = ?, image = ?  WHERE id = ?");
        $stmt->bind_param("si", $headerText, $id);
        if ($stmt->execute()) {
            echo "Header Text updated successfully";
        } else {
            echo "Error updating Header Text: " . $conn->error;
        }

    } else if (!empty($_FILES['description'])) {

        // Update the cover with description only
        $stmt = $conn->prepare("UPDATE homeCover SET subTitle = ? , mainTitle = ?, image = ? WHERE id = ?");
        $stmt->bind_param("si", $description, $id);
        if ($stmt->execute()) {
            echo "Description updated successfully";
        } else {
            echo "Error updating Description: " . $conn->error;
        }

    }


    require_once './dbconnection/dbConnectionClose.php';

} else {
    echo "Invalid request method";
}

?>