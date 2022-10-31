const arrayPeople = [

{nome : 'Alberto', cognome : 'Baglivi', età : '31'},

{nome : 'Gino', cognome : 'Pasticcino', età : '50'},

{nome : 'Pino', cognome : 'LoSurdo', età : '60'},

{nome : 'Tommaso', cognome : 'Caniggia', età : '16'},

{nome : 'Fabrizio', cognome : 'Mastrotta', età : '15'},

{nome : 'Aldo', cognome : 'Baglio', età : '18'},

{nome : 'Franco', cognome : 'Franchi', età : '17'},
]; 

console.log(arrayPeople)



const newArrayPeople = []; 


for(let i = 0 ; i < arrayPeople.length ; i++){

    let newObj = {
        nome : '', 
        cognome : '', 
        età : '',
        descrizione : '' 
       
       }; 
       
    newObj.nome = arrayPeople[i].nome
    newObj.cognome = arrayPeople[i].cognome
    newObj.età = arrayPeople[i].età
    newObj.descrizione = `${newObj.nome} ${newObj.cognome} `

    if(arrayPeople[i].età >= 18){
      
        newObj.descrizione += 'può guidare'

    }else{
        newObj.descrizione += 'non può guidare'
    }

    newArrayPeople.push(newObj)

}


console.log(arrayPeople)

console.log(newArrayPeople)