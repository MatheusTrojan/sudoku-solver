export function criaTabuleiro () {
    const tabuleiroSudoku = document.querySelector("#tabuleiro")

    for (var i = 0; i < 81; i++) {
        const elementoInput = document.createElement("input")

        elementoInput.setAttribute("type", "number");
        elementoInput.setAttribute("min", "1");
        elementoInput.setAttribute("max", "9");
        elementoInput.classList.add("casa");

        if (
            ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2 || i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
            ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && (i > 27 && i < 53)) ||
            ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2 || i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)
        ) {
            elementoInput.classList.add("casa__diferente")
        }

        tabuleiroSudoku.appendChild(elementoInput)
    }
}

