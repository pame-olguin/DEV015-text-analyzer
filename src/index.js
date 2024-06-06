import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textBox = document.querySelector('textarea[name="user-input"]');

const liWordCount = document.querySelector('li[data-testid="word-count"]');

const liCharCount = document.querySelector('li[data-testid="character-count"]');

const liCharNoSpacesCount = document.querySelector('li[data-testid="character-no-spaces-count"]');

const liNumberCount = document.querySelector('li[data-testid="number-count"]');

const liNumberSum = document.querySelector('li[data-testid="number-sum"]');

const liAverage = document.querySelector('li[data-testid="word-length-average"]');

textBox.addEventListener('input',function(){

    liWordCount.textContent='Palabras :'+analyzer.getWordCount(this.value);

    liCharCount.textContent='Caracteres :'+analyzer.getCharacterCount(this.value);
    
    liCharNoSpacesCount.textContent='Caracteres sin espacios :'+analyzer.getCharacterCountExcludingSpaces(this.value);

    liNumberCount.textContent='Números :'+analyzer.getNumberCount(this.value);

    liNumberSum.textContent='Suma Números :'+analyzer.getNumberSum(this.value);

    liAverage.textContent = 'Promedio Longitud :'+analyzer.getAverageWordLength(this.value);

});

const botonReset = document.getElementById("reset-button");

botonReset.addEventListener('click',function(){

    textBox.value='';
   
    liWordCount.textContent='Palabras :0';

    liCharCount.textContent='Caracteres :0';
    
    liCharNoSpacesCount.textContent='Caracteres sin espacios :0';

    liNumberCount.textContent='Números :0';

    liNumberSum.textContent='Suma Números :0';

    liAverage.textContent = 'Promedio Longitud :0';
});

