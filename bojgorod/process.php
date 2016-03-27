<?php
if (isset($_POST['enqueue'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

$mymail = "alligator0789@gmail.com";
$email_subject = "Заявка на консультацию на сайте Божгород";
$email_body = "Посетитель:" . $name . "\n".
"Почта: " . $email ."\n" .
 "Сообщение: " . $message ;
 //$email_body = base64_encode($email_body);
$headers = "Content-type:text/plain; charset=utf-8 \r\n";
$headers .= "From: s$email \r\n";
$headers .= "Reply-To: $email \r\n";
mail($mymail,$email_subject,$email_body,$headers);
echo "<div id=\"myAlert\" class=\"alert alert-success alert-dismissible fade in\" role=\"alert\">
    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">
    <span aria-hidden=\"true\">&times;</span>
    </button>Ваша заявка успешно отправлена! Мы свяжемся с Вами в течение дня.
    </div>";
}
if (isset($_POST['callback'])) {
  $name = $_POST['name'];
  $tel = $_POST['tel'];
  $message = $_POST['message'];

$mymail = "alligator0789@gmail.com";
$email_subject = "Заявка на обратный звонок на сайте Божгород";
$email_body = "Посетитель " . $name . "\n".
"Телефон: " . $tel ."\n" .
 "Сообщение: " . $message ;
 //$email_body = base64_encode($email_body);
$headers = "Content-type:text/plain; charset=utf-8 \r\n";
$headers .= "From: s$email \r\n";
$headers .= "Reply-To: $email \r\n";
mail($mymail,$email_subject,$email_body,$headers);
  echo "<p>Спасибо. Ваше сообщение успешно отправлено!</p>";
}

?>
