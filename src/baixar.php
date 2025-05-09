<?php
// Caminho para o seu arquivo
$arquivo = '../js/pdf/Geraldo.pdf';

if (file_exists($arquivo)) {
    // Define os headers para forçar o download
    header('Content-Description: File Transfer');
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="' . basename($arquivo) . '"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($arquivo));
    readfile($arquivo);
    exit;
} else {
    echo 'Arquivo não encontrado.';
}
