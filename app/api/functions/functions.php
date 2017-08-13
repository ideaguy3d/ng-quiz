<?php
/**
 * Created by PhpStorm.
 * User: Julius Alvarado
 * Date: 8/4/2017
 * Time: 4:53 PM
 */

$link = mysqli_connect("localhost", "root", "", "ng_quiz");

if (mysqli_connect_errno()) {
    print_r(mysqli_connect_error());
    exit();
}

function displayScores($type) {
    global $link;
    if ($type == 'public') {
        $whereClause = "";
    }

    $query = "select * from scores where $whereClause order by `datetime` desc limit 10";
    $result = mysqli_query($link, $query);
    if (@mysqli_num_rows($result) == 0) {
        echo "no tweet in database";
    } else {
        while ($row = mysqli_fetch_assoc($result)) {
            echo $row['score'] . ', ' . $row['comment'];
        }
    }
}
