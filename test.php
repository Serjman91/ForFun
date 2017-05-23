<?php

//	ini_set('display_errors', 1);
//    ini_set('error_reporting', E_All);
//
//
//	$test = file_get_contents("data.json");
//	print $test;
//	$test1 = json_decode($test);
//
//	$test1->address = 'Amsterdam';
//
//
//	$test2 = json_encode($test1);
//
//	if(file_put_contents("data.json", $test2)){
//		echo "success";
//	}else{
//		echo 'error';
//	}
header('Content-Type: text/html; charset=UTF-8');
//    echo "<pre>";
//    $ft = fopen("Admin/DB/data.csv","r");
//
//    while(!feof($ft))   {
//        $buffer = fgets($ft);
//        echo $buffer;
//    }
//    echo "<pre>";
//    fclose($ft);

    $handle = fopen("Admin/DB/data.json", "r");
    for ($i=0; $info = fgets($handle); $i++) {
        if ($i == 4) {
            echo $info;
        }
    }

?>