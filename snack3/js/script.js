/**
 * 
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

 * 
 */ 


    const names = ['pippo', 'PLUTO', 'Paperino'];
   //  Usiamo il metodo array.map in quanto dovremmo creare un nuovo array, copia del primo, modificato
    const newNames= names.map((element) =>{
       return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase(); 
    });

    console.table(newNames)