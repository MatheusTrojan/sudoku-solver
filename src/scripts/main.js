import { resolver, insereValores, preencherValores, limpaValores } from "./resolvedor.js"
import { criaTabuleiro } from "./tabuleiro.js"

const botaoResolver = document.querySelector("#botao-resolver")
const botaoLimpar = document.querySelector("#botao-limpar")

function alertaInvalido(){
    swal("Esse jogo está inválido!", "","warning", {
        button: "Continuar",      
    });
}

function principal() {
    criaTabuleiro()
    botaoResolver.addEventListener('click', () => {
        insereValores()
        if(resolver()) {
            preencherValores()
        } else {
            alertaInvalido()
        }
    })

    botaoLimpar.addEventListener('click', () => limpaValores())
}
principal()