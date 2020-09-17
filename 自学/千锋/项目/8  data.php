<?php
// echo 'console.log("php")'
// echo 'fn(123);'
$cb = $_GET['cb'];
// php的双引号可以直接解析变量，单引号不行
echo "$cb(123)"
?>