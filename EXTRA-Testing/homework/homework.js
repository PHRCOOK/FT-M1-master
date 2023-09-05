const layout = [
  [
    { type: "VIP", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "ECONOMIC", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: true },
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: false },
  ],
];
function checkSeatStatus(row, number) {
  if (typeof row !== "string")
    // Se verifica si el tipo de dato del parámetro "row" no es una cadena.
    throw new TypeError("First parameter is not a string"); // Si no es una cadena, se lanza un error de tipo.
  if (typeof number !== "number")
    // Se verifica si el tipo de dato del parámetro "number" no es un número.
    throw new TypeError("Second parameter is not a number"); // Si no es un número, se lanza un error de tipo.
  const numberRow = getRowNumber(row); // Se llama a la función "getRowNumber(row)" para obtener el número de fila correspondiente a la letra de la fila proporcionada.
  const layoutRows = layout[numberRow]; // Se obtiene el conjunto de asientos correspondiente a la fila obtenida.
  const seat = layoutRows[number]; // Se obtiene el objeto de asiento correspondiente al número de asiento proporcionado.
  return seat.booked; // Se devuelve el estado de reserva del asiento.
}
function getRowNumber(letter) {
  return letter.charCodeAt(0) - 65;
} //La función "getRowNumber(letter)" utiliza el método "charCodeAt()" para obtener el código Unicode del primer carácter de la cadena "letter". Luego, se resta 65 al código Unicode para obtener el número de fila correspondiente.
function book(row, number) {
  if (checkSeatStatus(row, number))
    // Se verifica si el asiento ya está reservado.
    return `Seat in ${row}${number} is already booked`; // Si el asiento ya está reservado, se devuelve un mensaje indicando que ya está reservado.
  const numberRow = getRowNumber(row); // Se obtiene el número de fila correspondiente a la letra de la fila.
  const layoutRows = layout[numberRow]; // Se obtiene la fila del layout correspondiente al número de fila.
  const seat = layoutRows[number]; // Se obtiene el asiento correspondiente al número de asiento en la fila.
  seat.booked = true; // Se marca el asiento como reservado.
  return `Seat in ${row}${number} successfully booked`; // Se devuelve un mensaje indicando que el asiento se ha reservado correctamente.
}
function getLayoutSummary(layout) {
  let totalSeats = 0; // Variable para almacenar el número total de asientos.
  let reservedSeats = 0; // Variable para almacenar el número de asientos reservados.
  let freeSeats = 0; // Variable para almacenar el número de asientos libres.
  let revenue = 0; // Variable para almacenar los ingresos generados por las reservas.
  for (let row of layout) {
    // Bucle que recorre cada fila del layout.
    for (let seat of row) {
      // Bucle que recorre cada asiento de la fila.
      totalSeats++; // Se incrementa el contador de asientos totales.
      if (seat.reserved) {
        // Si el asiento está reservado,
        reservedSeats++; // Se incrementa el contador de asientos reservados.
        if (seat.type === "ECONOMIC") {
          // Si el tipo de asiento es "ECONOMIC",
          revenue += 300; // Se suma 300 al total de ingresos.
        } else if (seat.type === "NORMAL") {
          // Si el tipo de asiento es "NORMAL",
          revenue += 450; // Se suma 450 al total de ingresos.
        } else if (seat.type === "VIP") {
          // Si el tipo de asiento es "VIP",
          revenue += 600; // Se suma 600 al total de ingresos.
        }
      } else {
        // Si el asiento no está reservado,
        freeSeats++; // Se incrementa el contador de asientos libres.
      }
    }
  }
  return {
    totalSeats,
    reservedSeats,
    freeSeats,
    revenue,
  }; // Se devuelve un objeto con el resumen del layout.
}
module.exports = {
  checkSeatStatus,
  getRowNumber,
  book,
  getLayoutSummary,
};
