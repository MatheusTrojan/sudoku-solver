export function tabuleiro () {
    const tabuleiroSudoku = document.querySelector("#tabuleiro")
    const casas = 81

    for (var i = 0; i < casas; i++) {
        const elementoInput = document.createElement("input")

        elementoInput.setAttribute("type", "number");
        elementoInput.setAttribute("min", "1");
        elementoInput.setAttribute("max", "9")

        // if (
        //     ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
        //     ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
        //     ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && (i > 27 && i < 53)) ||
        //     ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
        //     ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)
        // ) {
        //     elementoInput.classList.add('odd-section')
        // }

        if (i == 0 || i == 1 || i == 2) {
            elementoInput.classList.add('diferente')
        }

        tabuleiroSudoku.appendChild(elementoInput)
    }
}

