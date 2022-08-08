export function obtenerMayor(x, y) {
    return Math.max(x, y)
};

export function mayoriaDeEdad(age) {
    if (age >= 18) {return 'Allowed'} 
    else {return 'Not allowed'}
};
    
export function conection(status) {
    switch (status) {
        case (1): 
            return "Online"
        case (2): 
            return'Away'
        case (3) : 
            return'Offline'
        default:
            return'Offline'
    };
};  

export function saludo(language) {  
    switch (language) {
        case 'aleman': 
            return 'Guten Tag!'
        case 'ingles': 
            return'Hello!'
        case 'mandarin': 
            return'Ni Hao!'
        default:
            return'Hola!'
    };
};

export function colors(color) {  
    switch (color) {
        case 'blue':
            return `This is ${color}`;
        case 'red':
            return `This is ${color}`;
        case 'green':
            return `This is ${color}`;
        case 'orange':
            return `This is ${color}`;
        default:
            return 'Color not found';
    }
};

export function esDiezOCinco(num) {
    if (num == 5 || num== 10) { return true} 
    else { return false }
};

export function estaEnRango(num) {  
    if (num >= 21 && num <= 49) {return true; } 
    else { return false }
};

export function esEntero(num) {
    if (num == Math.round(num)) { return true } 
    else { return false }
};

export function fizzBuzz(num) {
    if (num % 5 === 0 && num % 3 === 0) {return "fizzbuzz"}
    if (num % 3 === 0) { return "fizz" } 
    if (num % 5 === 0) {return "buzz"} 
    else { return num }
};

export function operadoresLogicos(num1, num2, num3) {
    if (num1 === 0 || num2 === 0 || num3 === 0) { return "Error" } 
    if (num1 < num3 && num2 < num3) { return num3 + num1 }
    if ( Math.sign(num1) === -1 || Math.sign(num2) === -1 || Math.sign(num3) === -1 ) { return "Hay negativos" } 
    if (Math.max(num1, num2, num3) === num1 && Math.sign(num1) === 1) { return "Número 1 es mayor y positivo" } 
    else {return false}
};

export function esPrimo(num) {
    let root = Math.round(Math.sqrt(num));
    for (var i = 2; i <= root ; i++)
        if (num % i === 0) { return false }
        if (num <= 1) { return false } 
        else { return true }
};

export function esVerdadero(value){
    if (!value) {return "Soy falso"} 
    else { return "Soy verdadero"}
};

export function tablaDelSeis( ){
    const array = [ ];
    for (let x = 0; x <= 10; x++) {array.push( 6 * x )}
    return array;
};

export function tieneTresDigitos(num){
    if (num.toString().length === 3) {return true}
    else {return false}
};

export function doWhile(num) {  
    let cont = 1;
    let resp = 0
    do{resp = num + 5 * cont, cont++} while (cont <= 8)  
    return resp
}
