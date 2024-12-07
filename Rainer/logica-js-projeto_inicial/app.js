alert("Bem vindo ao contador de livros liberais!");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log (numeroSecreto);
let chute = prompt("Escolha um número entre 1 e 100");
let tentativas = 1

// Enquanto chute não foir igual ao N.S
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 100");
    // se o chute for igual ao número secreto
    if (numeroSecreto == chute ) {
        break; 
    } else {
        if (chute > numeroSecreto) {
            alert (`${chute}? CALMA SEU LEITOR! comece com um pouco menos`);
        } else {
            alert(`${chute} é Muito pouco, seja mais ambicioso! `);
        }
    //tentativas
    tentativas++;   
    } 
}

let palavratentativas = tentativas > 1 ? `tentativas` : `tentativa`;
alert(`Parabéns! Você descobriu a quantidade de livros liberis que terá que lê, ${numeroSecreto} com ${tentativas} ${palavratentativas}.`)
