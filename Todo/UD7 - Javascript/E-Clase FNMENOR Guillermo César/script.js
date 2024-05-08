function menor (a,b){
    if (a < b){ 
        return a;
    } else {
        return b;
    }
}

let a = prompt("Introduzca un primer valor:");
let b = prompt("Introduzca un segundo valor:");
let valor = menor (a,b);
console.log(valor);