// JAVASCRIPT
// es un lenguaje de proposito general, comunmente se usa para programacion web

///////// TIPOS DE DATOS ///////
// TIPOS DE DATOS: En javascript hay 9 tipo de datos y se dividen en 2 grupos
// TIPO DE DATOS PRIMITIVOS: Son 7

// NUMBER: Los numeros son los datos mas basicos que podemos representar en js todos los numeros son de tipo number, no hay diferencia
var numero = 7;
var numero = -12;
var numero = 12.12312;
var numero = Infinity;
var numero = 12.238293e8;

// al usar operadores aritmeticos los resultados siempre seran numeros

console.log(2 + 2); // 4
console.log(4 - 2); // 2
console.log(3 * 2); // 6
console.log(2 / 2); // 1
console.log(2 % 2); // 0 es el modulo
console.log(3 ** 3); // 27 es la potencia

// STRING: Son las cadenas de texto en js se representan en comillas simples ' ', dobles " " o acento grave ` `

console.log('hola mundo');
console.log("hola mundo");
console.log(`hola mundo`);
// para concatenar se usa +
console.log('hola' + ` ` + "mundo");

// BOOLEAN: Representan valores de true y false (verdad y falso)
true
false
var estudiante = true;
console.log(estudiante);

// NULL: Indica que la variable no tiene valor 
var miVariable = null;
console.log(miVariable); // null

// UNDEFINED: Sirve para indicar que una variable no esta definida o no tiene un valor agregado
var miVariable;
console.log(miVariable); // undefined

// SYMBOL: Es un tipo de dato primitivo, representa un identificador  unico e inmutable, se usa para que propiedades de objetos no colicionen
// con otras propiedades. 
const simbolo = Symbol("Mi símbolo");
console.log(simbolo.toString()); // "Symbol(Mi símbolo)"

// BIGINT: Permite representar enteros con precision arbitraria, puede repreentar enteros de cualquier tamaño.
var numero = BigInt(1233227834737487234872937482739472387492734982739478273482738479238);
console.log(numero);

///////// TIPOS DE COMPARACION ////////
// LOS TIPOS DE COMPARACION NOS PERMITE COMPARAR 2 VALORES Y DEVUELVEN VALORES BOOLEANOS( TRUE Y FALSE )
// ESTOS SON: 
// < > <= >= === !== 
5 < 3 // false
5 >= 3 // true
5 === 5 // true
5 !== 5 // false
    'JavaScript' === 'JavaScript' // true
"JavaScript" !== 'PHP' // true

// si se usa < y > con cadenas compara el tamaño en unicode
'Alfa' > 'Beta' // false

///////// OPERADORES LOGICOS ////////
//En JavaScript, hay tres operadores lógicos: AND (&&), OR (||) y NOT (!).

///////// VARIABLES ////////
// en js se declara variables con var, let o const
var nombre = 'juan'; // para variable pero puede crear errores en el codigo
let edad = 12; // para variable
const apellido = 'perez'; //constante: no se puede cambiar
console.log(nombre, edad, apellido);

// let y const tienen un alcanze limitado, solo se fija en un bloque 
// var tiene un alcance global

// typeof nos indica de que tipo es un operador

// Declaración de variables y asignación de valores
var nombre = "Juan";
var edad2 = 25;
var esEstudiante = true;

// Tipos de datos en JavaScript
console.log(typeof nombre); // string
console.log(typeof edad); // number
console.log(typeof esEstudiante); // boolean

//formas de imprimir 

console.error(); //Imprime un mensaje de error en la consola.
console.warn(); //Imprime un mensaje de advertencia en la consola.
console.info(); //Imprime un mensaje de información en la consola.

///////// ESTRUCTURAS DE CONTROL ////////

// Una estructura de control en programación es una herramienta que te permite tomar decisiones y repetir acciones en tu código.
// Puedes usar estas estructuras para ejecutar diferentes bloques de código según ciertas condiciones o para repetir un bloque 
// de código varias veces. 

/// 1) IF | ELSE | ELSE IF ///  

if (condición) {
    // Código a ejecutar si la condición es verdadera
} else if (otraCondición) {
    // Código a ejecutar si la otra condición es verdadera
} else {
    // Código a ejecutar si ninguna de las condiciones anteriores es verdadera
}


/// 2)WHILE ///
while (condición) {
    // Código a ejecutar mientras la condición sea verdadera
}
// EJEMPLO
let contador = 1;

while (contador <= 5) {
    console.log("Iteración número: " + contador);
    contador++;
}

console.log("Bucle terminado");

// SE PUEDE SALIR DE UN BUCLE USANDO BREAK

let cuentaAtras = 10

while (cuentaAtras > 0) {
    console.log(cuentaAtras)
    cuentaAtras = cuentaAtras - 1

    // si la cuenta atrás es 5, salimos del bucle
    if (cuentaAtras === 5) {
        break // <---- salimos del bucle
    }
}

// TAMBIEN SE PUEDE SALTAR UNA ITERACION CON CONTINUE

let cuentaAtras1 = 10

while (cuentaAtras1 > 0) {
    cuentaAtras1 = cuentaAtras1 - 1

    // si la cuenta atrás es un número par...
    if (cuentaAtras1 % 2 === 0) {
        continue // <---- saltamos a la siguiente iteración
    }

    console.log(cuentaAtras1)
}


/// 3)DO WHILE ///

do {
    // Código a ejecutar al menos una vez
} while (condición);

// ejemplo

let cont = 10;

do {
    console.log("Iteración número: " + cont)
    cont = cont - 1;
} while (cont >= 0)

/// 4)FOR ///
for (inicialización; condición; expresiónDeActualización) {
    // Código a ejecutar en cada iteración
}

// EJEMPLO

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// ejemplo 2
for (let i = 0; i < 10 && i !== 3; i++) {
    console.log('Hola')
}

/// 5)SWITCH ///

switch (expresión) {
    case valor1:
        // código a ejecutar si la expresión coincide con valor1
        break

    case valor2:
        // código a ejecutar si la expresión coincide con valor2
        break
    default:
        // código a ejecutar si la expresión no coincide con ningún valor
        break
}

// ejemplo
const dia = "lunes"

switch (dia) {
    case "lunes":
        console.log("¡Hoy es lunes! 😢")
        break

    default:
        console.log("No es lunes, YAY! 🚀")
        break
}

// EJEMPLO 2
let ed = 25;

switch (true) {
    case (ed >= 18 && ed < 25):
        console.log("Eres mayor de edad y eres joven");
        break;
    case (ed >= 25 && ed < 40):
        console.log("Eres mayor de edad y estás en plena madurez");
        break;
    case (ed >= 40):
        console.log("Eres mayor de edad y estás en la mejor edad");
        break;
    default:
        console.log("Eres menor de edad");
}

//////////////// FUNCIONES ///////////////////

function saludar() {
    console.log('Hola Miguel')
}
saludar();

// EJEMPLO 1
function sumar(a, b) {
    console.log(a + b);
}

sumar(2, 3);

// funcion exprecion
// una funcion exprecion es una funcion que se asigna a una variable 
// esto es una function expression
const sum = function(a, b) {
    return a + b
}
sum(1, 2);

/// funcion fecha ///
// Las funciones flecha son siempre funciones anónimas y function expressions. 
// Esto significa que no tienen nombre y que se asignan a una variable.