//ejercio 1 
var precioVino = 200.3;

//var total = precioVino*3;
var total= precioVino*100*3/100;

console.log(total);
//Ejercicio 2
var precioVino = 200.3;

//var total = precioVino*3;
var total=Math.round(precioVino*100*3)/100;
var totalStr=total.toFixed(2);
var total2= parseFloat(totalStr);


console.log(total);

console.log(totalStr);

console.log(typeof(totalStr));

console.log(total2)

//ejercicio 3

var pizza = 8;
var persona= 2;

var cantidadPorcionsPorPersonas= 8/2 

console.log(cantidadPorcionsPorPersonas);
 
//ejercicio 4
const PI = 3.1416;
 
PI+=1;

var nombre= "Max", edad = 29;

function imprimirEdad(){
    console.log(`${nombre} tiene ${edad} años `);
}
    
imprimirEdad();

//ejercicio 5 

var nombre= "Max", edad = 29;

function imprimirEdad(n,e){
    console.log(`${n} tiene ${e} años `);
}
    
imprimirEdad(nombre,edad);
imprimirEdad("Luis", 25);
imprimirEdad("Ana", 23);

//ejercicio 6 

function sumar(a,b){
    var total=a+b;
    return total;
}
var totalSuma=sumar(14,15);
console.log(totalSuma);
//ejercicio objetos
var nombreMax="Max";

function imprimirNombreEnMayusculas(nombre){
    nombre=nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculas(nombreMax);

var persona={
    nombre: "Max",
    apellido: "Carrasco",
    edad:29
}

function imprimirNombreEnMayusculas(nombre){
    nombre=nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculas(persona.nombre);

var persona={
    nombre: "Max",
    apellido: "Carrasco",
    edad:29
}

function imprimirNombreEnMayusculas(obj){
    var name=obj.nombre.toUpperCase();
    console.log(name);
}

imprimirNombreEnMayusculas(persona);

var persona={
    nombre: "Max",
    apellido: "Carrasco",
    edad:29
}
var persona2={
    nombre: "Santi",
    apellido: "Caracol",
    edad:90
}

function imprimirNombreEnMayusculas(obj){
    var name=obj.nombre.toUpperCase();
    console.log(name);
}

imprimirNombreEnMayusculas(persona);
imprimirNombreEnMayusculas(persona2);

var persona={
    nombre: "Max",
    apellido: "Carrasco",
    edad:29
}
var persona2={
    nombre: "Santi",
    apellido: "Caracol",
    edad:90
}

function imprimirNombreEnMayusculas(obj){
    //var nombre= abj.nombre;
    var {nombre,apellido} = obj;
    console.log(nombre+ " " + apellido);
}

imprimirNombreEnMayusculas(persona);
imprimirNombreEnMayusculas(persona2);
//ejercicio 7
var persona={
    nombre: "Max",
    edad:27
}
var persona2={
    nombre: "Dario",
    edad:28
}

function imprimirNombreYEdad(obj){
    //var nombre= abj.nombre;
    var {nombre,edad} = obj;
    console.log("hola , me llamo "+ nombre+ " y tengo " + edad +" años ");
}

imprimirNombreYEdad(persona);
imprimirNombreYEdad(persona2);
