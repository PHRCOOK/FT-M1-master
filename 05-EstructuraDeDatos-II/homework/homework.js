"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
class LinkedList {
  constructor() {
    this.head = null; // Referencia al primer nodo de la lista (cabeza).
    this.tail = null; // Referencia al último nodo de la lista (cola).
  }

  add(value) {
    const newNode = new Node(value); // Se crea un nuevo nodo con el valor proporcionado.
    if (!this.head) {
      // Si la lista está vacía, el nuevo nodo se convierte en la cabeza y la cola.
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Si la lista no está vacía, el nuevo nodo se agrega al final y se actualiza la cola.
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  remove() {
    if (!this.head) return null; // Si la lista está vacía, no hay nada que eliminar y se devuelve null.
    if (this.head === this.tail) {
      // Si solo hay un nodo en la lista, se elimina y se actualizan la cabeza y la cola.
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    }
    let currentNode = this.head;
    let previousNode;
    while (currentNode.next) {
      // Se recorre la lista hasta llegar al último nodo (antes de la cola).
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null; // Se desconecta el último nodo de la lista y se actualiza la cola.
    this.tail = previousNode;
    return currentNode.value; // Se devuelve el valor del nodo eliminado.
  }

  search(searchValue) {
    let currentNode = this.head;
    if (typeof searchValue === "function") {
      // Si se proporciona una función de búsqueda, se utiliza para buscar el valor.
      while (currentNode) {
        if (searchValue(currentNode.value)) return currentNode.value;
        currentNode = currentNode.next;
      }
    } else {
      // Si no se proporciona una función de búsqueda, se busca el valor directamente.
      while (currentNode) {
        if (currentNode.value === searchValue) return currentNode.value;
        currentNode = currentNode.next;
      }
    }
    return null; // Si no se encuentra el valor, se devuelve null.
  }
}

class Node {
  constructor(value) {
    this.value = value; // Valor del nodo.
    this.next = null; // Referencia al siguiente nodo.
  }
}
/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35; // Número de cubetas o compartimentos en la tabla de hash.
  this.buckets = new Array(this.numBuckets); // Arreglo que almacena las cubetas.
}
HashTable.prototype.hash = function (input) {
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    total += input.charCodeAt(i); // Se suma el valor numérico de cada carácter en la clave.
  }
  return total % this.numBuckets; // Se obtiene el índice de la cubeta utilizando el residuo de la división.
};
HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") {
    throw new TypeError("Keys must be strings"); // Se verifica que la clave sea una cadena de texto.
  }
  const index = this.hash(key); // Se obtiene el índice de la cubeta correspondiente a la clave.
  this.buckets[index] = this.buckets[index] || {}; // Se crea una cubeta vacía si no existe.
  this.buckets[index][key] = value; // Se asigna el valor a la clave en la cubeta correspondiente.
};
HashTable.prototype.get = function (key) {
  const index = this.hash(key); // Se obtiene el índice de la cubeta correspondiente a la clave.
  return this.buckets[index]?.[key]; // Se devuelve el valor de la clave en la cubeta correspondiente, si existe.
};
HashTable.prototype.hasKey = function (key) {
  const index = this.hash(key); // Se obtiene el índice de la cubeta correspondiente a la clave.
  return !!this.buckets[index]?.hasOwnProperty(key); // Se verifica si la clave existe en la cubeta correspondiente.
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
