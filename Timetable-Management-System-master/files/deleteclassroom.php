<?php
/**
 * User: lynngrace
 * Date: 2022-07-16
 */
include 'connection.php';
$id = $_GET['name'];
$q = mysqli_query(mysqli_connect("localhost", "root", "", "ttms"),
    "DELETE FROM classrooms WHERE name = '$id' ");
if ($q) {

    header("Location:addclassrooms.php");

} else {
    echo 'Error';
}