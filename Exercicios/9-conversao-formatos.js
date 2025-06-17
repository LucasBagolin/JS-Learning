// 9. Conversão Entre Formatos 
// Escreva duas funções: 
// A paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente. 
// A objetoParaPares(obj) faz o inverso, retornando um array de pares. 

// Converte array de pares para objeto
function paresParaObjeto(pares) {
    const resultado = {};
    for (let i = 0; i < pares.length; i++) {
        const chave = pares[i][0];
        const valor = pares[i][1];
        resultado[chave] = valor;
    }
    return resultado;
}

// Converte objeto para array de pares
function objetoParaPares(objeto) {
    const pares = [];
    for (let chave in objeto) {
        pares.push([chave, objeto[chave]]);
    }
    return pares;
}

const pares = [["nome", "Lucas"], ["idade", 24], ["curso", "Ciência da Computação"]];
const objeto = { nome: "Lucas", idade: 24, curso: "Ciência da Computação" };

// Conversão: pares → objeto
const resultado1 = paresParaObjeto(pares);
console.log("Pares para objeto:", resultado1);

// Conversão: objeto → pares
const resultado2 = objetoParaPares(objeto);
console.log("Objeto para pares:", resultado2);

// Resultado esperado:
// Pares para objeto: { nome: 'Lucas', idade: 24, curso: 'Computação' }
// Objeto para pares: [ [ 'nome', 'Lucas' ], [ 'idade', 24 ], [ 'curso', 'Computação' ] ]