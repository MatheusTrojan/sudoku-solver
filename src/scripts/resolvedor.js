let tabuleiro = []

export function insereValores() {
    const inputs = document.querySelectorAll('input')
    
    inputs.forEach((input) => {
        if(input.value) {
            tabuleiro.push(parseInt(input.value))
            input.classList.add('input-el') 
        } else {
            tabuleiro.push(0)
            input.classList.add('empty-el')
        }
    })
}
        // index vira linha e coluna
const indexParaLC = (index) => {
    return {linha: Math.floor(index/9), col: index % 9}
}

        // linha e coluna viram index
const linhaColParaIndex = (linha, col) => ((linha * 9) + col)    


const jogadaAceita = (tabuleiro, index, value) => {
    let { linha, col } = indexParaLC(index)
    for (let r = 0; r < 9; ++r) {
        if (tabuleiro[linhaColParaIndex(r, col)] == value) return false
    }
    for (let c = 0; c < 9; ++c) {
        if (tabuleiro[linhaColParaIndex(linha, c)] == value) return false
    }

    let r1 = Math.floor(linha / 3) * 3
    let c1 = Math.floor(col / 3) * 3
    for (let r = r1; r < r1 + 3; ++r) {
        for (let c = c1; c < c1 + 3; ++c) {
            if (tabuleiro[linhaColParaIndex(r, c)] == value) return false
        }
    }
    return true
}

const jogadas = (tabuleiro, index) => {
    let jogadas = []
    for (let value = 1; value <= 9; ++value) {
        if (jogadaAceita(tabuleiro, index, value)) {
            jogadas.push(value)
        }
    }
    return jogadas
}

const melhorJogada = (tabuleiro) => {
    let index, jogada, melhorPalpite = 100
    for (let i = 0; i < 81; ++i) {
        if (!tabuleiro[i]) {
            let j = jogadas(tabuleiro, i)
            if (j.length < melhorPalpite) {
                melhorPalpite = j.length
                jogada = j
                index = i
                if (melhorPalpite == 0) break
            }
        }
    }
    return { index, moves: jogada }
}

export const resolver = () => {
    let { index, moves } = melhorJogada(tabuleiro) 
    if (index == null) return true          
    for (let m of moves) {
        tabuleiro[index] = m                  
        if (resolver()) return true        
    }
    tabuleiro[index] = 0
    return false
}


export function preencherValores() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input, i) => input.value = tabuleiro[i])
}