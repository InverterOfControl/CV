<?php
$to      = 'info@saschalaabs.com';
$subject = 'Mail per Saschalaabs.com';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$from = $request->from;
$message = $request->message;

$headers = 'From: '.$from . "\r\n" . 'Reply-To: ' . $from. "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?> 