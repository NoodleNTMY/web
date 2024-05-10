function PrimerosPares (num){
    const PARES = [];
    for (let i = 1; i <= num; i++){
        PARES.push(2 * i);
    }
    return PARES;
}

function MostrarPares(a){
    let mostrartxt = 'Salida: ';

    for (let i = 0; i < a.length; i++){
        if (i == a.length-1){
            mostrartxt = mostrartxt + a[i] + '.';
        } else {
            mostrartxt = mostrartxt + a[i] + ', ';
        }
    }

    console.log(mostrartxt);
}

let num = prompt("Introduzca un numero:");

let valor = PrimerosPares (num);

MostrarPares (valor);