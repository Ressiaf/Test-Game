export function devolverString( str ) {
    return str.toString( )
}

export function suma( x , y ) {
    return x + y ;  
}

export function resta( x , y ) {
    return x - y;
}

export function multiplica( x , y ) {
    return x * y
}

export function divide( x , y ) { 
    return x / y;
}

export function sonIguales( x , y ) {  
    return  x === y
}

export function tienenMismaLongitud( str1, str2 ) {  
    return str1.length === str2.length;
}

export function menosQueNoventa( num ) {  
    return num < 90
}

export function mayorQueCincuenta(num) {  
    return num > 50
}

export function obtenerResto(x, y) {  
    return x % y;
}

export function esPar(num) {
    return num % 2 === 0
}

export function esImpar(num) {  
    return num % 2 === 1
}

export function elevarAlCuadrado(num) {  
    return num*num
}

export function elevarAlCubo(num) { 
    return num*num*num
}

export function elevar(num, exponent) {  
    return Math.pow(num, exponent)
}

export function redondearNumero(num) {  
    return Math.round(num)
}

export function redondearHaciaArriba(num) { 
    return Math.ceil(num)
}

export function numeroRandom( ) {  
    return Math.random()
}

export function esPositivo( num ) {
    if (Math.sign(num) === 1) {
        return "Es positivo";
    } if (Math.sign(num) === -1) {
        return "Es negativo";
    } else return false;
}

export function agregarSimboloExclamacion(str) {  
    return str.toString() + "!";
}

export function combinarNombres(firstName, lastName) {
    return firstName + ' ' +  lastName
}

export function obtenerSaludo(name) {
    return 'Hola ' + name + '!'
}

export function obtenerAreaRectangulo( height, wide ) {  
  return height * wide 
}

export function retornarPerimetro(side){
  return side*4
}

export function areaDelTriangulo(base, height){
  return (base * height) / 2
}

export function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares.
  return (euro * 1.2)
}

export function esVocal(  words  ){
    const vocales = ['a' , 'e' , 'i' ,'o' ,'u']
    if ( words.length > 1 || vocales.indexOf( words ) === -1 ) {return "Dato incorrecto"} 
    else {return "Es vocal"}
}
