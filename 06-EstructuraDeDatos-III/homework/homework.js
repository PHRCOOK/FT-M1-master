"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree {
  constructor(value) {
    this.value = value; // Valor del nodo actual.
    this.left = null; // Hijo izquierdo.
    this.right = null; // Hijo derecho.
  }

  size() {
    // con recursividad
    /*let count = 1;
    if (this.left) count += this.left.size();
    if (this.right) count += this.right.size();
    return count;*/
    let count = 1; // Se inicia el contador en 1 para contar el nodo actual.
    const stack = [this]; // Se utiliza una pila para recorrer los nodos del árbol.
    while (stack.length > 0) {
      const node = stack.pop(); // Se extrae el nodo de la pila.
      if (node.left) {
        // Si existe un hijo izquierdo, se incrementa el contador y se agrega a la pila.
        count++;
        stack.push(node.left);
      }
      if (node.right) {
        // Si existe un hijo derecho, se incrementa el contador y se agrega a la pila.
        count++;
        stack.push(node.right);
      }
    }
    return count; // Se devuelve el tamaño del árbol.
  }

  insert(value) {
    if (value < this.value) {
      // Si el valor es menor que el valor del nodo actual,
      if (this.left) this.left.insert(value);
      // Si existe un hijo izquierdo, se llama recursivamente a la función insert en el hijo izquierdo.
      else this.left = new BinarySearchTree(value); // Si no existe un hijo izquierdo, se crea un nuevo nodo con el valor y se establece como el hijo izquierdo.
    } else {
      // Si el valor es mayor o igual al valor del nodo actual,
      if (this.right) this.right.insert(value);
      // Si existe un hijo derecho, se llama recursivamente a la función insert en el hijo derecho.
      else this.right = new BinarySearchTree(value); // Si no existe un hijo derecho, se crea un nuevo nodo con el valor y se establece como el hijo derecho.
    }
  }

  contains(value) {
    if (value === this.value)
      return true; // Si el valor es igual al valor del nodo actual, significa que se ha encontrado.
    else if (value < this.value && this.left) return this.left.contains(value);
    // Si el valor es menor que el valor del nodo actual y existe un hijo izquierdo, se busca recursivamente en el hijo izquierdo.
    else if (value > this.value && this.right)
      return this.right.contains(value);
    // Si el valor es mayor que el valor del nodo actual y existe un hijo derecho, se busca recursivamente en el hijo derecho.
    else return false; // Si no se encuentra en el nodo actual ni en los hijos, significa que no está presente en el árbol.
  }

  depthFirstForEach(callback, order = "in-order") {
    if (order === "pre-order") callback(this.value); // Si el orden es "pre-order", se ejecuta la función de devolución de llamada en el nodo actual antes de recorrer los hijos.
    if (this.left) this.left.depthFirstForEach(callback, order); // Si existe un hijo izquierdo, se realiza un recorrido en profundidad en el hijo izquierdo llamando recursivamente a la función.
    if (order === "in-order") callback(this.value); // Si el orden es "in-order", se ejecuta la función de devolución de llamada en el nodo actual entre el recorrido de los hijos izquierdo y derecho.
    if (this.right) this.right.depthFirstForEach(callback, order); // Si existe un hijo derecho, se realiza un recorrido en profundidad en el hijo derecho llamando recursivamente a la función.
    if (order === "post-order") callback(this.value); // Si el orden es "post-order", se ejecuta la función de devolución de llamada en el nodo actual después de recorrer los hijos.
  }
  breadthFirstForEach(callback) {
    const queue = [this]; // Se utiliza una cola para almacenar los nodos que se deben visitar.
    while (queue.length > 0) {
      // Mientras la cola no esté vacía:
      const node = queue.shift(); // Se extrae el primer nodo de la cola.
      callback(node.value); // Se ejecuta la función de devolución de llamada en el valor del nodo actual.
      if (node.left) queue.push(node.left); // Si existe un hijo izquierdo, se agrega a la cola.
      if (node.right) queue.push(node.right); // Si existe un hijo derecho, se agrega a la cola.
    }
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
