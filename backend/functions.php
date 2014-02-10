<?php

require_once("SwedishRadio.php");

$sr = new SwedishRadio();

$data = $sr->getRequest();

if ($data == false) {
    echo "ERROR";
} else {
    echo(json_encode($data));
}
