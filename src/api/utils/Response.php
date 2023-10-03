<?php 

class Response {
    public static function send($data, $statusCode) {
        header('Content-Type: application/json');
        http_response_code($statusCode);
        echo json_encode($data);
    }
}