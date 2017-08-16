<?php
/**
 * Created by PhpStorm.
 * User: Julius Alvarado
 * Date: 3/18/2017
 * Time: 5:16 PM
 */

include("functions/functions.php");

header('Content-type: application/json');
echo ")]}'\n";

// action=getScores
if ($_GET['action'] == 'getScores') {
    $type = $_GET['type'];
    $curUserId = array_key_exists('curUserId', $_GET) ? $_GET['curUserId'] : ""; // use this to send back the currently logged in user info
    if ($type == 'public') {
        $whereClause = "";
    } else if ($type == 'isFollowing') {
        // MAKE SURE $curUser is initialized !!!
        $query = "select * from isFollowing where follower = $curUserId limit 100";
        $result = mysqli_query($link, $query);

        $whereClause = "";

        while ($row = @mysqli_fetch_assoc($result)) {
            if ($whereClause == "") $whereClause = " WHERE ";
            else $whereClause .= " OR ";
            $whereClause .= "userid = " . $row['isFollowing'];
        }
    }

    $query = "select * from scores ".$whereClause." order by `datetime` desc limit 10";
    $result = mysqli_query($link, $query);
    if (@mysqli_num_rows($result) == 0) {
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
    echo "\n\n";
    echo "Start debugging stuff and seeing output !!";
}

//
