/**
 * 
 *  Crea un array di oggetti che rappresentino delle persone.
    Ogni persona ha un nome, un cognome e un'età.
    
    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */

    const person=[
        {
            nome : " Carmine",
            cognome : "Passante",
            "età" : 33,  
        }, 
        {
            nome : " Erica",
            cognome : "Passante",
            "età" : 30,  
        }, 
        {
            nome : " Dino",
            cognome : "Mussuto",
            "età" : 31,  
        }, 
        {
            nome : " Angelo",
            cognome : "Venetucci",
            "età" : 17,  
        }, 
    ] 

    const licenze= person.filter( (element) => {
        if (element["età"] >= 18){
             console.log (` 
            ${element.nome} può guidare perchè ha ${element["età"]} anni`);
            return true 
        }else{
            console.log(`
            ${element.nome} non può guidare perchè minorenne ${element["età"]} anni`)
            return false
        }
    });

    console.table(licenze)