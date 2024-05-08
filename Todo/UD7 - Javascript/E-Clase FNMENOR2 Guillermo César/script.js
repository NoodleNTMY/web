function menor (a,b,c){
    if ( a < b && a < c){
        return a;
    } else {
        if ( b < a && b < c){
            return b;
        }else {
            return c;
        }
    }
}

let a = prompt("Introduzca un primer valor:");
let b = prompt("Introduzca un segundo valor:");
let c = prompt("Introduzca un tercer valor:");
let valor = menor(a,b,c);
console.log(valor);