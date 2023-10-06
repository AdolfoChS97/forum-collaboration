<?php
    require '../api/utils/ErrorDisplayer.php';
    require '../api/utils/Response.php';
    require '../api/utils/Database.php';

    $sql = "SELECT * FROM project.THEMES WHERE (THEMES.AUTHOR LIKE '%$_GET[author]%') ORDER BY ID DESC";
    $data = $database->connect()->query($sql)->fetch_all(MYSQLI_ASSOC);
    Response::send($data, 200);
