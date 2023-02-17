/******************************************************************************
 Guia 2  Ejercicio 9
 Fernando Malinowski
*******************************************************************************/

// Enunciado:
// Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive

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
	alert(numRandom);	

}//FIN DE LA FUNCIÓN