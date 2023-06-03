<?
//print_r($_POST);

mail('buhone@list.ru', 'Заявку от клиента',
     "ФИО: ".$_POST['name']."\r\n".
     "Телефон: ".$_POST['tel']."\r\n".
     "Почта: ".$_POST['email']."\r\n".
     "Сообщение: ".$_POST['comment']. "\r\n".
     "Клиент хочет забронировать видео рекламы:  ".$_POST['calculator-result']. "\r\n".
     "Клиент хочет забронировать баннерной рекламы:  ".$_POST['calculator-result-banner']);
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="refresh" content="3; url=index.html">
    <title>Спасибо! Мы свяжемся с вами!</title>
    <meta name="generator">
    <script type="text/javascript">
        setTimeout('location.replace("/index.html")', 4000);
/*Изменить текущий адрес страницы через 4 секунды (4000 миллисекунд)*/
    </script>
    <style>

    </style>
</head>

<body>
    <h1>Спасибо! Мы свяжемся с вами в ближайшее время!</h1>
</body>

</html>
