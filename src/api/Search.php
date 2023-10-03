<?php
    include_once '../api/utils/ConnectionDatabase.php';
    require '../api/utils/ErrorDisplayer.php';
    require '../api/utils/Response.php';

    Response::send($_GET, 200);
