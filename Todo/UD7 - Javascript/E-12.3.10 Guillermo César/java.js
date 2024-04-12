let age = prompt ('Introduzca su edad:');

if (age == null) {
    alert ( 'Debes introducir algún valor.' );
} else if (isNaN(age)){
    alert ( 'Los valores introducidos no son numéricos.' );
} else if( age >= 150 ) {
    alert ( 'La edad introducida es incorrecta.' );
} else if ( age < 0 ) {
    alert ( 'La edad introducida es incorrecta.' );
} else if ( age >= 18 ) {
    alert ( 'Es usted mayor de edad.' )
} else {
    alert ( 'Usted no es mayor de edad.' )
}