// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {

    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // En esta variable estamos convirtiendo el valor de vuelta al euro
    let euroValue = valueInDollar/1.07;

    // En esta variable le asignamos el valor de la comparacion equivalente de 1 euro = 156.5 yens
    let valueInYen =  euroValue * 156.5;
    
    // Retornamos el valor en yens
    return valueInYen;
}

/***En esta funcion de abajo repetimos el mismo proceso que el de arriba
 * Se sigue retornando el valor del yen a euro para que sea equivalente con el resto de funciones
 */
const fromYenToPound = function(valueInYen) {
    let euroValue = valueInYen/156.5;
    let valueInPound = euroValue * 0.87;
    return valueInPound;
}

// Aqui una función guardada en una constante para sumar 2 variables
const sum = function(a,b) {
    return a + b;
}


// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = {  sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }


