let dias_semana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
let dia = prompt ('Introduce un valor del 1 al 7:');

if (isNaN(dia)) {
    alert ( 'El valor introducido no es numérico' );
} else if ( dia < 1 ) {
    alert ( 'Valor invalido' );
} else if ( dia > 7 ) {
    alert ( 'Valor invalido' );
} else {
    alert ( 'El dia de la semana correspondiente es: '+ dias_semana[--dia]);
}