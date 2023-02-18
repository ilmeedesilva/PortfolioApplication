<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$streetno = $_POST["street_no"];
$streetname = $_POST["street_name"];
$city = $_POST["city_no"];
$country = $_POST["country"];
$email = $_POST["email"];
$phone1 = $_POST["phone1"];
$phone2 = $_POST["phone2"];
$opening_hr = $_POST["opening_hr"];
$closing_hr = $_POST["closing_hr"];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$checkUpdateContactInfoTableExist = "SHOW TABLES LIKE 'updatecontactinfo'";
$result = mysqli_query($conn, $checkUpdateContactInfoTableExist);
if (mysqli_num_rows($result) == 0) {
    $createUpdateContactInfoTableSql = "
    CREATE TABLE updatecontactinfo 
    ( id INT AUTO_INCREMENT PRIMARY KEY,
    streetno VARCHAR(20) NOT NULL,
    street_name VARCHAR(30) NOT NULL,
    city VARCHAR(20) NOT NULL,
    country VARCHAR(30) NOT NULL,
    email VARCHAR(40) NOT NULL,
    phone1 VARCHAR(30) NOT NULL,
    phone2 VARCHAR(30) NOT NULL,
    opening_hr TIME,closing_hr TIME )";
    mysqli_query($conn, $createUpdateContactInfoTableSql);
}

$sql = "INSERT INTO updatecontactinfo (streetno, street_name, city, country, email, phone1, phone2, opening_hr, closing_hr)
VALUES ('$streetno', '$streetname', '$city', '$country', '$email', '$phone1', '$phone2', '$opening_hr', '$closing_hr')";

if ($conn->query($sql) === TRUE) {
    echo "success";

} else {
    echo "Error";
}

$conn->close();
?>

<!-- contact update info admin page query

CREATE TABLE updatecontactinfo 
    ( id INT AUTO_INCREMENT PRIMARY KEY,
    streetno VARCHAR(20) NOT NULL,
    street_name VARCHAR(30) NOT NULL,
    city VARCHAR(20) NOT NULL,
    country VARCHAR(30) NOT NULL,
    email VARCHAR(40) NOT NULL,
    phone1 VARCHAR(30) NOT NULL,
    phone2 VARCHAR(30) NOT NULL,
    opening_hr TIME,closing_hr TIME ,
created_date DATE DEFAULT CURRENT_TIMESTAMP );


-->