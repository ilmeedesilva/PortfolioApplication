<?php
require_once './dbconnection/dbConnection.php';

$checkProjectsTableExist = "SHOW TABLES LIKE 'projects'";
$result = mysqli_query($conn, $checkProjectsTableExist);
if (mysqli_num_rows($result) == 0) {
    $createProjectsTableSql = "
    CREATE TABLE projects (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        projectName VARCHAR(30) NOT NULL,
        date DATE NOT NULL,
        descr TEXT NOT NULL,
        image LONGTEXT NOT NULL
    )";
    mysqli_query($conn, $createProjectsTableSql);
}

$projectName = $_POST['projectName'];
$date = $_POST['date'];
$descr = $_POST['descr'];
$image = $_FILES['image']['tmp_name'];
$imageName = $_FILES['image']['name'];

$imageData = file_get_contents($image);
$imageEncoded = base64_encode($imageData);

$sql = "INSERT INTO projects (projectName, date, descr, image) VALUES ('$projectName', '$date', '$descr', '$imageEncoded')";

if (mysqli_query($conn, $sql)) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

require_once './dbconnection/dbConnectionClose.php';

?>


<!-- CREATE TABLE projects (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    projectName VARCHAR(30) NOT NULL,
    date DATE NOT NULL,
    descr TEXT NOT NULL,
    image LONGTEXT NOT NULL
); -->