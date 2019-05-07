<?php
header("content-type:text/html;charset=utf-8");
$phone = $_POST["phone"];
$con = mysql_connect("localhost:3306","root","root");
if(!$con){
    die("con".mysql_error());
}else{
    mysql_select_db("regist",$con);
    $result = mysql_query("select *  from list where  phone = '$phone'",$con);

    $rows = mysql_num_rows($result);
    if($rows == 1){
        echo "1";
    }else{
        echo "0";
    }
}
mysql_close($con);