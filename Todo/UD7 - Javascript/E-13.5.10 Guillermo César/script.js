let cont = 1;
let frutas = []

do {
    frutas [cont] = prompt ('Introduzca una fruta:');
    console.log ('Fruta número '+cont,' = '+frutas[cont]);
    cont++;
} while (cont <=5);
