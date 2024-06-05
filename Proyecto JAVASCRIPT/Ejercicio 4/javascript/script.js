/* Guillermo César García Brito */

function IntroducirValor() {
        
    let valor;

    while (true) {

        valor = prompt("Menú:\n1- Ejercicio 1.\n2- Ejercicio 2.\n3- Ejercicio 3.\n0- SALIR");

        switch (valor) {
            case "1":
                ejercicio1();
                break;

            case "2":
                ejercicio2();
                break;

            case "3":
                ejercicio3();
                break;

            case "0":
                alert("Saliendo del programa.");
                return;

            default:
                alert("Opción no válida");
        }
    }
}

function ejercicio1(){
    function IntroducirValor() {
        
        let valor;
    
        while (true) {
            valor = prompt("Menú:\n1- nPrimos\n2- Serie Fibonacci\n3- DNI Válido\n4- Lanza Dado\n5- Última letra\n0- SALIR");
            switch (valor) {
                case "1":
                    nPrimos();
                    break;

                case "2":
                    serieFibonacci();
                    break;

                case "3":
                    dniValido();
                    break;

                case "4":
                    lanzaDado();
                    break;

                case "5":
                    ultimaLetra();
                    break;

                case "0":
                    alert("Saliendo del programa.");
                    return;

                default:
                    alert("Opción no válida");
            }
        }
    }
    function nPrimos() {
        let n = prompt("Introduce el número de primos a mostrar:");
        if (isNaN(n) || n <= 0) {
            alert("Número no válido.");
            return;
        }
        let primos = [];
        let num = 2;
        while (primos.length < n) {
            if (esPrimo(num)) {
                primos.push(num);
            }
            num++;
        }
    
        alert("Los primeros " + n + " números primos son: " + primos.join(", "));
    }
    function esPrimo(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }
    function serieFibonacci() {
        let n = parseInt(prompt("Introduce el número de términos de la serie Fibonacci a mostrar:"));
        if (isNaN(n) || n <= 0) {
            alert("Número no válido.");
            return;
        }
    
        let fibonacci = [0, 1];
    
        for (let i = 2; i < n; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
        alert("Los primeros " + n + " términos de la serie Fibonacci son: " + fibonacci.slice(0, n).join(", "));
    }
    function dniValido(){
        let resto = 0;
        let dni = prompt('Introduzca un dni: ');
        function obtenerletraDNI (dni) {
        
            let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
            resto = dni % 23;
            return letras[resto];
        }
        function sintaxisValidaDNI (dni){
            let dniRegEx = /^\d{8}[A-Z]$/;
            return dniRegEx.test(dni);
        }
        function esDNIvalido(dni) {
            if (!sintaxisValidaDNI(dni)){
                return false;
            }
            let numero = parseInt(dni.substring(0,8), 10);
            let letra = dni.substring(8,9);
            if (letra != obtenerletraDNI(numero)){
                return false;
            }
            return true;
        }
        let resultado = esDNIvalido(dni);
        alert('El dni introducido es: ' + resultado);
    }
    function lanzaDado() {
        let n = prompt("Introduce el número de veces que quieres lanzar el dado:");
        if (isNaN(n) || n <= 0) {
            alert("Número no válido.");
            return;
        }
        let resultados = Array(6).fill(0);
        for (let i = 0; i < n; i++) {
            let resultado = dameAleatorioMaximo(5);
            resultados[resultado]++;
        }
        let resultadoString = "";
        for (let i = 0; i < 6; i++) {
            let porcentaje = ((resultados[i] / n) * 100);
            resultadoString += `Cara ${i + 1}: ${resultados[i]} veces (${porcentaje}%)\n`;
        }
        alert(resultadoString);
    }
    function dameAleatorioMaximo(maximo) {
        return Math.floor(Math.random() * (maximo + 1));
    }
    function ultimaLetra() {
        let frase = prompt("Introduce una frase:");
        let palabras = frase.split(" ");
        let resultado = palabras.map(palabra => palabra.slice(-1).toUpperCase()).join("");
        alert("La palabra formada por las últimas letras de cada palabra es: " + resultado);
    }
    IntroducirValor();
}

function ejercicio2(){
    function palindromo(cadena) {
        cadena = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reverso = cadena.split('').reverse().join('');
        return cadena === reverso;
    }
    let cadena = prompt ('Introduzca una cadena de caracteres para comprobar si es un palindromo:');
    let valor = palindromo(cadena);
    if (valor == true){
        alert('La cadena introducida es un palindromo.');
    } else {
        alert('La cadena introducida NO es un palindromo.');
    }
}

function ejercicio3(){
    alert('nada')
}
IntroducirValor();