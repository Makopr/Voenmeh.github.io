<?php
    $email = $_POST["email"];
    $name= $_POST["name"];
    $pass = $_POST["pass"];
    $pass = md5($pass."asd22");

    $mysql = new mysqli("localhost", "root", "", "register-bg");
    $mysql->query("INSERT INTO `users` (`email`, `pass`, `name`)
    VALUES('$email', '$pass', '$name')");

    $mysql->close();
?>