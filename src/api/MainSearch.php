<?php
    include_once '../api/utils/ConnectionDatabase.php';
    require '../api/utils/ErrorDisplayer.php';
    require '../api/utils/Response.php';

    $body = file_get_contents('php://input');
    Response::send($body, 200);

    // // echo $data;
    // var_dump($data['tema']);