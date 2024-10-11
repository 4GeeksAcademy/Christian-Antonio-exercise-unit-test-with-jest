

// 1 EUR (Euro) = 1.07 USD (US Dollar)

// fromDollarToYen
// fromEuroToDollar 
// fromYenToPound

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
/*** En esta prueba vemos como 1.07 dollares es igual a 156.5 yens*/
test("1.07 dollars should be 156.5 yens", function(){
    const { fromDollarToYen } = require('./app.js');

    //Compruebo directamente con el valor de 1 euro que son 1.07 dollares.
    const yens = fromDollarToYen(1.07);
    
    // Aqui creo una constante que sea equivalente de 1 euro a la moneda yen japonesa
    const expectedYens = 156.5;
    
/***  Con esta comparación vemos si es correcto.
 * La constante yens en realidad lo que tiene guardado son dollares cuidado
 */
    expect(yens).toBe(expectedYens);
})

/*** Aqui tenemos una prueba usando la misma lógica de las anteriores pruebas
 * Solo cambiamos de valor de moneda
 */
test("156.5 yens should be 0.87 pound", function(){
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(156.5);
    const expectedPounds = 0.87;
    
    expect(pounds).toBe(expectedPounds);
})