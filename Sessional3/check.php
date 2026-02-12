<?php
include "db.php";

$email = $_POST['email'];
$pass = $_POST['password'];

$res = mysqli_query($conn,"SELECT * FROM users WHERE email='$email'");
$row = mysqli_fetch_assoc($res);

if($row && password_verify($pass,$row['password'])){
    echo "Login Successful";
}else{
    echo "Invalid Login";
}
?>
