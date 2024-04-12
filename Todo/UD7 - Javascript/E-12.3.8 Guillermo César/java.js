let num = prompt ( 'Escriba por pantalla un número:' );

if (isNaN(num)){
    alert ( 'Los valores introducidos no son numéricos.' );
} else if ( num % 2 == 0 && num != 0) {
    alert ( 'El número introducido es par.' );
} else if ( num * 1 == 0 ) {
    alert ( 'El número introducido es 0.' );
} else {
    alert ( 'El número introducido es impar.' );
}