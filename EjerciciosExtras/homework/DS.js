function Queue() {
  this.array = []; // Se crea una propiedad "array" que almacenará los elementos de la cola.
}

Queue.prototype.enqueue = function (elemento) {
  return this.array.push(elemento); // El método "enqueue" agrega un elemento al final de la cola utilizando el método "push()" del array.
};
Queue.prototype.dequeue = function () {
  return this.array.shift(); // El método "dequeue" elimina y devuelve el primer elemento de la cola utilizando el método "shift()" del array.
};
Queue.prototype.size = function () {
  return this.array.length; // El método "size" devuelve la longitud del array, que representa el tamaño de la cola.
};

function LinkedList() {
  this.head = null; // Se crea una propiedad "head" que representa el primer nodo de la lista enlazada.
}

LinkedList.prototype.add = function (valor) {
  var nuevoNodo = new Node(valor); // Se crea un nuevo nodo con el valor proporcionado.
  if (!this.head) {
    // Si la lista está vacía, se establece el nuevo nodo como el primer nodo (head).
    this.head = nuevoNodo;
  } else {
    // Si la lista no está vacía, se busca el último nodo y se agrega el nuevo nodo al final.
    var tailActual = this.head; // Se guarda una referencia al primer nodo como el nodo actual.
    while (tailActual.next !== null) {
      // Mientras el nodo actual tenga un siguiente nodo (no sea nulo),
      tailActual = tailActual.next; // Se actualiza el nodo actual al siguiente nodo.
    }
    tailActual.next = nuevoNodo; // Se agrega el nuevo nodo al final de la lista.
  }
};
LinkedList.prototype.remove = function () {
  if (!this.head) {
    // Si la lista está vacía, no hay nodos para eliminar, por lo que se devuelve indefinido.
    return undefined;
  }
  if (this.head.next === null) {
    // Si la lista tiene solo un nodo (head), se elimina ese nodo y se devuelve su valor.
    var unicoNodo = this.head;
    this.head = null;
    return unicoNodo.value;
  }
  var nodoActual = this.head.next; // Se guarda una referencia al segundo nodo como el nodo actual.
  var nodoPrevious = this.head; // Se guarda una referencia al primer nodo como el nodo anterior.
  while (nodoActual.next !== null) {
    // Mientras el nodo actual tenga un siguiente nodo (no sea nulo),
    nodoPrevious = nodoActual; // Se actualiza el nodo anterior al nodo actual.
    nodoActual = nodoActual.next; // Se actualiza el nodo actual al siguiente nodo.
  }
  nodoPrevious.next = null; // Se establece el siguiente nodo del nodo anterior como nulo, eliminando el último nodo.
  return nodoActual.value; // Se devuelve el valor del último nodo eliminado.
};
LinkedList.prototype.search = function (arg) {
  var nodoActual = this.head; // Se guarda una referencia al primer nodo como el nodo actual.
  if (nodoActual === null) {
    // Si la lista está vacía, no hay nodos para buscar, por lo que se devuelve nulo.
    return null;
  }
  while (nodoActual !== null) {
    // Mientras el nodo actual no sea nulo,
    if (typeof arg === "function") {
      // Si el argumento es una función, se evalúa la función con el valor del nodo actual.
      if (arg(nodoActual.value)) {
        // Si la función devuelve true, se devuelve el valor del nodo actual.
        return nodoActual.value;
      }
    } else if (nodoActual.value === arg) {
      // Si el argumento no es una función y el valor del nodo actual es igual al argumento, se devuelve el valor del nodo actual.
      return nodoActual.value;
    }
    nodoActual = nodoActual.next; // Se actualiza el nodo actual al siguiente nodo en la lista.
  }
  return null; // Si no se encuentra el valor o la condición en la lista, se devuelve nulo.
};

function Node(valor) {
  this.value = valor; // Valor del nodo.
  this.next = null; // Referencia al siguiente nodo en la lista.
}

function BinarySearchTree(valor) {
  this.value = valor; // Valor del nodo actual.
  this.left = null; // Referencia al hijo izquierdo.
  this.right = null; // Referencia al hijo derecho.
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    // Si el valor es menor que el valor del nodo actual,
    if (this.left === null) {
      // Si no hay un hijo izquierdo,
      var newTree = new BinarySearchTree(value); // Se crea un nuevo árbol binario de búsqueda con el valor y se asigna como el hijo izquierdo.
      this.left = newTree;
    } else {
      // Si ya existe un hijo izquierdo,
      this.left.insert(value); // Se llama recursivamente al método insert en el hijo izquierdo.
    }
  } else {
    // Si el valor es mayor o igual al valor del nodo actual,
    if (this.right === null) {
      // Si no hay un hijo derecho,
      var newTree = new BinarySearchTree(value); // Se crea un nuevo árbol binario de búsqueda con el valor y se asigna como el hijo derecho.
      this.right = newTree;
    } else {
      // Si ya existe un hijo derecho,
      this.right.insert(value); // Se llama recursivamente al método insert en el hijo derecho.
    }
  }
};
BinarySearchTree.prototype.size = function () {
  if (this.value === null) {
    // Si el valor del nodo actual es nulo, significa que el árbol está vacío y su tamaño es 0.
    return 0;
  }
  if (this.left === null && this.right === null) {
    // Si no hay hijos izquierdo ni derecho, el tamaño del árbol es 1 (solo el nodo actual).
    return 1;
  }
  if (this.left === null) {
    // Si no hay hijo izquierdo, se devuelve 1 más el tamaño del hijo derecho.
    return 1 + this.right.size();
  }
  if (this.right === null) {
    // Si no hay hijo derecho, se devuelve 1 más el tamaño del hijo izquierdo.
    return 1 + this.left.size();
  }
  return 1 + this.left.size() + this.right.size(); // Si hay ambos hijos, se devuelve 1 más el tamaño de ambos hijos.
};

module.exports = {
  Queue,
  Node,
  LinkedList,
  BinarySearchTree,
};
