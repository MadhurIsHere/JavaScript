<?php

$filename = "sample.txt";

/* Write Mode */
$file = fopen($filename,"w");
if($file){
    fwrite($file,"Hello Student\n");
    fwrite($file,"Welcome to PHP File Handling\n");
    fclose($file);
    echo "File written successfully<br>";
}else{
    echo "Write error<br>";
}

/* Read Mode */
$file = fopen($filename,"r");
if($file){
    echo "<br>File Content:<br>";
    while(!feof($file)){
        echo fgets($file)."<br>";
    }
    fclose($file);
}else{
    echo "Read error<br>";
}

/* Append Mode */
$file = fopen($filename,"a");
if($file){
    fwrite($file,"This line is appended\n");
    fclose($file);
    echo "<br>Data appended successfully";
}else{
    echo "Append error";
}

?>
