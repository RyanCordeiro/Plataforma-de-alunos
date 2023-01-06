

//
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Alunos'
});
connection.connect(function (err) {
  if (err) {
    console.error('Erro ao conectar: ' + err.stack);
    return;
  }
  console.log('Conectado com ID: ' + connection.threadId);
});





//pega os valors do DOM
function cadastrar() {
  // matricula aleatroria 
  let numeroRandomico = Math.floor(Math.random() * 100000000);
  let numeroFormatado = numeroRandomico.toString().padStart(8, '0');
  console.log(numeroFormatado);
  //pega do DOM as referencias
  var name = (document.getElementById('username')).value;
  var senha = (document.getElementById('senha')).value;
  var celular = (document.getElementById('celular')).value;
  var instagram = (document.getElementById('instagram')).value;
  var equipe = (document.getElementById('equipe')).value;
  // var idade = '20';
  var matriculaJS = numeroFormatado;


  console.log('nome ' + name);
  console.log('senha ' + senha);
  console.log('celular ' + celular);
  console.log('instagram ' + instagram);
  console.log('equipe ' + equipe);
  console.log('matricula ' + matriculaJS);

  // enviar para o php que envia as coisas 
  // Faz a requisição POST para o arquivo PHP com os dados dos campos de entrada
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'Js_para_php_BD.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (xhr.status === 200) {
      alert('Dados enviados com sucesso!');
    }
    else {
      alert('Erro ao enviar os dados: ' + xhr.status);
    }
  };
  xhr.send('username=' + name + '&senha=' + senha + '&celular=' + celular + '&instagram=' + instagram + '&equipe=' + equipe);

  // inserir as caracanetriscas no banco de dados

  const inserir = 'INSERT INTO alunos VALUES (NULL, ?, ?, ?, ?, ?, ?)';
  connection.query(inserir, [name, senha, celular, instagram, equipe, matriculaJS], function (error, results, fields) {
    if (error) {
      console.error('Erro ao inserir: ' + error.stack);
      return;
    }
    console.log('Registro inserido com sucesso!');
  });
  connection.end
}

function logar() {

  //input do usario html
  const nomeInformado = (document.getElementById('usuario')).value;
  const senhaInformada = (document.getElementById('senha')).value;
  console.log(nomeInformado, senhaInformada);
  alert('Clickado, esperando confirmação')
  // enviar para o php verificar se esta certo
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'login.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (xhr.status === 200) {
      alert('Dados enviados com sucesso!');
    }
    else {
      alert('Erro ao enviar os dados: ' + xhr.status);
    }
  };
  xhr.send('username=' + nomeInformado + '&senha=' + senhaInformada);


  //retorno do php se sim esta certo ou nao
  fetch('login.php')
    .then(response => response.json())
    .then(login => {
      if (login == true) {
        console.log('Logado')
        // Código a ser executado se LOGIN for verdadeiro
      } else {
        // Código a ser executado se login for falso
        console.log('Tente Novamente')
      }
    })
    .catch(error => {
      console.log(error);
      // Código a ser executado se houver um erro ao fazer o parse da resposta
    });

  ////////////////////////////node ///////////////////////
  // conecção javascrip para node.js
  connection.query('SELECT nome, senha FROM alunos', function (error, resultados, fields) {
    if (error) {
      console.error('Erro ao consultar: ' + error.stack);
      return;
    }
    console.log(resultados); // Exibe os resultados da consulta
  });
  connection.end();
  ///////////////////////NODE/////////////////////
}