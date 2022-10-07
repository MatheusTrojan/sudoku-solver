import { resolver, insereValores, preencherValores, limpaValores } from "./resolvedor.js"
import { criaTabuleiro } from "./tabuleiro.js"

const botaoResolver = document.querySelector("#botao-resolver")
const botaoLimpar = document.querySelector("#botao-limpar")

function principal() {
    criaTabuleiro()
    botaoResolver.addEventListener('click', () => {
        insereValores()
        if(resolver()) {
            preencherValores()
        } else {
            alert("Esse jogo está inválido!")
        }
    })

    botaoLimpar.addEventListener('click', () => limpaValores())
}
principal()