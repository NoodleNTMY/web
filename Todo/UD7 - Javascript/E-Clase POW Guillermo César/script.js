function pow (base,exponente){
    let resultado=1
    for (let i = 1; i <= exponente; i++  ){
        resultado = resultado * base
    }
    return resultado;
}

let base = prompt("Introduzca la base del numero:");
let exponente = prompt("Introduzca el exponenete:");
let valor = pow (base,exponente);
console.log(valor);