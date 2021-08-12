let divtest = document.getElementById('tela-test');
const posicoesPossiveis = [
    // vertical
    [11, 12, 13, 14],
    [12, 13, 14, 15],
    [13, 14, 15, 16],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [31, 32, 33, 34],
    [32, 33, 34, 35],
    [33, 34, 35, 36],
    [41, 42, 43, 44],
    [42, 43, 44, 45],
    [43, 44, 45, 46],
    [51, 52, 53, 54],
    [52, 53, 54, 55],
    [53, 54, 55, 56],
    [61, 62, 63, 64],
    [62, 63, 64, 65],
    [63, 64, 65, 66],
    [71, 72, 73, 74],
    [72, 73, 74, 75],
    [73, 74, 75, 76],
    //horizontal
    [11, 21, 31, 41],
    [21, 31, 41, 51],
    [31, 41, 51, 61],
    [41, 51, 61, 71],
    [12, 22, 32, 42],
    [22, 32, 42, 52],
    [32, 42, 52, 62],
    [42, 52, 62, 72],
    [13, 23, 33, 43],
    [23, 33, 43, 53],
    [33, 43, 53, 63],
    [43, 53, 63, 73],
    [14, 24, 34, 44],
    [24, 34, 44, 54],
    [34, 44, 54, 64],
    [44, 54, 64, 74],
    [15, 25, 35, 45],
    [25, 35, 45, 55],
    [35, 45, 55, 65],
    [45, 55, 65, 75],
    [16, 26, 36, 46],
    [26, 36, 46, 56],
    [36, 46, 56, 66],
    [46, 56, 66, 76],
    // diagonal
    [16, 25, 34, 43],
    [26, 35, 44, 53],
    [36, 45, 54, 63],
    [46, 55, 65, 73],
    [15, 24, 33, 42],
    [25, 34, 43, 52],
    [35, 44, 53, 62],
    [45, 54, 63, 72],
    [14, 23, 32, 41],
    [24, 33, 42, 51],
    [34, 43, 52, 61],
    [44, 53, 62, 71],
    [76, 65, 54, 45],
    [66, 55, 44, 33],
    [56, 45, 34, 23],
    [46, 35, 24, 13],
    [75, 64, 53, 42],
    [65, 54, 43, 32],
    [55, 44, 33, 22],
    [45, 34, 23, 12],
    [74, 63, 52, 41],
    [64, 53, 42, 31],
    [54, 43, 32, 21],
    [44, 33, 22, 11],
];

function createDiv() {
    let div = document.createElement('div');
    return div;
}

function createBoard() {
    for (let i = 1; i <= 7; i++) {
        let divColuna = new createDiv;
        divtest.appendChild(divColuna);
        divColuna.setAttribute('id', `${i}`);
        divColuna.classList.add('coluna');
        for (let j = 1; j <= 6; j++) {
            let divLinha = new createDiv;
            divColuna.appendChild(divLinha);
            divLinha.setAttribute('id', `${i}${j}`);
            divLinha.classList.add('linha');
        }
    }
}

function playGame() {
    createBoard();
    const board = document.querySelectorAll('.coluna');
    const boardArr = [...board];
    const boxes = document.querySelectorAll('.linha');
    const boxesArr = [...boxes];
    let boxPlayer1 = [];
    let boxPlayer2 = [];
    let cont = 0;
    let validCont = 0;


    boardArr.forEach((button) => {
        button.addEventListener('click', function () {
            let checkColumn = button.id;
            let lastBox = document.getElementById(`${checkColumn}1`);
            cont++;

            if (lastBox.childElementCount === 1) {
                cont = validCont;
            }

            if (cont === 1) {

                for (let i = 6; i >= 1; i--) {
                    let divCheck = document.getElementById(`${checkColumn}${i}`);
                    if (divCheck.childElementCount === 0) {
                        let disc = new createDiv;
                        disc.classList.add('disc', 'player1');
                        divCheck.appendChild(disc);
                        console.log(divCheck);
                        break
                    }
                }
                validCont = 1;
            }

            if (cont === 2) {

                for (let i = 6; i >= 1; i--) {
                    let divCheck = document.getElementById(`${checkColumn}${i}`);
                    if (divCheck.childElementCount === 0) {
                        let disc = new createDiv;
                        disc.classList.add('disc', 'player2');
                        divCheck.appendChild(disc);
                        console.log(divCheck);
                        break
                    }
                }
                validCont = 2;
                cont = 0
            }

            for (let i = 0; i < boxesArr.length; i++) {
                let boxCheck = boxesArr[i].firstChild;
                if (boxesArr[i].childElementCount === 1 && !boxPlayer1.includes(Number(boxesArr[i].id)) && boxCheck.className === "disc player1") {
                    boxPlayer1.push(Number(boxesArr[i].id));
                }
                if (boxesArr[i].childElementCount === 1 && !boxPlayer2.includes(Number(boxesArr[i].id)) && boxCheck.className === "disc player2") {
                    boxPlayer2.push(Number(boxesArr[i].id));
                }
            }

            for (let i = 0; i < posicoesPossiveis.length; i++) {
                let check = posicoesPossiveis[i];
                let checkWin = 0;
                let checkWin2 = 0;
                for (let j = 0; j < check.length; j++) {
                    if (boxPlayer1.includes(check[j])) {
                        checkWin++
                    }
                    if (boxPlayer2.includes(check[j])) {
                        checkWin2++
                    }
                }
                if (checkWin === 4) {
                    let x = document.getElementById('vitoria2');
                    x.classList.remove('vitoria2Class');
                    console.log('team vader!')
                }
                if (checkWin2 === 4) {
                    let x = document.getElementById('vitoria1');
                    x.classList.remove('vitoria1Class');
                    console.log('Você venceu!')
                }
                if (boxPlayer1.length + boxPlayer2.length === 42){
                    let empate = document.getElementById('empate');
                    empate.classList.remove('empateClass');
                    console.log('team empate!')

                }
            }

            console.log(boxPlayer1);
            console.log(boxPlayer2);
        })
    })
}

playGame();