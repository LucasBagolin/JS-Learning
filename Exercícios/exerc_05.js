// 5. Debounce 
// Crie function debounce(fn, delay) que receba uma função fn e um delay 
// em ms, retornando uma nova função que só executa fn se não for 
// chamada novamente dentro do intervalo. 

function esperar(funcao, atraso) {
    let idTemporizador;

    return function (...argumentos) {
        clearTimeout(idTemporizador); // Cancela o temporizador anterior
        idTemporizador = setTimeout(() => {
            funcao.apply(this, argumentos); // Executa após o tempo se não for cancelado
        }, atraso);
    };
}

// Função de exemplo que será executada com atraso
function mostrarMensagem() {
    console.log("Função executada!");
}

// Criando uma versão com debounce de 1 segundo
const mostrarComAtraso = esperar(mostrarMensagem, 1000);

// Simulando chamadas rápidas
console.log("Chamadas iniciadas...");
mostrarComAtraso();
setTimeout(mostrarComAtraso, 300);  // reinicia o tempo
setTimeout(mostrarComAtraso, 600);  // reinicia o tempo
setTimeout(mostrarComAtraso, 1200); // esta será a única que executa a função