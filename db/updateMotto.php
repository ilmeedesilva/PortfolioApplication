<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}





$imageName = $_FILES['image']['name'];
$descMotto = $_POST["description"];

$imageData = file_get_contents($_FILES['image']['tmp_name']);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO motto (image,description) VALUES ('$imageEncoded','$descMotto')";




if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}



mysqli_close($conn);

?>