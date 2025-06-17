// 8. Agrupamento por Propriedade 
// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total. 

function agruparPorCliente(listaDeVendas) {
    return listaDeVendas.reduce((acumulador, venda) => {
        const cliente = venda.cliente;
        const total = venda.total;

        if (acumulador[cliente]) {
            acumulador[cliente] += total; // soma ao total já existente
        } else {
            acumulador[cliente] = total;  // inicia com o valor atual
        }

        return acumulador;
    }, {}); // acumulador inicial é um objeto vazio
}

const vendas = [
    { cliente: "Lucas", total: 100 },
    { cliente: "Joao", total: 200 },
    { cliente: "Lucas", total: 150 },
    { cliente: "Maria", total: 300 },
    { cliente: "Joao", total: 50 }
];

const resultado = agruparPorCliente(vendas);

console.log(resultado);