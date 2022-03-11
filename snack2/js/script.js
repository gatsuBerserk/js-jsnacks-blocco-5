/**
 *
 *
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.

 *
 */  

const auto= [
   {
      marca:"DS", 
      modello: "DS3", 
      alimentazione: "benzina" 
   }, 
   {
      marca:"Renault", 
      modello: "Clio", 
      alimentazione: "diesel" 
   }, 
   {
      marca:"Alfa Romeo", 
      modello: "Giulia", 
      alimentazione: "ibrid" 
   }, 

]; 
// Usiamo filter in qunato dobbiamo solo "filtrare" il nostro array di oggetti
const benzina= auto.filter((element) =>{
   if ( element.alimentazione == "benzina"){
      return true
   }else{
      return false
   }
}); 
console.table(benzina)
const diesel= auto.filter((element) =>{
   if ( element.alimentazione == "diesel"){
      return true
   }else{
      return false
   }
}); 
console.table(diesel)  
const altro=auto.filter((element) =>{
   if ( (element.alimentazione != "benzina") && (element.alimentazione !="diesel")){
      return true
   }else{
      return false
   }
}); 
console.table(altro) 
console.table(auto)

   
