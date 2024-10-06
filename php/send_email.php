<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "jeremipa92@gmail.com"; // Cambia esto a la dirección de correo que deseas
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $headers = "From: " . $email . "\r\n";
    
    $body = "Nombre: $name\nCorreo: $email\nAsunto: $subject\n\nMensaje:\n$message";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado con éxito";
    } else {
        echo "Error al enviar el mensaje";
    }
}
?>