// Tipos de datos primitivos

const { isJsxNamespacedName } = require("typescript");

let nombre = "james"; // declaramos e inicializamos la varibale;

let edad = 18;

let mayorEdad = true;

let estatura;

console.log(typeof nombre)

console.log(typeof edad)
console.log(typeof mayorEdad)
console.log(typeof estatura)


// TIPOS DE DATOS COMPLEJOS

// array es una lista
let frutas = ['Pera','Manzana','Melón'];

// objeto es literal como un diccionario en python

let auto={
    modelo: 2023,
    marca: "chevrolet",
    color: "negro",
    cilindraje: 2100,
    tipo: "camioneta"
}

// concadenando variables

console.log('bienvenido usuario '+ nombre + ' su edad es ' + edad + ' su fruta favorita es ' + frutas[1] + 'su auto es un '+ auto)


//estructuras de control condicional

console.log("----------------------------------------")

if (edad >25) {
    console.log("Es un adulto")    
}
else if(edad >18 ){
    console.log("esta re chinche mai")
}
else if (edad > 10){
    console.log("vaya a que le den tetero")
}
else{
    console.log("Es un Joven")
}

let tipoSuscripcion = "Gold"

//este else if es re god 

switch (tipoSuscripcion) {
    case 'Basico':
        console.log("muy suave o pobre")
        
        break;
    case 'Platinum':
        console.log("el puto amo si tiene presupuesto")
        
        break
    case 'Gold':
        console.log("Tienes Dinero bro que pro eres")

        break
    default:
        console.log("no existe este plan bro")
        break;
}

// estructura de control de bucles


let contador = 0;

while (contador <11){
    console.log ("este es el numero " + contador)
   contador = contador + 1;
   
    
}

//el let es para definir la variable q es igual a 0, el i<101 es la condicion y lo ultimo es literalmente la suma bro jaj

for (let i = 0; i<101 ;i=i+5){
    console.log("vamos sumando bro con el for " + i)
}

for (let i = 100; i>0 ;i=i-10){
    console.log("vamos restando bro con el for " + i)
}



