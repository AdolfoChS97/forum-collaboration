<?php 
    
    require '../api/utils/ErrorDisplayer.php';
    require '../api/utils/Database.php';
    require '../api/utils/Response.php';

    $sql = "SELECT * FROM project.THEMES WHERE ID = '$_GET[themeId]'";
    $data = $database->connect()->query($sql)->fetch_all(MYSQLI_ASSOC);
    Response::send($data, 200);