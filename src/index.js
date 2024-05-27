import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textBox = document.querySelector('textarea[name="user-input"]');

const liWordCount = document.querySelector('li[data-testid="word-count"]');

const liCharCount = document.querySelector('li[data-testid="character-count"]');

const liCharNoSpacesCount = document.querySelector('li[data-testid="character-no-spaces-count"]');



textBox.addEventListener('input',function(){

    liWordCount.textContent='Palabras :'+analyzer.getWordCount(this.value);

    liCharCount.textContent='Caracteres :'+analyzer.getCharacterCount(this.value);
    
    liCharNoSpacesCount.textContent='Caracteres sin espacios :'+analyzer.getCharacterCountExcludingSpaces(this.value);


});

const botonReset = document.getElementById("reset-button");

botonReset.addEventListener('click',function(){

    textBox.value='';
    
});

