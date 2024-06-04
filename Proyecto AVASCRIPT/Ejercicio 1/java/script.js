/* Guillermo César García Brito */

/* Primero creamos el prompt con el menú */

/*
if (age == null) {
    alert ( 'Debes introducir algún valor.' );
} else if (isNaN(age)){
    alert ( 'Los valores introducidos no son numéricos.' );
*/
    // do { 
    //     let valor = prompt ('Escriba por pantalla el número del comando que desee ejeecutar, siendo : 1.- nPrimos 2.- Serie Fibonacci 3.-DNI Váido 4.-Lanza Moneda 5.-Última letra 0.-SALIR')
    // } while (valor == [0 - 5] && valor != Null);

    function IntroducirValor() {
        
        let valor;
    
        while (true) {

            valor = prompt("Menú:\n1.- nPrimos\n2.- Serie Fibonacci\n3.- DNI Válido\n4.- Lanza Dado\n5.- Última letra\n0.- SALIR");
    
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
        let n = parseInt(prompt("Introduce el número de primos a mostrar:"));
        if (isNaN(n) || n <= 0) {
            alert("Número no válido.");
            return;
        }
    
        let primes = [];
        let num = 2;
    
        while (primes.length < n) {
            if (esPrimo(num)) {
                primes.push(num);
            }
            num++;
        }
    
        alert("Los primeros " + n + " números primos son: " + primes.join(", "));
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
    
    function dniValido() {
        let dni = prompt("Introduce el DNI (8 dígitos y una letra):");
        const dniRegex = /^[0-9]{8}[A-Z]$/;
    
        if (!dniRegex.test(dni)) {
            alert("Error de sintaxis.");
            return;
        }
    
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const numero = parseInt(dni.slice(0, 8), 10);
        const letra = dni.charAt(8);
        const letraCorrecta = letras[numero % 23];
    
        if (letra !== letraCorrecta) {
            alert("La letra no corresponde con el número.");
        } else {
            alert("DNI válido.");
        }
    }
    
    function lanzaDado() {
        let n = parseInt(prompt("Introduce el número de veces que quieres lanzar el dado:"));
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
            let porcentaje = ((resultados[i] / n) * 100).toFixed(2);
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
    
    // Ejecutar la función principal
    IntroducirValor();
    