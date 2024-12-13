/*
Crear un programa en Javascript que realice lo siguiente:
3
0, 1, 1.
10
0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
*/


// se solocita al usuario un número con mi promt() y como lo recibido por mi promt es siempre un string, necesito convertrlo a un número entero con mi función global parseInt() y guardo esta información en mi variable "numero"
// Si mi cadena de texto o string no puede convertirse en un número con parseInt() retornará NaN (Not-a-Number) esto con mi función global isNaN()
let numero;
do {
    numero = prompt("Ingresa un número entero:");
    numero = parseInt(numero);

} while (isNaN(numero));
// Entonces con mi ciclo do while si la entrada no es un número válido (NaN), se seguirá pidiendo introducir el dato hasta que se detecte que es un número 


//creo mi función llamada calcularFibonacci(n) mientras que n va a representar la cantidad de numeros que se va a generar con la entrada del usuario 
function calcularFibonacci(n) {
    let secuencia = [0, 1]; //establezco mi array "secuencia" con los dos primeros números de un fibonacci, que es 0 y 1 (los demas se calcularán a partir de estos dos numeros. 0 y 1)
    if (n <= 2) { //n es menor o igual a 2? si es true entonces se cumplen ambos numeros de "secuencia", 0 y 1
        return secuencia.slice(0, n); // uso mi método slice(0, n)para devolver los primeros n números del arreglo, de lo contrario si es false entonces:
    }
    for (let i = 2; i < n; i++) {
        secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
    }
    // entonces uso mi ciclo for para poder calcular los siguientes números a partir del tercero, pues en mi if solo caclculaba los primeros dos, entonces se va a calcular desde el índice 2 hasta "n" (número introducido por el usuario (18))
    //inicio mi ciclo en el índice 2, mi condición es mientras 1 sea menor que n(18) mi bucle se seguirá ejecutando, por lo que se va a detener hasta llegar al numero introducido por el usuario (18). E incremento en cada iteración 1 para que en cada iteración se avance al siguiente índice de mi array "secuencia"
    return secuencia;
}
// i-1 va a representar el número mas reciente en la secuencia, mientras que i-2 representa el número antes del más reciente, de esta forma se suman para poder obtener el siguiente número fibonacci
// con mi método push() me aseguro de poder agregar el nuevo elemento obtenido en la iteración por la sumatoria a mi array "secuencia"
//al final retorno la secuencia obtenida de mis ciclos para obtener la secuencia fibonacci


// llamo a mi función calcularFibonacci pasándole como argumento el número ingresado por el usuario "n"
// mi resultado será un array con los números de la secuencia de Fibonacci solicitados, por lo que se incia mi función de mi linea 26
const resultado = calcularFibonacci(numero);

// uso mi 'console.log()' para imprimir el resultado en la consola
// join(",") es mi método que convierte mi array en una cadena de texto separando los elementos por una coma y un espacio
console.log(`La secuencia de Fibonacci de los primeros ${numero} números es: ${resultado.join(", ")}`);
//elijo una forma dinámica usando template literals en vez de concatenar la respuesta con mi operador + console.log("La secuencia de Fibonacci de los primeros " + numero + " números es: " + resultado.join(", "));

/*
Definición de función
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
 
Creación de un array
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
 
condicional if
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Condiciones
 
ciclo for
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Declaraciones/for
 
push() para agregar elementos a un array
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 
llama a la función con un argumento
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions#Argumentos
 
metodo join() para convertir un array en una cadena
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 
template literals para concatenar cadenas
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
 */
