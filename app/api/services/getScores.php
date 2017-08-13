<?php
/**
 * Created by PhpStorm.
 * User: Julius Alvarado
 * Date: 8/6/2017
 * Time: 1:07 PM
 */



header("Content-type: application/json");
echo ")]}'\n";

if(isset($_GET['type']) && is_string($_GET['type']) && $_GET['type'] == "public") {
    $scores = [];
    echo json_encode($scores);
}
