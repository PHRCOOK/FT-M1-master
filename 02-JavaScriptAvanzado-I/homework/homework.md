# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

cuando se declara una variable con la palabra clave var, se está creando una variable en el ámbito actual. Si se asigna un valor a una variable sin usar la palabra clave var, el intérprete buscará en la cadena de ámbitos una variable declarada con ese nombre y, si no la encuentra, creará una variable global en el objeto window .
La única diferencia es que la declaración con var inicializará cualquier variable declarada sin un valor a undefined.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);
```

Se declaran las variables x, a y b con los valores 1, 5 y 10, respectivamente.
Se declara una función llamada c que toma tres argumentos: a, b y c.
Dentro de la función c, se declara una variable local llamada x con el valor 10.
La función c llama a la función console.log(x) para imprimir el valor de la variable local x, que es 10.
La función c llama a la función console.log(a) para imprimir el valor del argumento a, que es 8.
Dentro de la función c, se declara una función llamada f que toma tres argumentos: a, b y c.
La función f asigna el valor del argumento a a la variable local b.
La función f llama a la función console.log(b) para imprimir el valor de la variable local b, que es ahora igual al valor del argumento a, es decir, 8.
La función f asigna el valor del argumento c a la variable local b.
Dentro de la función f, se declara una variable local llamada x con el valor de 5.
La función c llama a la función f(a,b,c) con los valores de los argumentos a, b y c como 8, 9 y 10 respectivamente.
La función c llama a console.log(b) para imprimir el valor del argumento b, que es 9.
Después de que se completa la ejecución de la función c, se llama a console.log(b) para imprimir el valor de la variable global b, que es 10.
Finalmente, se llama a console.log(x) para imprimir el valor de la variable global x, que es 1.

10
8
8
9
10
1

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;
```

La primera línea intenta imprimir el valor de la variable bar en la consola, pero como bar aún no ha sido declarada, su valor es undefined.
La segunda línea intenta imprimir el valor de la variable baz en la consola, pero como baz aún no ha sido declarada ni definida, se produce un error de referencia (ReferenceError).
La tercera línea llama a la función foo, que imprime "Hola!" en la consola.
La variable bar se declara y se le asigna el valor 1.
La variable baz se define y se le asigna el valor 2.

Hola!
undefined
ReferenceError: baz is not defined

```javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor);
```

Se declara una variable llamada instructor y se le asigna el valor "Tony".
Dentro de un bloque condicional, se declara otra variable llamada instructor y se le asigna el valor "Franco". Como las variables declaradas con var no tienen ámbito de bloque, esta declaración sobrescribe el valor de la variable instructor declarada anteriormente.
Finalmente, se llama a la función console.log(instructor) para imprimir el valor de la variable instructor, que es "Franco".

Franco

```javascript
var instructor = "Tony";
console.log(instructor);
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor);
  }
})();
console.log(instructor);
```

Se declara una variable llamada instructor y se le asigna el valor "Tony".
Se llama a la función console.log(instructor) para imprimir el valor de la variable instructor, que es "Tony".
Se ejecuta una función anónima inmediatamente invocada (IIFE, por sus siglas en inglés).
Dentro de la IIFE, hay un bloque condicional que siempre se ejecutará porque su condición es true.
Dentro del bloque condicional, se declara una variable local llamada instructor y se le asigna el valor "Franco".
Dentro del bloque condicional, se llama a la función console.log(instructor) para imprimir el valor de la variable local instructor, que es "Franco".
Después de que se completa la ejecución de la IIFE, se llama a la función console.log(instructor) para imprimir el valor de la variable global instructor, que sigue siendo "Tony"

Tony
Franco
Tony

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor);
  console.log(pm);
}
console.log(instructor);
console.log(pm);
```

Se declara una variable llamada instructor con la palabra clave var y se le asigna el valor "Tony".
Se declara una variable llamada pm con la palabra clave var y se le asigna el valor "Franco".
Hay un bloque condicional que siempre se ejecutará porque su condición es true.
Dentro del bloque condicional, se declara otra variable llamada instructor con la palabra clave var y se le asigna el valor "The Flash". Como las variables declaradas con var no tienen ámbito de bloque, esta declaración sobrescribe el valor de la variable instructor declarada anteriormente.
Dentro del bloque condicional, se declara una variable local llamada pm con la palabra clave let y se le asigna el valor "Reverse Flash". Como las variables declaradas con let no tienen ámbito de bloque, esta declaración no afecta el valor de la variable pm declarada anteriormente.
Dentro del bloque condicional, se llama a la función console.log(instructor) para imprimir el valor de la variable local instructor, que es "The Flash".
Dentro del bloque condicional, se llama a la función console.log(pm) para imprimir el valor de la variable local pm, que es "Reverse Flash".
Después de que se completa la ejecución del bloque condicional, se llama a la función console.log(instructor) para imprimir el valor de la variable global instructor, que es ahora "The Flash".
Después de que se completa la ejecución del bloque condicional, se llama a la función console.log(pm) para imprimir el valor de la variable global pm "Franco"

The Flash
Reverse Flash
The Flash
Franco

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
[] == ![]
```

`6 / "3"` resulta en `2`. La división se realiza normalmente después de que el intérprete convierte el string `"3"` en un número.
`"2" * "3"` resulta en `6`. La multiplicación se realiza normalmente después de que el intérprete convierte ambos strings en números.
`4 + 5 + "px"` resulta en `"9px"`. Primero, se realiza la suma de los números `4` y `5`, lo que da como resultado `9`. Luego, se concatena el string `"px"` al resultado, lo que da como resultado final `"9px"`.
`"$" + 4 + 5` resulta en `"$45"`. Primero, se concatena el string `"$"` con el número `4`, lo que da como resultado `"$4"`. Luego, se concatena el número `5` al resultado, lo que da como resultado final `"$45"`.
`"4" - 2` resulta en `2`. La resta se realiza normalmente después de que el intérprete convierte el string `"4"` en un número.
`"4px" - 2` resulta en `NaN`. El intérprete intenta convertir el string `"4px"` en un número, pero falla porque no es un valor numérico válido. Como resultado, la operación de resta da como resultado `NaN` (Not a Number).
`7 / 0` resulta en `Infinity`. Dividir cualquier número entre cero da como resultado `Infinity` en JavaScript.
`{ }[0]` resulta en `undefined`. Intentar acceder a una propiedad de un objeto vacío con la notación de corchetes da como resultado `undefined`.
`parseInt("09")` resulta en `9`. La función `parseInt` convierte el string `"09"` en un número entero, ignorando el cero inicial.
`5 && 2` resulta en `2`. El operador lógico AND (`&&`) devuelve el último valor verdadero o el primer valor falso. En este caso, ambos operandos son verdaderos, por lo que devuelve el último valor verdadero, es decir, `2`.
`2 && 5` resulta en `5`. El operador lógico AND (`&&`) devuelve el último valor verdadero o el primer valor falso. En este caso, ambos operandos son verdaderos, por lo que devuelve el último valor verdadero, es decir, `5`.
`5 || 0` resulta en `5`. El operador lógico OR (`||`) devuelve el primer valor verdadero o el último valor falso. En este caso, el primer operando es verdadero, por lo que devuelve ese valor, es decir, `5`.
`0 || 5` resulta en `5`. El operador lógico OR (`||`) devuelve el primer valor verdadero o el último valor falso. En este caso, el primer operando es falso y el segundo es verdadero, por lo que devuelve ese valor, es decir, `5`.
`[3] + [3] - [10]` resulta en 23. Primero, los arrays `[3]` y `[3]` se convierten en strings y se concatenan, dando como resultado `"33"`. Luego, ese string se convierte en un número y se resta del array `[10]`, que también se convierte en un número, dando como resultado final 23.
`3 > 2 > 1` resulta en `false`. Primero, se evalúa la expresión de la izquierda (`3 > 2`), que da como resultado verdadero (`true`). Luego, se evalúa la expresión completa (`true > 1`), que da como resultado falso (`false`) porque el intérprete convierte el booleano verdadero a un número (`1`) antes de realizar la comparación.
`[] == ![]` resulta en true. Primero, ![] evalúa a false ya que [] es true (un objeto vacío). Luego [] == false evalúa a true ya que [] se convierte a "" (un string vacío) y "" == false evalúa a true ya que "" se convierte a 0 y false también se convierte a 0.

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

undefined
2

Se declara una función llamada test.
Dentro de la función test, se llama a la función console.log(a) para imprimir el valor de la variable a. Sin embargo, en este punto, la variable a aún no ha sido declarada ni inicializada, por lo que su valor es undefined.
Dentro de la función test, se llama a la función console.log(foo()) para imprimir el valor devuelto por la función foo. La función foo devuelve el valor 2, por lo que se imprime en la consola.
Dentro de la función test, se declara una variable local llamada a y se le asigna el valor 1.
Dentro de la función test, se declara una función local llamada foo que devuelve el valor 2.
Se llama a la función test para ejecutarla.
La razón por la que se imprime undefined en lugar de un error de referencia es debido a un comportamiento en JavaScript conocido como “hoisting” (elevación). Esto significa que las declaraciones de variables y funciones son “elevadas” al principio del ámbito en el que se encuentran. En este caso, la declaración de la variable a y la declaración de la función foo son “elevadas” al principio de la función test. Sin embargo, solo las declaraciones son “elevadas”, no las inicializaciones o asignaciones. Por lo tanto, cuando se llama a la función console.log(a), la variable a ya ha sido declarada pero aún no ha sido inicializada, por lo que su valor es undefined.

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false);
```

Cuando se ejecuta, no imprimirá nada en la consola porque no hay ninguna llamada a la función console.log

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

Cuando se ejecuta, imprimirá lo siguiente en la consola:

Aurelio De Rosa
undefined

Asi funciona el código:

Se declara una variable global llamada fullname y se le asigna el valor "Juan Perez".
Se declara una variable global llamada obj y se le asigna un objeto con dos propiedades: fullname y prop.
La propiedad fullname del objeto obj tiene el valor "Natalia Nerea".
La propiedad prop del objeto obj tiene otro objeto con dos propiedades: fullname y getFullname.
La propiedad fullname del objeto obj.prop tiene el valor "Aurelio De Rosa".
La propiedad getFullname del objeto obj.prop es una función que devuelve el valor de la propiedad fullname del objeto al que pertenece (es decir, el objeto obj.prop).
Se llama a la función console.log(obj.prop.getFullname()) para imprimir el valor devuelto por la función getFullname. Como esta función se llama como un método del objeto obj.prop, la palabra clave this dentro de la función hace referencia a ese objeto. Por lo tanto, la función devuelve el valor de la propiedad fullname del objeto obj.prop, que es "Aurelio De Rosa".
Se declara una variable global llamada test y se le asigna el valor de la función getFullname.
Se llama a la función console.log(test()) para imprimir el valor devuelto por la función test. Sin embargo, como esta función no se llama como un método de ningún objeto, la palabra clave this dentro de la función hace referencia al objeto global (window en un navegador web). Como no hay ninguna propiedad llamada fullname en el objeto global, la función devuelve undefined.

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing();
```

1
4
3
2

El orden en que se imprimen los valores en la consola se debe a cómo funciona el event loop (bucle de eventos). Cuando se llama a una función como setTimeout, su callback (función de retorno) no se ejecuta inmediatamente, sino que se agrega a una cola de tareas para ser ejecutada más tarde, después de que se complete el ciclo actual del event loop.

En este caso, cuando se llama a la función printing, primero se imprime el valor 1 y luego el valor 4. Luego, el ciclo actual del event loop se completa y el intérprete comienza a procesar las tareas en la cola. La primera tarea en la cola es el callback del segundo llamado a setTimeout, que imprime el valor 3. Finalmente, después de 1 segundo, el callback del primer llamado a setTimeout se agrega a la cola y se ejecuta, imprimiendo el valor 2.

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
