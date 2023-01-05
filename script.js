/*const Sequelize = require('sequelize');
const sequelize = new Sequelize('alunos', 'root', '', {
  host: "localhost",
  dialect: "mysql"
});
sequelize.authenticate().then(function () { console.log("conectado com sucesso!") }).catch(function (erro) {
  console.log("Falha ao se concetar:" + erro)
})
*/
// reeadline
const readlineSync = require('readline-sync');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


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
  //var idade = '20';
  var matriculaJS = numeroFormatado;
  // inserir as caracanetriscas no banco de dados
  const inserir = 'INSERT INTO alunos VALUES (NULL, ?, ?, ?, ?, ?, ?)';
  console.log('nome ' + name);
  console.log('senha ' + senha);
  console.log('celular ' + celular);
  console.log('instagram ' + instagram);
  console.log('equipe ' + equipe);
  console.log('matricula ' + matriculaJS);



  var xhr = new XMLHttpRequest();
  // Configura a solicitação
  xhr.open('GET', 'script2.php?matriculaPHP=' + matriculaJS);
  // Envia a solicitação
  xhr.send();
}


/*connection.query(inserir, [name, senha, celular, instagram, equipe, matricula], function (error, results, fields) {
  if (error) {
    console.error('Erro ao inserir: ' + error.stack);
    return;
  }
  console.log('Registro inserido com sucesso!');
});
connection.end 
}     */
//recebe matricula do php atraves do json
