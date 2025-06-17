// 6. Memoization 
// Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações. 

function memoizar(funcao) {
    const cache = {};

    return function (...argumentos) {
        const chave = JSON.stringify(argumentos);

        if (cache[chave] !== undefined) {
            console.log(`Cache hit para: ${chave}`);
            return cache[chave];
        }

        const resultado = funcao.apply(this, argumentos);
        cache[chave] = resultado;
        return resultado;
    };
}

// Função recursiva de Fibonacci
function fibonacci(n) {
    console.log(`Calculando fibonacci(${n})`);
    if (n < 0) return undefined;
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
}

// Aplica memoização na função
const fibonacciMemo = memoizar(fibonacci);

// Testando
console.log("Resultado:", fibonacciMemo(6)); // 8
console.log("Resultado:", fibonacciMemo(7)); // 13
console.log("Resultado:", fibonacciMemo(8)); // 21
console.log("Resultado:", fibonacciMemo(9)); // 34
console.log("Resultado:", fibonacciMemo(10)); // 55
console.log("Resultado:", fibonacciMemo(20)); // 6765