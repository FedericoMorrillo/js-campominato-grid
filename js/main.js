'use strict'
//funzioni
function cellsGenerator(tag, classname, content){
        const cella = document.createElement(tag);
        cella.classList.add(classname);
        cella.append(content);
        return cella;
}
//funzioni

//dichiarazioni
const board = document.querySelector('.board')
const buttonPlay = document.querySelector('.btn')

//scateniamo un evento on click sul bottone
buttonPlay.addEventListener('click', function(){

    //elimina le celle se precedentemente ho cliccato sul bottone
    board.innerHTML= '';

    //ciclo per creare le celle
   for(let i=1; i<=100; i++){
    const celle = cellsGenerator('div', 'cells', i);
    board.append(celle);

    //aggiunge un evento on click sulle celle
    celle.addEventListener('click', function(){
    this.classList.add('select-cell');
    console.log(i);
    })
   }
    
})
    