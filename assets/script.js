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

function playGame(){
    createBoard();

    const board = document.querySelectorAll('.coluna');
    const boardArr = [...board];
    
    boardArr.forEach((button)=>{
        
        button.addEventListener('click', function(){
            let checkColumn = button.id
          
            for (let i = 6; i >= 1; i--){
                let divCheck = document.getElementById(`${checkColumn}${i}`)
                if (divCheck.childElementCount === 0){
                    let disc = new createDiv;
                    disc.classList.add('disc');
                    divCheck.appendChild(disc);
                    console.log(divCheck)
                    break
                }
            }
            console.log(checkColumn);
            console.log(button);
        })
    })
}

playGame()