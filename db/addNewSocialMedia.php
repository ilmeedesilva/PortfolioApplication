<?php
require_once './dbconnection/dbConnection.php';

$checkSocialMediaTableExist = "SHOW TABLES LIKE 'socialMedia'";
$result = mysqli_query($conn, $checkSocialMediaTableExist);
if (mysqli_num_rows($result) == 0) {
    $createProjectsTableSql = "
    CREATE TABLE socialMedia (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        socialMediaLinkName  VARCHAR(50) NOT NULL,
        socialMediaLink VARCHAR(50) NOT NULL,
        image LONGTEXT NOT NULL
    )";
    mysqli_query($conn, $createProjectsTableSql);
}

$socialMediaLink = $_POST['newSocialMediaLink'];
$socialMediaLinkName = $_POST['newSocialMediaLinkName'];
$image = $_FILES['image']['tmp_name'];
$imageName = $_FILES['image']['name'];

$imageData = file_get_contents($image);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO socialmedia (socialMediaLinkName, socialMediaLink, image	
) VALUES ('$socialMediaLinkName','$socialMediaLink',  '$imageEncoded')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

require_once './dbconnection/dbConnectionClose.php';

?>


<!-- CREATE TABLE socialMedia (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    socialMediaLinkName  VARCHAR(50) NOT NULL,
    socialMediaLink VARCHAR(50) NOT NULL,
    image LONGTEXT NOT NULL
); -->