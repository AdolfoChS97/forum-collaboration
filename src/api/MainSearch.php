<?php
    include_once '../api/utils/ConnectionDatabase.php';
    require '../api/utils/ErrorDisplayer.php';


    $body = file_get_contents('php://input');
    // $data = json_decode($body, true);

    header('Content-Type: application/json');
    echo $body;

    // // echo $data;
    // var_dump($data['tema']);