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
    
        for (let j = 1; j <= 7; j++){
            let divLinha = new createDiv;
            divColuna.appendChild(divLinha);
            divLinha.setAttribute('id', `${i}${j}`);
            divLinha.classList.add('linha');

            if(j === 7){
                divLinha.classList.add('ocupado')
            }
        }
    }
}

createBoard();
