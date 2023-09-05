"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    // Si el array tiene 1 elemento o menos, se considera ya ordenado y se devuelve.
    return array;
  }
  const pivot = array[array.length - 1]; // Se selecciona el último elemento del array como pivote.
  const left = []; // Se crea un array para almacenar los elementos menores que el pivote.
  const right = []; // Se crea un array para almacenar los elementos mayores que el pivote.
  for (let i = 0; i < array.length - 1; i++) {
    // Se recorre el array excepto el último elemento (que es el pivote).
    if (array[i] < pivot) {
      // Si el elemento actual es menor que el pivote, se agrega al array "left".
      left.push(array[i]);
    } else {
      // Si el elemento actual es mayor o igual que el pivote, se agrega al array "right".
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]; // Se realiza la recursión utilizando el array "left" y "right", y se concatena con el pivote en el medio.
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    // Si el array tiene 1 elemento o menos, se considera ya ordenado y se devuelve.
    return array;
  }
  const middle = Math.floor(array.length / 2); // Se calcula el índice central del array.
  const left = array.slice(0, middle); // Se divide el array en dos partes, la izquierda y la derecha, utilizando el índice central.
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right)); // Se realiza la recursión utilizando mergeSort en las partes izquierda y derecha, y luego se realiza el merge de los resultados.
}

function merge(left, right) {
  let resultArray = []; // Array para almacenar el resultado de la combinación y ordenamiento de los arrays "left" y "right".
  let leftIndex = 0; // Índice para recorrer el array "left".
  let rightIndex = 0; // Índice para recorrer el array "right".
  while (leftIndex < left.length && rightIndex < right.length) {
    // Mientras haya elementos en ambos arrays:
    if (left[leftIndex] < right[rightIndex]) {
      // Si el elemento actual de "left" es menor que el elemento actual de "right":
      resultArray.push(left[leftIndex]); // Se agrega el elemento de "left" al resultado.
      leftIndex++; // Se incrementa el índice de "left".
    } else {
      // Si el elemento actual de "right" es menor o igual que el elemento actual de "left":
      resultArray.push(right[rightIndex]); // Se agrega el elemento de "right" al resultado.
      rightIndex++; // Se incrementa el índice de "right".
    }
  }
  return resultArray // Se devuelve el resultado de la combinación y ordenamiento de los arrays "left" y "right".
    .concat(left.slice(leftIndex)) // Se concatenan los elementos restantes de "left" al resultado.
    .concat(right.slice(rightIndex)); // Se concatenan los elementos restantes de "right" al resultado.
}
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
