<?php

// 第一种
// echo 'hello ajax';

// 第二种
$id=$_GET['id'];
echo json_encode(array(
    'id'=>$id,
    'title'=>'hello ajax'
))

?>