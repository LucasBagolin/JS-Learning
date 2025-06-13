// Validação de Datas 
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores 
// formarem uma data real (meses de 28–31 dias, ano bissexto para 
// fevereiro) e false caso contrário. 

function ehAnoBissexto(ano) {
    return (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0));
}

function ehDataValida(dia, mes, ano) {
    // Verifica se mês está entre 1 e 12
    if (mes < 1 || mes > 12) {
        return false;
    }

    // Verifica se o dia é pelo menos 1
    if (dia < 1) {
        return false;
    }

    // Dias máximos de cada mês (ignorando bissexto por enquanto)
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Ajusta fevereiro se for ano bissexto
    if (mes === 2 && ehAnoBissexto(ano)) {
        diasPorMes[1] = 29;
    }

    // Verifica se o dia excede o máximo do mês
    if (dia > diasPorMes[mes - 1]) {
        return false;
    }

    // Tudo certo
    return true;
}

// Exemplos de execução:
console.log(ehDataValida(29, 2, 2024)); // true (ano bissexto)
console.log(ehDataValida(31, 4, 2023)); // false (abril tem 30 dias)
console.log(ehDataValida(15, 13, 2023)); // false (mês inválido)
console.log(ehDataValida(0, 1, 2023)); // false (dia inválido)
console.log(ehDataValida(31, 12, 2023)); // true