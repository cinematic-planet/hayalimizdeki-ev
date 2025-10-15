<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Composer ile kurduysan
// veya manuel kurulumda:
// require 'phpmailer/src/PHPMailer.php';
// require 'phpmailer/src/SMTP.php';
// require 'phpmailer/src/Exception.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'senin-email@example.com';
    $mail->Password   = 'uygulama_sifresi';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom($_POST['email'], 'Misafir');
    $mail->addAddress('senin-email@example.com', 'Emre');
    $mail->addReplyto($_POST['email'], 'Misafir');
    $mail->Subject = 'Hayalimizdeki Ev - Yeni Mesaj';
    $mail->Body = "Gönderen: " . $_POST['email'] . "\n\nMesaj:\n" . $_POST['message'];

    $mail->send();

        $kayit = "Tarih: " . date("D-m-y H-i-s") . "\n";
    $kayit .= "Gönderen " . $_POST['email'] . "\n";
    $kayit .= "Mesaj:\n" . $_POST['message'] . "\n";
    $kayit .= "-----------------------------\n";

    file_put_contents("mesajlar.txt", $kayit, FILE_APPEND);

     // Başarılıysa yönlendir
    header("Location: index.php");
    exit;

    echo 'Mesaj başarıyla gönderildi.';
} catch (Exception $e) {
    echo "Mesaj gönderilemedi. Hata: {$mail->ErrorInfo}";
}
?>
