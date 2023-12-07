<?php
    $email = $_POST["email"];
    
    $name= $_POST["name"];

    $pass = $_POST["pass"];
    $pass = md5($pass."asd22");

    $mysql = new mysqli("localhost", "root", "", "register-bg");
    
    $result = $mysql->query("SELCET * FROM `users` WHERE `email` =
    '$email' AND `pass` = '$pass'");
    $users = $result->fetch_assoc();
    if (count($users) == 0){
        echo "People is not found";
        exit();
    }

    setcookie('user', $user['name'], time() + 3000, "/");

    $mysql->close();

    header("Location: /");
?>