const boxes = document.querySelectorAll(".boxes")
const spinner = document.getElementById("spinner")
const ganador = document.getElementById("ganaste")

const items = ['🍌', '🍔', '🌭', '🍟']


const obtenerAzar = () => {
    return Math.floor(Math.random() * 3)
};

const obtenerItemAzaroso = (items) => {
    return items[obtenerAzar()]
}

const chequearJackpot = () => {
    for (let i = 0; i < 3; i++) {
        if (arrayAzar[i].textContent === arrayAzar[i + 1].textContent && arrayAzar[i + 1].textContent === arrayAzar[i + 2].textContent) {
            ganador.classList.remove("hidden")
        }
    }
}

spinner.onclick = () => {
    const arrayAzar = [];

    for (let i = 0; i < 3; i++) {
        arrayAzar.push(obtenerItemAzaroso(items))
    }

    for (let i = 0; i < 3; i++) {
        boxes[i].textContent = arrayAzar[i];
    }

    chequearJackpot()
}

