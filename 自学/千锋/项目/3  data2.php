<?php
// echo 'hello get'
$id = $_POST['id'];
$title = $_POST['title'];
echo json_encode(array(
    'id'=>$id,
    'title'=>$title,
    'age'=>19
))
?>