    // No cambies los nombres de las funciones.

export function devolverPrimerElemento(array) {
    return array[0];
}

export function devolverUltimoElemento(array) {
    return array.pop();
}

export function obtenerLargoDelArray(array) {
    return array.length;
}

export function incrementarPorUno(array) {
    return array.map((n) => n + 1);
}

export function agregarItemAlFinalDelArray(array, element) {
    array.push(element)
    return array
}

export function agregarItemAlComienzoDelArray(array, element) {
    array.unshift(element)
    return array 
}

export function dePalabrasAFrase(words) {
    return words.join(" ")
}

export function arrayContiene(array, element) {
    if (array.includes(element) ){return true} 
    else {return false}
}

export function agregarNumeros(numbers) {
    const reducer = ( (a , b) => a + b );
    return numbers.reduce(reducer);
}

export function promedioResultadosTest(testScorest) {
    const reducer = ( (a , b) => a + b );
    return( testScorest.reduce(reducer) / testScorest.length )
}

export function numeroMasGrande(numbers) {
    return Math.max(...numbers)
}

export function cuentoElementos(array) {
    return array.filter( n => n >18).length;
}

export function diaDeLaSemana(numberOfDays) {
    if (numberOfDays >= 2 && numberOfDays <= 5 ) { return "Es dia Laboral" }
    else {return "Es fin de semana"}
}

export function empiezaConNueve(number) {
    if ( String(number) [0] == 9 ) { return true }
    else {return false}
}

export function todosIguales(array) {
    const reducer = ( (n) => n == array[0])
    return array.every(reducer)
}

    export function mesesDelAño(array) {
        const months= ["Marzo","Noviembre","Enero"]
        const reducer =( mes => array.includes(mes) )
            if ( months.every(reducer) ) {return months}
            else { return "No se encontraron los meses pedidos"}
    }

export function mayorACien(array) {
    const reducer = ((num)=>num>100);
    return array.filter(reducer)
}

export function breakStatement(number) {
    let array = [ ]
    let i = 0
    let num = number

    while( i <10 && i !=num ){
        num +=2
        array.push(num)
        i++
    }

    if(i==10) {return array}
    else {return "Se interrumpió la ejecución"}
}

export function continueStatement(number) {
    let array = [ ]
    let num = number

    for ( let i = 0;  i < 10;  i++ ) {
        if( i == 5 ) continue;
        num += 2
        array.push(num)
    }
    
    return array;
}
