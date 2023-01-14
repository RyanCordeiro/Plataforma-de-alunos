<?php  

error_reporting(0);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  $senha = $_POST['senha'];


    $conn = mysqli_connect('localhost', 'root', '', 'alunos');
    // Código a ser executado se o método de requisição for POST

  //verifica se nome e senha correspondem ao banco de dados sql
$result = mysqli_query($conn, "SELECT * FROM `alunos` WHERE nome = '$username' AND senha = '$senha'");

 $login = '';  
   //se o resultado é verdadeoiro retorna login como verdadeiro para o javascript "script.js"
if (mysqli_num_rows($result) > 0) {
  // Usuário e senha estão corretos
$login = true;
} else {
$login = false;  
}

echo json_encode(array($login, $username, $senha));
};
?>

