const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  
    const noSpace = text.trim();
    let wLength   = 0;

    if( noSpace !== '' ){
      const words = noSpace.split(/\s+/);
      wLength = words.length;
    }

    return wLength;
  
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
 
    let charNoSpace= 0;
    const punct = [' ','.',',','!',':',';','¡','{','}','[',']','(',')','/','?','¿','#','"',"'",'&','%','=','$','*','-','+','~','`','<','>'];

    for(const c of text)
    {
      if( !punct.includes(c) ){
        charNoSpace++;
      }
    }

    return charNoSpace;
 
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    
    const noSpace= text.trim();
    let numFixed = 0;

    if (noSpace !== '') {
      const cleanedText = noSpace.replace(/\s+/g, ' ');
      
      const words = cleanedText.split(' ');
      const wordCount = words.length;
      let sumLength = 0;
      for(const i in words)
      {
        sumLength += words[i].length;
      }
      const avg = sumLength/wordCount;
      numFixed = Number(avg.toFixed(2));
    }
  
    return numFixed;

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
   
    //let regex = /[+-]?\d+(?:\.\d+)?/g;
    const words = text.split(/\s+/);
    let countNumbers = 0;
    if( words )
    {
      for(let i=0; i<words.length; i++)
      {
        let w = words[i].trim();
        const dots = w.split('.');

        if( dots && dots.length>2 )
        {
          w = w.slice(0,w.lastIndexOf('.'));
        }

        if( w !== "" && !isNaN(w) )
        {
          countNumbers++;
        }
      }
      
    }

    return countNumbers;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

    const words = text.split(/\s+/);
    let sumNumbersFixed = 0;

    if( words )
    {
      let sumNumbers = 0;
      for(let i=0; i<words.length; i++)
      {
        let w = words[i].trim();
        const dots = w.split('.');

        if( dots && dots.length>2 )
        {
          w = w.slice(0,w.lastIndexOf('.'));
        }

        if( w !== "" && !isNaN(w) )
        {
          sumNumbers += parseFloat(w);
        }
      }

      const sumString = ""+sumNumbers;

      if( sumString.indexOf('.') >= 0 ){
        sumNumbersFixed = Number(sumNumbers.toFixed(1));
      }else{
        sumNumbersFixed = Number(sumNumbers);
      }
    }
  
    return sumNumbersFixed;
  },
};

export default analyzer;
