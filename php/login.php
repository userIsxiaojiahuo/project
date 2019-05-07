<?php
header("content-type:text/html;charset=utf-8");
$username = $_POST["username"];
$pwd = $_POST["pwd"];
$con = mysql_connect("localhost", "root", "root");
if (!$con) {
    echo "网络不给力哈";
} else {
    mysql_select_db("regist", $con);
    $result = mysql_query("select * from list where phone = '$username' and passWord = '$pwd'", $con);
    $rows = mysql_num_rows($result);
    if ($rows == 1) {
        echo "1";
    } else {
        echo "0";
    }
}
mysql_close($con);