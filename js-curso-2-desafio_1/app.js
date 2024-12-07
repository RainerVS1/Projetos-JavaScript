let titulo = document.querySelector(`h1`);
titulo.innerHTML = `Hora do desafio!`;

function verificadorConsole() {
    console.log (`O botão foi clicado`)
}

function verificadorAlert() {
    console.log (`Eu amo Rainer!`)
}

function verificadorPrompt() {
    let nomeDacidade = prompt("Digite o nome de uma cidade do Brasil:")
    alert(`Estive em ${nomeDacidade} e lembrei de você`)
}

function verificadorSoma() {
    let Pnumero = parseInt(prompt(`Digite o primeiro número:`));
    let Snumero = parseInt(prompt(`Digite o segundo número:`));
    let resultado = Pnumero + Snumero;
    alert(`${Pnumero} + ${Snumero} = ${resultado}`)
}
    
