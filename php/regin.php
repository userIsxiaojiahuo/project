<?php
header("content-type:text/html;charset=utf-8");
$phone = $_POST["phone"];
$passWord = $_POST["passWord"];
$affirmPwd = $_POST["affirmPwd"];
$regiCode = $_POST["regiCode"];
$con = mysql_connect("localhost:3306", "root", "root");
if (!$con) {
    die("con" . mysql_error());
} else {
    mysql_select_db("regist",$con);
    $result = "insert into list(phone,passWord,affirmPwd,regisCode)
                values('$phone','$passWord','$affirmPwd','$regiCode');";
    $a = mysql_query($result,$con);
    if ($a == 1) {
        echo "1";
    }else{
        echo "0";
    }
}
mysql_close($con);