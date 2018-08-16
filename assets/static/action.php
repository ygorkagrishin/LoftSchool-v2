<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$house = $_POST['house'];
$build = $_POST['build'];
$flat = $_POST['flat'];
$floor = $_POST['floor'];
$comment = $_POST['comment'];
$call = isset( $_POST['call'] ) ? 'Да' : 'Нет';
$radio = $_POST['card'];
$answerHading;
$answerCard;

if ( isset( $radio ) ) {

    switch( $radio ) {
        case '1':
            $answerHading = 'v';
        break;
        case '2':
            $answerCard = 'v';
        break;
    }

}

$mail_massage = '

    <html>
        <head>
            <meta charser="UTF-8">
            <title>Document</title>
        </head>
        <body>

            <h2>Заказ</h2>
                <ul>
                    <li>Имя : ' . $name . ' </li>
                    <li>Номер телефона : ' . $phone . ' </li>
                    <li>Улица : ' . $street . ' </li>
                    <li>Дом : ' . $house . ' </li>
                    <li>Строение : ' . $build . ' </li>
                    <li>Квартира : ' . $flat . ' </li>
                    <li>Этаж : ' . $floor . ' </li>
                    <li>Комментарий : ' . $comment . ' </li>
                    <li>Потребуется сдача: ' . $answerHading . ' </li>
                    <li>Оплата картой: ' . $answerCard . ' </li>
                    <li>Не перезванивать : ' . $call . ' </li>
                </ul>

        </body>
    </html>

';

$headers  =  "Content-type : text/html; charset=UTF-8 \r\n";
$headers .=  "From : Администратор сайта <admin@665.com>\r\n";
$headers .=  "MIME-Version: 1.0 \r\n";

$mail = mail('sir.ygorkagrishin@yandex.ru', 'Заказать', $mail_massage, $headers);
?>