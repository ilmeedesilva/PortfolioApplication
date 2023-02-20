<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['project_id'])) {
    $projectId = $_POST['project_id'];
    $socialMediaName = $_POST['socialMediaName'];
    $socialMediaLink = $_POST['socialMediaLink'];

    $sql = "UPDATE socialmedia SET socialMediaLinkName='$socialMediaName', socialMediaLink='$socialMediaLink' WHERE id=$projectId";

    if (isset($_FILES['image'])) {
        $file = $_FILES['image'];
        $fileName = $file['name'];
        $fileTmpName = $file['tmp_name'];
        $fileError = $file['error'];

        if ($fileError === 0) {
            $imageData = base64_encode(file_get_contents($fileTmpName));
            $sql = "UPDATE socialmedia SET socialMediaLinkName='$socialMediaName', socialMediaLink='$socialMediaLink', image='$imageData' WHERE id=$projectId";
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

$conn->close();
?>