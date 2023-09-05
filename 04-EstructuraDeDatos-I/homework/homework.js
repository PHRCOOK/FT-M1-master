"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  // Se define la función "nFactorial" con el parámetro "n".
  if (n === 0) {
    // Si el valor de "n" es igual a 0, se devuelve 1.
    return 1;
  } else {
    // Si el valor de "n" no es igual a 0, se calcula el factorial recursivamente.
    return n * nFactorial(n - 1); // Se multiplica "n" por el factorial del número anterior (n-1).
  }
}

function nFibonacci(n) {
  // Se define la función "nFibonacci" con el parámetro "n".
  if (n <= 0) {
    // Si el valor de "n" es menor o igual a 0, se devuelve 0.
    return 0;
  } else if (n === 1) {
    // Si el valor de "n" es igual a 1, se devuelve 1.
    return 1;
  } else {
    // Si el valor de "n" no es ni 0 ni 1, se calcula el número de Fibonacci recursivamente.
    return nFibonacci(n - 1) + nFibonacci(n - 2); // Se suma el número de Fibonacci anterior (n-1) y el número de Fibonacci anterior al anterior (n-2).
  }
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.items = [];
} //La función "Queue" es un constructor que crea un nuevo objeto de cola. El objeto de cola tiene una propiedad llamada "items" que es un arreglo vacío para almacenar los elementos de la cola.

Queue.prototype.enqueue = function (value) {
  this.items.push(value);
}; //El método "enqueue" se agrega al prototipo de la función "Queue". Este método permite agregar un elemento al final de la cola. El valor pasado como argumento se agrega al arreglo "items" utilizando el método "push".

Queue.prototype.dequeue = function () {
  if (this.items.length === 0) {
    return undefined;
  }
  return this.items.shift();
}; //El método "dequeue" se agrega al prototipo de la función "Queue". Este método permite eliminar y devolver el elemento del principio de la cola. Primero se verifica si la cola está vacía, en cuyo caso se devuelve "undefined". Si la cola no está vacía, se utiliza el método "shift" para eliminar el primer elemento del arreglo "items" y se devuelve ese elemento.

Queue.prototype.size = function () {
  return this.items.length;
}; //El método "size" se agrega al prototipo de la función "Queue". Este método devuelve el número de elementos en la cola, que se obtiene utilizando la propiedad "length" del arreglo "items".

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
