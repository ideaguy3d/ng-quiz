<?php
/**
 * Created by PhpStorm.
 * User: Julius Alvarado
 * Date: 3/18/2017
 * Time: 5:16 PM
 */

include ("functions/functions.php");

header('Content-type: application/json');
echo ")]}'\n";

if ($_GET['action'] == 'getScores') {
    if($_GET['type'] == 'public') {
        $whereClause = "";
    }

    $query = "select * from scores order by `datetime` desc limit 10";
    $result = mysqli_query($link, $query);
    if(@mysqli_num_rows($result) == 0) {
        echo "no scores in database";
    } else {
        $scores = array();

        while ($row = mysqli_fetch_assoc($result)) {
            array_push($scores, $row);
        }
        echo json_encode($scores);
    }
}

//
