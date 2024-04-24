
function InsertarNum () {
    let num
    do {
        num = prompt ('Escribe un valor numérico:');
    } while ( isNaN(num) || num == ''  || num == null );

    return num;
}

function MultiplicarNum () {
    for ( let i = 1; i <= 10; i++) {
        console.log( i + ' X ' + num + ' = ' + i*num );
    }
}

const num = InsertarNum();
MultiplicarNum (num);