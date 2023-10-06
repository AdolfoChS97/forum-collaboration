<?php
    require '../api/utils/ErrorDisplayer.php';
    require '../api/utils/Response.php';
    require '../api/utils/Database.php';

    $sql = "SELECT AUTHOR FROM THEMES GROUP BY project.THEMES.AUTHOR";
    $data = $database->connect()->query($sql)->fetch_all(MYSQLI_ASSOC);
    Response::send($data, 200);
