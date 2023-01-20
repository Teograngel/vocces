// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.

function findUniq( data ) {

    const unicos = [];
    const repetidos = [];

    for( var i = 0; i < data.length; i++) {
    
        const elemento = data[i];

        if (!unicos.includes(data[i])) {
            unicos.push(elemento);
        } else {
            repetidos.push(elemento);
        }

    }

    repetidos.forEach(function(numero) {
        for( var i = 0; i < unicos.length; i++) {
            if( unicos[i] == numero ){
                unicos.splice( i, 1);
            }
        }
    })

    console.log( unicos );

}


/**
 * TEST Ejercicio 1
 */
findUniq(['12', 10, '12', 11, 1, 11, 10, '12']) // 1
findUniq(['Capitán América', 'Hulk', 'Deadpool', 'Capitán América', 'Hulk', 'Wonder Woman', 'Deadpool', 'Iron Man', 'Iron Man']) // 'Wonder Woman'
