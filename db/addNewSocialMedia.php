<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$checkSocialMediaTableExist = "SHOW TABLES LIKE 'socialMedia'";
$result = mysqli_query($conn, $checkSocialMediaTableExist);
if (mysqli_num_rows($result) == 0) {
    $createProjectsTableSql = "
    CREATE TABLE socialMedia (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        socialMediaLink VARCHAR(50) NOT NULL,
        image LONGTEXT NOT NULL
    )";
    mysqli_query($conn, $createProjectsTableSql);
}

$socialMediaLink = $_POST['newSocialMediaLink'];
$image = $_FILES['image']['tmp_name'];
$imageName = $_FILES['image']['name'];

$imageData = file_get_contents($image);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO socialmedia (socialMediaLink, image	
) VALUES ('$socialMediaLink',  '$imageEncoded')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>


<!-- CREATE TABLE socialMedia (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    socialMediaLink VARCHAR(50) NOT NULL,
    image LONGTEXT NOT NULL
); -->