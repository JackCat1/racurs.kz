<?php

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

$phone=$data['phone'];
$name=$data['name'];

$to  = "info@racurs.kz" ; 


$subject = "Заявка с сайта"; 

$message = ' 
<html> 
    <head> 
        <title>Заявка на страховой полис</title>
    </head> 
    <body>     
    ';

$message.='
    <h2>Заявка на обратный звонок</h2>
    <h3>Контакты:</h3>
    <p><b>Телефон:</b> '.$phone.', <b>Имя:</b> '.$name.'</p>';


$message .='         
    </body> 
    </html>'; 

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: Client <info@racurs.kz>\r\n"; 
$headers .= "Bcc: info@racurs.kz\r\n"; 

if(mail($to, $subject, $message, $headers)){
    echo 'Success';
} else{
    echo 'Error';
}; 