<?php
require_once './dbconnection/dbConnection.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Get the values from the form data
    $mainTitle = $_POST['mainTitle'];
    $subTitle = $_POST['subTitle'];
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


        // Update the project with both titles and image
        $stmt = $conn->prepare("UPDATE callToAction SET mainTitle = ?, subTitle = ?, image = ? WHERE id = ?");
        $stmt->bind_param("sbi", $mainTitle, $subTitle, $imageEncoded, $id);
        if ($stmt->execute()) {
            echo "Banner updated successfully";
        } else {
            echo "Error updating Banner: " . $conn->error;
        }

    } else if (!empty($_FILES['mainTitle'])) {

        // Update the project with Main title only
        $stmt = $conn->prepare("UPDATE callToAction SET mainTitle = ?, subTitle = ?, image = ?  WHERE id = ?");
        $stmt->bind_param("si", $mainTitle, $id);
        if ($stmt->execute()) {
            echo "Main Title updated successfully";
        } else {
            echo "Error updating Main title: " . $conn->error;
        }

    } else if (!empty($_FILES['subTitle'])) {

        // Update the project with Main title only
        $stmt = $conn->prepare("UPDATE callToAction SET subTitle = ? , mainTitle = ?, image = ? WHERE id = ?");
        $stmt->bind_param("si", $subTitle, $id);
        if ($stmt->execute()) {
            echo "Sub Title updated successfully";
        } else {
            echo "Error updating Sub title: " . $conn->error;
        }

    }


    require_once './dbconnection/dbConnectionClose.php';

} else {
    echo "Invalid request method";
}

?>