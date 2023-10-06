<?php

require '../api/utils/ErrorDisplayer.php';
require '../api/utils/Response.php';
require '../api/utils/Database.php';

$body = json_decode(file_get_contents('php://input'), true);

$sql = "INSERT INTO project.THEMES
(TITLE, THEME, AUTHOR)
VALUES('$body[title]', '$body[theme]', '$body[author]')";

$data = $database->connect()->query($sql);

Response::send(array("created" => true), 202);