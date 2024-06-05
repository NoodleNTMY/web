/*
let resto = 0;
let dni = prompt('Introduzca un dni: ');

// Funcion la cual verifica que la letra del dni sea correcta.
function obtenerletraDNI (dni) {
    
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    resto = dni % 23;
    // Devuelve la letra que deberia tener la cadena de numeros dada. A pesar de que aparezca la variable dni, en la funcion entra el valor de "numero" de la funcion esDNIvalido
    return letras[resto];
}

//Funcion que verifica que la cadena de caracterers introducida en dni sea correcta.
function sintaxisValidaDNI (dni){
    //Crea una variable dniRegEx que verifica que: 1) la variable introducida tena 8 primeros caracteres numericos y 2) que el ultimo caracter sea una letra de la A a la Z.
    let dniRegEx = /^\d{8}[A-Z]$/;
    //Devuelve true o false dependiendo si la variable cumple la sintaxis dada anteriormente.
    return dniRegEx.test(dni);
}

//Funcion que verifica que la letra introducida coincida con el dni y que el dni sea una cadena de caracteres valida.
function esDNIvalido(dni) {
    //Primero analiza si la cadena de caracteres introducida coincide con como ha de ser para ser un dni.
    if (!sintaxisValidaDNI(dni)){
        return false;
    }
    //Al verificar que la sintaxis es buena, separa los numeros de las letras y ademas deja declarado que los primeros 8 valores de la cadena son numericos en base 10.
    let numero = parseInt(dni.substring(0,8), 10);
    let letra = dni.substring(8,9);

    //Por ultimo comprueba si la letra introducida es la que deberia ser llamando a la funcion obtenerletraDNI.
    if (letra != obtenerletraDNI(numero)){
        return false;
    }
    return true;
}

//Digo que resultado sea el outcome de esDNIvalido que sera true o false e imprimo por pantalla.
let resultado = esDNIvalido(dni);
console.log('El dni introducido es: ' + resultado);
*/
function DNI(){
    let resto = 0;
    let dni = prompt('Introduzca un dni: ');

    function obtenerletraDNI (dni) {
    
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        resto = dni % 23;
        // Devuelve la letra que deberia tener la cadena de numeros dada. A pesar de que aparezca la variable dni, en la funcion entra el valor de "numero" de la funcion esDNIvalido
        return letras[resto];
    }
    
    //Funcion que verifica que la cadena de caracterers introducida en dni sea correcta.
    function sintaxisValidaDNI (dni){
        //Crea una variable dniRegEx que verifica que: 1) la variable introducida tena 8 primeros caracteres numericos y 2) que el ultimo caracter sea una letra de la A a la Z.
        let dniRegEx = /^\d{8}[A-Z]$/;
        //Devuelve true o false dependiendo si la variable cumple la sintaxis dada anteriormente.
        return dniRegEx.test(dni);
    }
    
    //Funcion que verifica que la letra introducida coincida con el dni y que el dni sea una cadena de caracteres valida.
    function esDNIvalido(dni) {
        //Primero analiza si la cadena de caracteres introducida coincide con como ha de ser para ser un dni.
        if (!sintaxisValidaDNI(dni)){
            return false;
        }
        //Al verificar que la sintaxis es buena, separa los numeros de las letras y ademas deja declarado que los primeros 8 valores de la cadena son numericos en base 10.
        let numero = parseInt(dni.substring(0,8), 10);
        let letra = dni.substring(8,9);
    
        //Por ultimo comprueba si la letra introducida es la que deberia ser llamando a la funcion obtenerletraDNI.
        if (letra != obtenerletraDNI(numero)){
            return false;
        }
        return true;
    }

    let resultado = esDNIvalido(dni);
    alert('El dni introducido es: ' + resultado);
    break;
}
DNI();