// 2. Jogo de Adivinhação 
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao 
// usuário, para adivinhar. Use while para repetir até acertar, contando 
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. 

const prompt = require("prompt-sync")();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let acertou = false;

console.log("Adivinhe o número entre 1 e 100.");

while (!acertou) {
    const palpite = Number(prompt("Digite seu palpite: "));
    tentativas++;

    if (palpite === numeroSecreto) {
        console.log(`Parabéns! Você acertou com ${tentativas} tentativa(s).`);
        acertou = true;
    } else if (palpite < numeroSecreto) {
        console.log("Mais alto!");
    } else {
        console.log("Mais baixo!");
    }
}