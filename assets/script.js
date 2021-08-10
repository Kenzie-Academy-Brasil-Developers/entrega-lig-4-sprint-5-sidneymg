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

function playGame() {
    createBoard();
    const board = document.querySelectorAll('.coluna');
    const boardArr = [...board];
    let cont = 0;
    let validCont = 0;

    boardArr.forEach((button)=>{
        
        button.addEventListener('click', function(){
            let checkColumn = button.id;
            let lastBox = document.getElementById(`${checkColumn}1`);
            cont++;
            
            if (lastBox.childElementCount === 1){
                cont = validCont;
            }

            else if (cont === 1){
                
                for (let i = 6; i >= 1; i--){
                    let divCheck = document.getElementById(`${checkColumn}${i}`);
                    if (divCheck.childElementCount === 0){
                        let disc = new createDiv;
                        disc.classList.add('disc');
                        divCheck.appendChild(disc);
                        console.log(divCheck)
                        break
                    }
                }
                validCont = cont;
            }

            else if (cont === 2){
                
                for (let i = 6; i >= 1; i--){
                    let divCheck = document.getElementById(`${checkColumn}${i}`);
                    if (divCheck.childElementCount === 0){
                        let disc = new createDiv;
                        disc.classList.add('disc', 'player2');
                        divCheck.appendChild(disc);
                        console.log(divCheck)
                        break
                    }
                }
                validCont = cont;
                cont = 0
            }

        })
    })
}
playGame()

