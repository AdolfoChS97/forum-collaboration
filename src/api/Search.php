<?php
    require '../api/utils/ErrorDisplayer.php';
    require '../api/utils/Response.php';
    require '../api/utils/Database.php';

    $sql = "SELECT * FROM project.THEMES WHERE (THEMES.TITLE LIKE '%$_GET[theme]%' OR  THEMES.THEME LIKE '%$_GET[theme]%') ORDER BY ID DESC";
    $data = $database->connect()->query($sql)->fetch_all(MYSQLI_ASSOC);
    Response::send($data, 200);
