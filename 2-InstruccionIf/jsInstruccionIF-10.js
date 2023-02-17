/******************************************************************************
 Guia 2  Ejercicio 10
 Fernando Malinowski
*******************************************************************************/

// Enunciado:
// Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
// "EXCELENTE" para notas igual a 9 o 10,
// "APROBÓ" para notas mayores a 4,
// "Vamos, la proxima se puede" para notas menores a 4

function mostrar()
{
	// declaración de variables
	let numRandom;

	// Math.random devuelve un numero al azar entro 0 y 1, 
	// al multiplicarlo por 10 y sumarle 1 devuelve un numero entre 1 y 9.9999
	// le asigno esto a numRamdom 
	numRandom=Math.random()*10+1;

	// utilizo Math.floor() para devolver el maximo valor entero de un numero,
	// en este caso entre 1 y 10
	numRandom=Math.floor(numRandom);

	//salida por pantalla
	if (numRandom > 8 ){
		alert("EXCELENTE  Nota: " + numRandom);
	} else {
		if(numRandom > 3 ){
			alert("APROBÓ  Nota: " + numRandom);
		} else {
			if(numRandom < 4 ){
				alert("Vamos, la proxima se puede  Nota: " + numRandom);
			}
		}
	}

}//FIN DE LA FUNCIÓN