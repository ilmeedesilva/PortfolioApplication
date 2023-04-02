<?php
require_once './dbconnection/dbConnection.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $id = isset($_POST['id']) ? $_POST['id'] : null;

    if ($id) {
        $sql = "DELETE FROM contactuser WHERE id = $id";

        if ($conn->query($sql) === TRUE) {
            echo "Mail deleted successfully";
        } else {
            echo "Error deleting mail: " . $conn->error;
        }
    } else {
        echo "Error: mail ID is not set";
    }
}

require_once './dbconnection/dbConnectionClose.php';
?>