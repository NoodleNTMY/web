/* Guillermo César García Brito */

// Para empezar he creado una funcion "introducirvalor" que mientras sea true pida por pantalla que introduzcas un valor de los que aparecen en el menu. De lo contrario
// imprimira opcion no valida y volvera a ejecutarse.
// Esta funcion la ejecuto al final del fichero ya que siempre tiene que estar activa, es un bucle "sofisticado".

    function IntroducirValor() {
        
        let valor;
    
        while (true) {

            // Aqui recogemos el valor que el usuario introduzca:

            valor = prompt("Menú:\n1- nPrimos\n2- Serie Fibonacci\n3- DNI Válido\n4- Lanza Dado\n5- Última letra\n0- SALIR");
    
            // Aqui creo un switch que en el caso de que el valor introducido sea entre 1 y 5 ejecuta una funcion y hace un break, de tal manera de que vuelve a empezar la funcion
            // introducir valor. Por otro lado si el valor introducido es 0 imprimira por pantalla saliendo del programa y cerrara este "bucle sofisticado". Por ultimo, si el
            // valor introducido no esta entre el 0 y 5, imprimira opcion no valida y volvera a pedir un numero por pantalla.

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
    
    // Para el primer apartado de nPrimos he tenido que dividirlo en dos funciones:

    // Una primera funcion que lo primero que hace es recoger por pantalla un valor y si este no es numerico o es negativo se olvidara del asunto y volvera a ejecutar introducirvalor.

    function nPrimos() {
        let n = prompt("Introduce el número de primos a mostrar:");
        if (isNaN(n) || n <= 0) {
            alert("Número no válido.");
            return;
        }

    // Por otro lado, si el valor introducido es numerico y mayor que 0 creara dos variables, una como array donde ira alamacenando los numero primos que vaya calculando y una segunda
    // variable llamada num la cual se le da valor inicial 2 ya que es el primer numero primo.

        let primos = [];
        let num = 2;
    
    // Acto seguido creamos un bucle que mientras el largo del array primos sea menor que n que ejecute la segunda funcion esprimo con el valor num y que despues sume 1 a num. 
        while (primos.length < n) {
            if (esPrimo(num)) {
                primos.push(num);
            }
            num++;
        }
    
        alert("Los primeros " + n + " números primos son: " + primos.join(", "));
    }
    
    // La funcion esPrimo simple y llanamente verifica si num es divisible por cualquiera de estos números, en ese caso no seria primo y devolveria false.
    // Comando Math.squrt() cortesia de https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math.
    function esPrimo(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }
    
    // Como segundo apartado del menu, hayar el los primero 'n' numeros de la serie fibonacci.
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
    
        // Código tal cual en clase mas la implementacion del comando .slice() que se asegura de que se muestren exactamente n términos,
        // incluso si n es menor o igual a 2.
        alert("Los primeros " + n + " términos de la serie Fibonacci son: " + fibonacci.slice(0, n).join(", "));
    }
    
    // Como tercer apartado, verificar si el dni introducido es valido, codigo tal cual hecho en clase simple y llanamente ha sido introducido o implementado dentro de una funcion.
    function dniValido(){
        let resto = 0;
        let dni = prompt('Introduzca un dni: ');
    
        function obtenerletraDNI (dni) {
        
            let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
            resto = dni % 23;
            // Devuelve la letra que deberia tener la cadena de numeros dada. A pesar de que aparezca la variable dni, en la funcion entra el valor de "numero" de la funcion esDNIvalido
            return letras[resto];
        }
        
        //Funcion que verifica que la cadena de caracterers introducida en dni sea correcta.
        function sintaxisValidaDNI (dni){
            //Crea una variable dniRegEx que verifica que: 1) la variable introducida tena 8 primeros caracteres numericos y 2) que el ultimo caracter sea una letra de la A a la Z.
            let dniRegEx = /^\d{8}[A-Z]$/;
            //Devuelve true o false dependiendo si la variable cumple la sintaxis dada anteriormente.
            return dniRegEx.test(dni);
        }
        
        //Funcion que verifica que la letra introducida coincida con el dni y que el dni sea una cadena de caracteres valida.
        function esDNIvalido(dni) {
            //Primero analiza si la cadena de caracteres introducida coincide con como ha de ser para ser un dni.
            if (!sintaxisValidaDNI(dni)){
                return false;
            }
            //Al verificar que la sintaxis es buena, separa los numeros de las letras y ademas deja declarado que los primeros 8 valores de la cadena son numericos en base 10.
            let numero = parseInt(dni.substring(0,8), 10);
            let letra = dni.substring(8,9);
        
            //Por ultimo comprueba si la letra introducida es la que deberia ser llamando a la funcion obtenerletraDNI.
            if (letra != obtenerletraDNI(numero)){
                return false;
            }
            return true;
        }
    
        let resultado = esDNIvalido(dni);
        alert('El dni introducido es: ' + resultado);
    }

    // Como cuarta opcion la funcion lanzaDado:
    function lanzaDado() {
        // Creamos la variable n que recogera las veces que quiera el usuario tirar el dado.
        let n = prompt("Introduce el número de veces que quieres lanzar el dado:");
        // Creamos una condicion que dice que si el valor introducido no es numerico o mayor que 0 no lo aceptamos
        if (isNaN(n) || n <= 0) {
            alert("Número no válido.");
            return;
        }
        //  Se crea un array resultados con 6 elementos, todos inicializados a 0. Este arreglo se utiliza para contar la cantidad de veces que aparece cada cara del dado.
        let resultados = Array(6).fill(0);
    
        // Utilizamos un bucle for que se ejecuta 'n' veces. En cada iteración, se llama a la función dameAleatorioMaximo(5) (que se asume devuelve un número aleatorio entre 
        // 0 y 5. Luego, se incrementa el contador correspondiente en el arreglo resultados.
        for (let i = 0; i < n; i++) {
            let resultado = dameAleatorioMaximo(5);
            resultados[resultado]++;
        }
    
        // Creo una cadena 'resultadoString' que contiene la cantidad de veces que apareció cada cara del dado y su porcentaje correspondiente. Se recorre el array resultados,
        // se calcula el porcentaje de cada cara ((resultados[i] / n) * 100).
        let resultadoString = "";
        for (let i = 0; i < 6; i++) {
            let porcentaje = ((resultados[i] / n) * 100);
            resultadoString += `Cara ${i + 1}: ${resultados[i]} veces (${porcentaje}%)\n`;
        }
    
        alert(resultadoString);
    }
    
    // funcion dada en la hoja de ejercicios.
    function dameAleatorioMaximo(maximo) {
        return Math.floor(Math.random() * (maximo + 1));
    }
    
    // Destacar el uso de ayudas externas para la elaboracion de este apartado, tanto IA como compañeros.
    function ultimaLetra() {
        let frase = prompt("Introduce una frase:");
        // La frase se divide en un array de palabras utilizando el comando split(" "), que separa la cadena de texto por los espacios en blanco. 
        let palabras = frase.split(" ");
        // Se utiliza el comando map para transformar cada palabra en el array palabras. Para cada palabra, se toma la última letra (palabra.slice(-1)) y se convierte a mayúsculas  
        // (toUpperCase()). El método slice(-1) extrae la última letra de una cadena. Luego, las letras resultantes se unen en una sola cadena usando el método join("").
        let resultado = palabras.map(palabra => palabra.slice(-1).toUpperCase()).join("");
    
        alert("La palabra formada por las últimas letras de cada palabra es: " + resultado);
    }
    
    // Ejecutar la función principal.
    IntroducirValor();
    