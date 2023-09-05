"use strict";

function BinarioADecimal(num) {
  // Convierte un número binario en su equivalente decimal."
  let sum = 0; // Inicializa la variable 'sum' en 0 para almacenar la suma acumulada."

  for (let i = 0; i < num.length; i++) {
    sum += +num[i] * 2 ** (num.length - 1 - i); // Itera a través de cada dígito del número binario."
    // Multiplica el dígito actual por 2 elevado a la potencia correspondiente." -
    // Suma el resultado a la variable 'sum'.";
  }
  return sum; // Devuelve el valor de 'sum', que es el equivalente decimal del número binario.;
}

function DecimalABinario(num) {
  // Convierte un número decimal en su equivalente binario."
  let binary = num.toString(2); // Utiliza el método toString(2) para convertir el número decimal en una cadena binaria."
  // Guarda el resultado en la variable 'binary'."

  return binary; // Devuelve el valor de 'binary', que es el equivalente binario del número decimal."
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
