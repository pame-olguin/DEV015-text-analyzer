const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  
   let noSpace= text.trim();

   if( noSpace != ''){
    let words = noSpace.split(/\s+/);
    return words.length;
   }else{
    return 0;
   }
  
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
 
return text.length;

 
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
 
 
    let charNoSpace= 0;

    for(let c of text)
      {
          if( c!=' ' ){
              charNoSpace++;
          }
      }

      return charNoSpace;
 
 
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    
    let noSpace= text.trim();

    if (noSpace !== '') {
      let cleanedText = noSpace.replace(/[^\w\s]/g, '').replace(/\s+/g, ' ');
      let words = cleanedText.split(' ');
      let wordCount = words.length;
      let sumLength = 0;
    for(let i in words)
      {
          sumLength += words[i].length;
      }
      let avg = sumLength/wordCount;
      return Number(avg.toFixed(2));
   }else{
    return 0;
   }

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
   
    let regex = /[+-]?\d+(?:\.\d+)?/g;
    let numbers = text.match(regex);

    if( numbers )
    {
      return numbers.length;
    }
    else{
      return 0;
    }

  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

    let regex = /[+-]?\d+(?:\.\d+)?/g;
    let textNumbers = text.match(regex);

    let numberSum = 0;
    for(let i in textNumbers)
    {
      numberSum += parseFloat(textNumbers[i]);
    }

    return numberSum;
  },
};

export default analyzer;
