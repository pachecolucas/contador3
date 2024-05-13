let numero = 10

function add() {
    numero = numero + 1
    atualizaTela()
}

function sub() {
    numero = numero - 1
    atualizaTela()
}

function atualizaTela() {
    document.querySelector("h2").innerText = numero
    document.querySelector("strong").innerText = numero
}

atualizaTela()