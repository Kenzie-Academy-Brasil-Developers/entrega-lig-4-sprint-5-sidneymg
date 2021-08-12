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
    [14,23,32,41], 
    [15,24,33,42],
    [24,33,42,51], 
    [16,25,34,43], 
    [25,44,43,52], 
    [34,43,52,61], 
    [26,35,44,53], 
    [35,44,53,62], 
    [44,53,62,71], 
    [36,45,54,63], 
    [45,54,63,72], 
    [46,55,64,73],
    [74,63,52,41],
    [75,64,53,42],
    [64,53,42,31],
    [76,65,54,43],
    [65,54,43,32],
    [54,43,32,21],
    [66,55,44,33],
    [55,44,33,22],
    [44,33,22,11],
    [56,45,34,23],
    [45,34,23,12],
    [46,35,24,13]
];

function createDiv() {
    let div = document.createElement('div');
    return div;
}

function victoryNoticeP1(){
    let victory = document.createElement('div');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    
    victory.setAttribute('id','vitoria2');
    victory.appendChild(h2);
    victory.appendChild(h3)
    divtest.appendChild(victory);

    h2.innerText = 'o império espera por você!'
    h3.innerText = 'Click para jogar novamente'

    victory.addEventListener('click', function(){
        victory.parentNode.removeChild(victory)
        location.reload();
    })
}
function victoryNoticeP2(){
    let victory = document.createElement('div');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    
    victory.setAttribute('id','vitoria1');
    victory.appendChild(h2);
    victory.appendChild(h3);
    divtest.appendChild(victory);

    h2.innerText = 'esteja a força com você!'
    h3.innerText = 'Click para jogar novamente'

    victory.addEventListener('click', function(){
        victory.parentNode.removeChild(victory)
        location.reload();
    })
}
function draw(){
    let empate = document.createElement('div');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    
    empate.setAttribute('id','empate');
    empate.appendChild(h2);
    empate.appendChild(h3);
    divtest.appendChild(empate);

    h2.innerText = 'Empate!'
    h3.innerText = 'Click para jogar novamente'

    empate.addEventListener('click', function(){
        empate.parentNode.removeChild(empate)
        location.reload();
    })
}

function createBoard(){
    for (let i = 1; i <= 7; i++){
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
                if (checkWin === 4){
                    victoryNoticeP1();
                }
                if (checkWin2 === 4){
                    victoryNoticeP2();
                }
                if (boxPlayer1.length + boxPlayer2.length === 42){
                    draw();
                }
            }
        })
    })
}
playGame();