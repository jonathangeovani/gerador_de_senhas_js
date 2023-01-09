//Definindo caracteres possíveis
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*(){}[]';

var senha = ''

// Função que gera a senha
function gera(digitos){
    for (let i = 0; i < digitos; i++) {
        var index = Math.floor(Math.random() * characters.length);
        senha = senha + characters[index];
    }
    return senha;
}

// Recebendo do usuário a quantidade de Caracteres e criando a senha
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Criar uma senha com quantos caracteres? ', numChar => {
    console.log(gera(numChar));
    readline.close();
});
