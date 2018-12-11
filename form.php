<?php
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$title = trim($_POST["title"]);
$text = trim($_POST["message"]);

$letter = "Name : $name \n Mail : $email \n Text : $text";

mail("bcharly49@gmail.com", $title, $letter);