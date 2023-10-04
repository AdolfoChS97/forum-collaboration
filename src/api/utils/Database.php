<?php
require 'ErrorDisplayer.php';

class Database {
    
    private $host;
    private $user;
    private $password;
    private $database;
    private $port;

    public function __construct($host, $user, $password, $database, $port) {
        $this->host = $host;
        $this->user = $user;
        $this->password = $password;
        $this->database = $database;
        $this->port = $port;
    }

    public function connect() {
        $connection = new mysqli($this->host, $this->user, $this->password, $this->database, $this->port);
        if($connection->connect_errno) {
            die('Error en la conexión: ' . $connection->connect_error);
        }
        return $connection;
    }
    
}

$database = new Database('0.0.0.0:3306', 'root', '1234', 'project', 3306);


