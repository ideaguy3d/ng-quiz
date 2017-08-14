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

function time_since($since) {
    $chunks = array(
        array(60 * 60 * 24 * 365, 'year'),
        array(60 * 60 * 24 * 30, 'month'),
        array(60 * 60 * 24 * 7, 'week'),
        array(60 * 60 * 24, 'day'),
        array(60 * 60, 'hour'),
        array(60, 'minute'),
        array(1, 'second')
    );

    for ($i = 0, $j = count($chunks); $i < $j; $i++) {
        $seconds = $chunks[$i][0];
        $name = $chunks[$i][1];
        if(($count = floor($since/$seconds)) != 0) {
            break;
        }
    }
    $timeAgo = ($count == 1) ? '1 '.$name : "$count {$name}s";
    return $timeAgo;
}

time_since("foobar");
