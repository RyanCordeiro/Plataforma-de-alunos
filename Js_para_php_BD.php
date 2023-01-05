<?php
// Faz a conexão com o banco de dados
$conn = mysqli_connect('localhost', 'root', '', 'alunos');




// variaveis testes
$username = $_POST['username'];
$senha = $_POST['senha'];
$celular = $_POST['celular'];
$instagram = $_POST['instagram'];
$equipe = $_POST['equipe'];

  $numeroRandomico = rand(100000000, 999999999);
  $matriculaJS = str_pad($numeroRandomico, 8, '0', STR_PAD_LEFT);
  

    
$inserir = 'INSERT INTO `alunos` VALUES (null, ?, ?, ?, ?, ?, ? )';

$stmt = mysqli_prepare($conn, $inserir);
mysqli_stmt_bind_param($stmt, 'ssssss', $username, $senha, $celular, $instagram, $equipe, $matriculaJS);
mysqli_stmt_execute($stmt);
 

if (mysqli_stmt_error($stmt)) {
    echo "Erro ao inserir: " . mysqli_stmt_error($stmt);
    return;
  }
  
  echo "Registro inserido com sucesso!";
  
  mysqli_stmt_close($stmt);
  mysqli_close($conn);


?>