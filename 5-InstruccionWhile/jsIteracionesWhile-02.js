/******************************************************************************
 Guia 4 - Ejercicio 02 - Instrucción While
 Fernando Malinowski
 
 Envío nuevamente el ejercicio
*******************************************************************************/

/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.
*/

function mostrar()
{
	let contador;
	contador=10; 
	
	while (contador > 0)
	{
		alert(`${contador}`);

		//console.log(` ${contador}`);

		contador--;
	}

}//FIN DE LA FUNCIÓN