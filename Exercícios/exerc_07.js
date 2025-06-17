// Seção 3: Arrays e Objetos Complexos 
// 7. Mapeamento e Ordenação 
// Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort. 

function nomesOrdenadosPorPreco(listaDeProdutos) {
    const ordenados = listaDeProdutos.slice().sort((a, b) => a.preco - b.preco);
    const nomes = ordenados.map(produto => produto.nome);
    return nomes;
}

// Exemplo de uso:
const produtos = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Calça", preco: 89.90 },
    { nome: "Tênis", preco: 129.90 },
    { nome: "Boné", preco: 29.90 }
];

console.log(nomesOrdenadosPorPreco(produtos));
