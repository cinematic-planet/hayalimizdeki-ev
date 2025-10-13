<?php
if ($SERVER)["REQUEST_METHOD"] == "POST") {
    $mesaj = htmlspecialchars($POST)["mesaj"]);
    $to = "contrakts@windowslive.com";
    $subject = "Yeni Mesaj: Sana Söyleyemediklerim";
    $headers = "From: info@xxxxxx.com\r\n";
    $headers = "Content-Type: text/plain; charset=UTF-8\r\n";

    mail($subject, $mesaj, $headers);
    exit();
}
?>