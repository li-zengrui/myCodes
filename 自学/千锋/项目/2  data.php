<?php

// echo 'hello post'

$name = $_POST['name'];
$age = $_POST['age'];
echo json_encode(array(
    'name'=>$name,
    'age'=>$age,
    'money'=>999999
))
?>