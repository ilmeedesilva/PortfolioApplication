<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM projects";//query eke
$result = mysqli_query($conn, $sql);//request eke yawala ene data tika result eketa save kara gannawa 

$data = array();// dan table eke data rows wage ne tiyene apita row ekak wena wena data tiyenwa ne example - {name:"", email:"", phone:""} oya wage . apita ithin mawa collection ekak wage epai eke object eka aran hariyane naha
// a nisa man data kiyala empty array ekak haduwa.******mathaka tiya ganan javascript wala array size eke limited nah. hariyata linkedlist wage wada karanne.
if (mysqli_num_rows($result) > 0) {//mysqli_num_rows me function eke mysqli wali enne eken apita query eka yawala tiyana rows count eke ganna puluwan. man methana check karala tiyanwa rows > 0 wadi da kiyal
    while ($row = mysqli_fetch_assoc($result)) {//methanadi tawa mysqli fuction ekak use kara  mysqli_fetch_assoc meke di row ekak athule tiyana columns gana balanwa query eke pass karama
        $data[] = $row;// ita passe array eketa ara row eke gana set karanwa while loop eke yanakam, api java wala kara wage
    }
}

header('Content-Type: application/json');// mewa danata ternne naha
echo json_encode($data);// meke tama api js eketa ganne
//me tama data gatha widiya


mysqli_close($conn);
?>