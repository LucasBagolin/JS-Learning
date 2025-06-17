// 3. Palavras Únicas 
// Dada uma string (ex.: "olá olá mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array. 

function palavrasUnicas(frase) {
    const palavras = frase.split(" ");
    const unicas = [];

    for (let i = 0; i < palavras.length; i++) {
        let contagem = 0;

        for (let j = 0; j < palavras.length; j++) {
            if (palavras[i] === palavras[j]) {
                contagem++;
            }
        }

        if (contagem === 1) {
            unicas.push(palavras[i]);
        }
    }

    return unicas;
}

// Exemplo de uso:
const frase = "olá olá mundo";
const resultado = palavrasUnicas(frase);
console.log(resultado); // [ 'mundo' ]