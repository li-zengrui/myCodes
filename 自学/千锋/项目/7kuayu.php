<?php
// 在后端设置允许跨域
// localhost
// 127.0.0.1
// header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Origin:http://127.0.0.1');
echo json_encode(array(
    'id'=>1,
    'title'=>'hahah',
))
?>