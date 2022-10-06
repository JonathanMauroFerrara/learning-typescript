let numero: number = 5 //type assignment
let stringa: string = 'stringa'
let booleano: boolean = true

const oggetto = {
    nome: 'Jonathan',
    cognome: 'Ferrara'
}

//variabili

let first:number = 5

function sum(num1, numb2 = 3){
    return num1 + numb2;
}

const obj: {} = {
    nome: 'Jonathan',
    cognome: 'Ferrara'
}

let obj2 : {
    nome: string,
    cognome: string,
    indirizzo: {
        via: string
        cap: number,
        civico: number,
        citta: string
    }
}

obj2 = {
    nome: 'Jonathan',
    cognome: 'Peppuzzo',
    indirizzo: { via: 'roma 4', cap: 21000, civico: 30, citta: 'Palermo' }
}

obj2.nome = 'Eugenio'


//funzioni
function getData(data: {id: number, username: string; password: string}){
    return data
}

console.log(getData({id: 1, username: 'Ferrara', password:'Password'}))

//dando il :number alla funzione mi aspetto che ritorni SEMPRE un numero
function func1(num1: number, num2 = 1): number{
    console.log(num1 + num2);

    return num1 + num2;
}

func1(1, 9)


function uselessStuff(x: string): void{
    console.log(x);
}


//array
const arrayOfNumbs: number[] = [1,2,3]

const arrayOfStrings: string[] = ['1','2','3']

const arrayGeneric: any[] = [1, '2', {}]

//tuple 
//sono array che contengono un numero definito di elementi e di tipo.

const tupla: [number, number] = [1, 2] // solo 2 elementi di tipo number
const tuplaString: [string, string, number] = ["string1", "string2", 1] // solo 3 elementi di tipo String
const tuplaAny: [any, any, any] = [1, "string", {}]


//Any

let prova: any = 'Qualsiasi cosa, oggetto, array, booleano, ecc..'

//Union

let unione: number | string | string[] = ["hello", "there"]


//Custom Type

type Persona ={
    nome: string,
    cognome: string,
    /* eta: number,
    indirizzo: string,
    coloriPreferiti: string[] */
}

let persona: Persona

persona = {
    nome: 'Jonathan',
    cognome: 'Ferrara'
}

function trovaPersona(persona: Persona){
    console.log(persona)
}

trovaPersona({nome: 'Jonathan', cognome: 'Ferrara'})


//Enum (enumerazione)

enum Ruolo{
    ADMIN,
    USER = 1000,
    GUEST = 'guest'
}

const esempio = {
    nome: 'Jonathan',
    cognome: 'Ferrara',
    ruolo: Ruolo.ADMIN
}

if(esempio.ruolo === Ruolo.GUEST){
    console.log("guest") //false
}else{
    console.log("altro") // true
}

