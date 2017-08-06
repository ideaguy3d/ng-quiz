<?php
/**
 * Created by PhpStorm.
 * User: Julius Alvarado
 * Date: 8/4/2017
 * Time: 4:53 PM
 */

$link = mysqli_connect("localhost", "root", "", "ng_quiz");

if(mysqli_connect_errno($link)) {
    print_r(mysqli_connect_error());
    exit();
}
