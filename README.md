# 📚 JS-Learning — Aprendizado Progressivo em JavaScript

Este repositório contém uma série de exercícios resolvidos em JavaScript, organizados por tópicos estratégicos: **validação, funções, recursão, arrays e objetos complexos**. O objetivo é fortalecer o raciocínio lógico, desenvolver fluência na linguagem e aplicar boas práticas com JavaScript puro.

---

## 🗂️ Estrutura dos Exercícios

### 🔹 Seção 1: Validação e Interação

1. **Validação de Datas**  
   Verifica se uma data é real, considerando anos bissextos.  
   ➤ Arquivo: `1-validacao-data.js`

2. **Jogo de Adivinhação**  
   Gera um número aleatório de 1 a 100 e orienta o usuário até acertar.  
   ➤ Arquivo: `2-adivinhacao.js`

3. **Palavras Únicas**  
   Retorna as palavras que aparecem apenas uma vez em uma string.  
   ➤ Arquivo: `3-palavras-unicas.js`

---

### 🔹 Seção 2: Funções e Recursão

4. **Fatorial Recursivo**  
   Calcula o fatorial de forma recursiva com tratamento de erro para negativos.  
   ➤ Arquivo: `4-fatorial.js`

5. **Debounce**  
   Controla a execução de uma função para que ocorra somente após um intervalo sem novas chamadas.  
   ➤ Arquivo: `5-debounce.js`

6. **Memoization**  
   Armazena resultados anteriores de uma função para evitar recomputações — inclui versão com cache externo e com cache embutido.  
   ➤ Arquivo: `6-memoization.js`

---

### 🔹 Seção 3: Arrays e Objetos Complexos

7. **Mapeamento e Ordenação**  
   Ordena produtos por preço e retorna apenas seus nomes.  
   ➤ Arquivo: `7-mapeamento-ordenacao.js`

8. **Agrupamento por Cliente**  
   Agrupa os totais de vendas por cliente usando `reduce`.  
   ➤ Arquivo: `8-agrupamento-por-cliente.js`

9. **Conversão Entre Formatos**  
   Converte entre array de pares `[chave, valor]` e objeto `{ chave: valor }`.  
   ➤ Arquivo: `9-conversao-formatos.js`

---

## 🚀 Como Executar os Exercícios

1. **Pré-requisito:** Tenha o [Node.js](https://nodejs.org/) instalado na máquina.
2. **Clone o repositório:**
   ```bash
   git clone https://github.com/LucasBagolin/JS-Learning.git
3. **Acesse a pasta:**
   ```bash
   cd JS-Learning/Exercicios
3. **Execute um dos arquivos com:**
   ```bash
   node nome-do-arquivo.js

---

## 🛠️ Tecnologias e Ferramentas

O projeto foi desenvolvido com as seguintes tecnologias:

- **JavaScript (Node.js)** — Ambiente de execução do JavaScript no servidor.
- **Node Package Manager (npm)** — Utilizado para gerenciamento de dependências.
- **prompt-sync** — Biblioteca para entrada de dados via terminal (usada no exercício de adivinhação com `while`).
