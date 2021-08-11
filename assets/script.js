let divtest = document.getElementById('tela-test');

function createDiv (){
    let div = document.createElement('div');
    return div;
}

function createBoard(){
    for (let i = 1; i <= 7; i++){
        let divColuna = new createDiv;
        divtest.appendChild(divColuna);
        divColuna.setAttribute('id', `${i}`);
        divColuna.classList.add('coluna');
        for (let j = 1; j <= 6; j++){
            let divLinha = new createDiv;
            divColuna.appendChild(divLinha);
            divLinha.setAttribute('id', `${i}${j}`);
            divLinha.classList.add('linha');
        }
    }   
}

function lasChild(){
    let childCounter = document.getElementById('71');
    if(childCounter.childElementCount !== 1){

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
    

    boardArr.forEach((button)=>{
        button.addEventListener('click', function(){

        


            cont++


            let checkColumn = button.id;

            if (cont === 1){
                for (let i = 6; i >= 1; i--){
                    let divCheck = document.getElementById(`${checkColumn}${i}`)
                    if (divCheck.childElementCount === 0){
                        let disc = new createDiv;
                        disc.classList.add('disc');
                        divCheck.appendChild(disc);
                        console.log(divCheck);
                        break
                    }
                }
                console.log(checkColumn);
                console.log(button);
         
            }

            if (cont === 2){
                
                for (let i = 6; i >= 1; i--){
                    let divCheck = document.getElementById(`${checkColumn}${i}`)
                    if (divCheck.childElementCount === 0){
                        let disc = new createDiv;
                        disc.classList.add('disc', 'player2');
                        divCheck.appendChild(disc);
                        console.log(divCheck);
                        break
                    }
                }
                cont = 0;
            }

            for(let i = 0; i < boxesArr.length; i++){
                let boxCheck = boxesArr[i].firstChild;
                if (boxesArr[i].childElementCount === 1 && !boxPlayer1.includes(boxesArr[i].id) && boxCheck.className === "disc player1"){
                    boxPlayer1.push(boxesArr[i].id);
                }
                if (boxesArr[i].childElementCount === 1 && !boxPlayer2.includes(boxesArr[i].id) && boxCheck.className === "disc player2"){
                    boxPlayer2.push(boxesArr[i].id);
                }
            }

            console.log(boxPlayer1);
            console.log(boxPlayer2);

        })
    })    
}

playGame();
