<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    
    $body = file_get_contents('php://input');
    $data = json_decode($body, true);
    // echo $data;
    var_dump($data['tema']);
