var ir = window.document.getElementById("ir")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var voltar = window.document.getElementById("voltar")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display: flex"
    ir.style = "display:none"
    voltar.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display: none"
    ir.style = "display:flex; margin-top:55px"
    voltar.style = "display:none"
}