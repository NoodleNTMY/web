/* Guillermo César García Brito */


function palindromo(cadena) {
    // Con esta sentencia pasamos a minusculas la cadena introducida y eliminamos los espacios y caracteres especiales (es decir dejamos solo valores de a - z y de 0 - 9).
    cadena = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Creamos una constante llamada reverso que coja el valor de cadena pero de atras alante.
    // Esto lo conseguimos con los comandos "split('').reverse().join('')" que dividen la cadena en un array de caracteres, invierte el array y lo une nuevamente en una cadena.
    const reverso = cadena.split('').reverse().join('');
    
    // Por ultimo compara cadena con reverso y devuelve true si son iguales y false si no lo son.
    return cadena === reverso;

}

// Creamos la variable cadena y le damos un prompt para que reciba el valor que el usuario quiera darle.
let cadena = prompt ('Introduzca una cadena de caracteres para comprobar si es un palindromo:');

// Creo una segunda variable que tenga como valor el resultado de la funcion palindromo.
let valor = palindromo(cadena);

// Creo una condicion que dice que si es true imprima que si es un palindromo, y de lo contrario que no es un palindromo.
if (valor == true){
    alert('La cadena introducida es un palindromo.');
} else {
    alert('La cadena introducida NO es un palindromo.');
}