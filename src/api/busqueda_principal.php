<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    // Decodificamos los datos JSON directamente en la variable $_POST
    $data = json_decode($_POST, true);