<?php
/**
 * User: lynngrace
 * Date: 2022-07-18
 */
include 'connection.php';
$id = $_GET['name'];
$q = mysqli_query(mysqli_connect("localhost", "root", "", "ttms"),
    "DELETE FROM subjects WHERE subject_code = '$id' ");
if ($q) {

    header("Location:addsubjects.php");

} else {
    echo 'Error';
}
?>