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
    $type = $_GET['type'];
    if($type == 'public') {
        $whereClause = "";
    } else if ($type == 'following') {
        $whereClause = ""; 
    }

    $query = "select * from scores order by `datetime` desc limit 10";
    $result = mysqli_query($link, $query);
    if(@mysqli_num_rows($result) == 0) {
        echo "no scores in database";
    } else {
        $scores = array();

        // get all the records from the db
        while ($row = mysqli_fetch_assoc($result)) {
            $row['zTimeSince'] = time_since(time() - strtotime($row['datetime']));
            array_push($scores, $row);
        }

        // return JSON data
        echo json_encode($scores);
    }
} else {
    echo"\n\n";
    echo "Start debugging stuff and seeing output !!";
}

//
