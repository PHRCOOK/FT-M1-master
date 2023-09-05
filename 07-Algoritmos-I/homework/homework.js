"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factors = [1]; // Se crea un array inicializado con el factor 1, ya que todos los números son divisibles por 1.
  for (let i = 2; i <= num; i++) {
    // Se itera desde 2 hasta el número dado.
    while (num % i === 0) {
      // Mientras el número sea divisible por i, se sigue dividiendo y se agrega i al array de factores.
      factors.push(i);
      num /= i;
    }
  }
  return factors; // Se devuelve el array de factores.
}
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let orden; // Variable para indicar si el array está ordenado o no.
  do {
    orden = false; // Se inicializa en falso para indicar que el array no está ordenado.
    for (let i = 0; i < array.length - 1; i++) {
      // Bucle que recorre el array.
      if (array[i] > array[i + 1]) {
        // Si el elemento actual es mayor que el siguiente elemento,
        let temp = array[i]; // Se guarda el valor del elemento actual en una variable temporal.
        array[i] = array[i + 1]; // Se intercambia el valor del elemento actual con el siguiente elemento.
        array[i + 1] = temp; // Se asigna el valor guardado en la variable temporal al siguiente elemento.
        orden = true; // Se actualiza la variable de orden a verdadero para indicar que se realizó un intercambio.
      }
    }
  } while (orden); // Se repite el bucle mientras el array no esté ordenado.
  return array; // Se devuelve el array ordenado.
}
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    // Se itera desde el segundo elemento hasta el último elemento del array.
    let j = i; // Se guarda el índice actual en la variable j.
    while (j > 0 && array[j] < array[j - 1]) {
      // Mientras j sea mayor que 0 y el elemento actual sea menor que el elemento anterior,
      let temp = array[j]; // Se guarda el valor del elemento actual en una variable temporal.
      array[j] = array[j - 1]; // Se mueve el elemento anterior una posición hacia adelante.
      array[j - 1] = temp; // Se asigna el valor guardado en la variable temporal al elemento anterior.
      j--; // Se decrementa j para seguir comparando con los elementos anteriores.
    }
  }
  return array; // Se devuelve el array ordenado.
}
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    // Bucle externo que recorre el array.
    let Index = i; // Se guarda el índice actual en la variable Index.
    for (let j = i + 1; j < array.length; j++) {
      // Bucle interno que recorre los elementos restantes del array.
      if (array[j] < array[Index]) {
        // Si el elemento actual es menor que el elemento en el índice Index,
        Index = j; // Se actualiza el valor de Index al índice del elemento actual.
      }
    }
    let temp = array[i]; // Se guarda el valor del elemento actual en una variable temporal.
    array[i] = array[Index]; // Se asigna el valor del elemento en el índice Index al elemento actual.
    array[Index] = temp; // Se asigna el valor guardado en la variable temporal al elemento en el índice Index.
  }
  return array; // Se devuelve el array ordenado.
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
