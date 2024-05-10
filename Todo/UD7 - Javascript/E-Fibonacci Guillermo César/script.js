function PrimerosFibo (num){
    
    if ( num <= 0){
        return null;
    }
    if ( num == 1){
        return [0];
    }
    if ( num == 2){
        return [0,1];
    }

    let fib = [0,1];
    for (let i = 2; i < num; i++){
        fib[i]= fib[i - 1] + fib [i - 2];
        return fib;
    }
}


let num = prompt("Introduzca un numero:");
let valor = PrimerosFibo (num);
console.log(valor);