// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

function numbersTop( data ) {

    const posicion = [];
    const contadorValor = data.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {});

    Object.entries( contadorValor ).forEach(([ key, val ]) => {
        posicion[ val ] = key;
    });

    resultadoLimpio = posicion.filter(Boolean);
    console.log( resultadoLimpio[ resultadoLimpio.length -1 ], resultadoLimpio[ resultadoLimpio.length -2 ], resultadoLimpio[ resultadoLimpio.length -3 ] );
    
}

/**
 * TEST Ejercicio 2
 */
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]) // [ 1, 3, 2 ]
numbersTop(['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3]) // [ 'a', 3, 2 ]
