function PrimerosPares (num){
    const PARES = [];
    for (let i = 1; i <= num; i++){
        PARES.push(2 * i);
    }
    return PARES;
}

function MostrarPares(num){
    
}

let num = prompt("Introduzca un numero:");
let valor = PrimerosPares (num);