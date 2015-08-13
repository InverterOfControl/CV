<?php
$to      = 'info@saschalaabs.com';
$subject = 'Mail per Saschalaabs.com';

$from = $_POST['from'];

$message = $_POST['message'];
$headers = 'From: '.$from . "\r\n" . 'Reply-To: ' . $from. "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?> 