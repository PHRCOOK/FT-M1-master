const { Queue, Node, LinkedList, BinarySearchTree } = require("./DS.js");

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]
var countArray = function (array) {
  // Variable para almacenar la suma de los elementos
  let sum = 0;

  // Recorremos el arreglo
  for (let i = 0; i < array.length; i++) {
    // Verificamos si el elemento actual es un subarreglo
    if (Array.isArray(array[i])) {
      // Si es un subarreglo, llamamos recursivamente a la función countArray
      // para obtener la suma de los elementos del subarreglo
      sum += countArray(array[i]);
    } else {
      // Si el elemento no es un subarreglo, lo sumamos directamente a la variable sum
      sum += array[i];
    }
  }

  // Devolvemos la suma total de los elementos
  return sum;
};

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total
var countProps = function (obj) {
  // Variable para almacenar la cantidad de propiedades
  let count = 0;

  // Recorremos las propiedades del objeto
  for (let key in obj) {
    // Verificamos si el valor de la propiedad es un objeto y no un arreglo
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      // Si es un objeto, llamamos recursivamente a la función countProps
      // para contar las propiedades del objeto anidado
      count += countProps(obj[key]);
    }
    // Incrementamos el contador en 1 por cada propiedad encontrada
    count++;
  }

  // Devolvemos la cantidad total de propiedades
  return count;
};
// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
  // Variable para almacenar el nodo actual, comenzando desde el head
  let currentNode = this.head;

  // Variable para contar la cantidad de nodos cuyo valor no sea un número
  let count = 0;

  // Iteramos mientras haya un nodo actual
  while (currentNode) {
    // Verificamos si el valor del nodo no es un número usando la función isNaN
    if (isNaN(currentNode.value)) {
      // Si el valor no es un número, lo cambiamos por "Kiricocho"
      currentNode.value = "Kiricocho";
      // Incrementamos el contador en 1
      count++;
    }
    // Avanzamos al siguiente nodo
    currentNode = currentNode.next;
  }

  // Devolvemos la cantidad de nodos cuyo valor no era un número y fue cambiado
  return count;
};
// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function (queueOne, queueTwo) {
  // Creamos una nueva cola vacía para almacenar los elementos fusionados
  let newQueue = new Queue();

  // Iteramos mientras alguna de las colas tenga elementos
  while (queueOne.size() || queueTwo.size()) {
    // Extraemos el primer elemento de cada cola
    let firstQueue = queueOne.dequeue();
    let secondQueue = queueTwo.dequeue();

    // Verificamos si el primer elemento existe y lo agregamos a la nueva cola
    if (firstQueue) newQueue.enqueue(firstQueue);

    // Verificamos si el segundo elemento existe y lo agregamos a la nueva cola
    if (secondQueue) newQueue.enqueue(secondQueue);
  }

  // Devolvemos la nueva cola que contiene los elementos fusionados
  return newQueue;
};
// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
  // La función devuelve otra función que toma un parámetro 'num'
  return function (num) {
    // Retorna el resultado de multiplicar 'num' por 'multiplier'
    return num * multiplier;
  };
};
// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function () {
  // Variable para almacenar la suma de los valores
  let counter = this.value;

  // Verificamos si hay un subárbol izquierdo y sumamos sus valores recursivamente
  if (this.left !== null) counter += this.left.sum();

  // Verificamos si hay un subárbol derecho y sumamos sus valores recursivamente
  if (this.right !== null) counter += this.right.sum();

  // Devolvemos la suma total de los valores
  return counter;
};
module.exports = {
  countArray,
  countProps,
  mergeQueues,
  closureMult,
};
