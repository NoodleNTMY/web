let y_actual = prompt ('Inserte el año actual:');
let y_aleatorio = prompt ('Inserte un año aleatorio:');
let cont;

if ( y_actual== null && y_aleatorio == null) {
    alert ( 'Debes introducir algún valor.' );
} else if (isNaN(y_actual && y_aleatorio)){
    alert ( 'Los valores introducidos no son numéricos.' );
} else if (y_actual >= y_aleatorio) {
    cont = y_actual-y_aleatorio
    alert ('Han pasado ' +cont+' años.');
} else {
    cont = y_aleatorio-y_actual
    alert ('Quedan ' +cont+' años.');
}

