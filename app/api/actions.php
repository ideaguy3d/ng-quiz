<?php
/**
 * Created by PhpStorm.
 * User: Julius Alvarado
 * Date: 8/5/2017
 * Time: 2:17 AM
 */

include("functions/functions.php");

// action=loginSignup
if ($_GET['action'] == 'loginSignup') {
    $error = "";
    $emailReal = mysqli_real_escape_string($link, $_GET['email']);
    $pwReal = mysqli_real_escape_string($link, $_GET['password']);

    if (array_key_exists("email", $_GET) & !$_GET['email']) {
        $error = "an email address is required";
    } else if (!$_GET['password']) {
        $error = "a password is required";
    } else if (filter_var($_GET['email'], FILTER_VALIDATE_EMAIL) === false) {
        $error = "email is not valid";
    }

    if ($error != "") {
        echo $error;
        exit();
    }

    if ($_GET['loginActive'] == "0") { // "0" = user is trying to sign up
        $query = "select * from users where email = '$emailReal' limit 1";
        $result = mysqli_query($link, $query);
        $rows = @mysqli_num_rows($result);
        if ($rows > 0) {
            $error = "that email is taken";
        }
        else {
            $query = "insert into users (`email`, `password`) values ('$emailReal', '$pwReal')";
            if (mysqli_query($link, $query)) {
                $pwUpdate = md5(md5(mysqli_insert_id($link)).$_GET['password']);
                $query = "update users set password = '$pwUpdate' where id = '".mysqli_insert_id($link)."' limit 1";
                mysqli_query($link, $query);
                echo 1;
            } else {
                $error = "could not create user";
            };
        }
    }
    else { // "1" = user is trying to login
        $query = "select * from users where email = '$emailReal' LIMIT 1";
        $result = mysqli_query($link, $query);
        // this time I actually want to use the result here in php
        $row = mysqli_fetch_assoc($result);
        if($row['password'] == md5(md5($row['id']).$_GET['password'])) {
            echo 1;
        } else {
            $error = "could not find username/password";
        }
    }

    if ($error != "") {
        echo $error;
        exit();
    }
}

//action=toggleFollow
if($_GET['action'] == 'toggleFollow') {
    
}

