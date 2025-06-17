// 4. Fatorial Recursivo 
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1. 

function fatorial(n) {
    if (n < 0) {
        console.log("Número negativo não tem fatorial.");
        return;
    } else if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

// Exemplos de uso:
console.log(fatorial(5)); // 120
console.log(fatorial(0)); // 1
console.log(fatorial(1)); // 1