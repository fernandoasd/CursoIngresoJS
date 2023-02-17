/******************************************************************************
 Guia 4 - Ejercicio 04 - Instrucción While
 Fernando Malinowski
*******************************************************************************/

/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
*/

function mostrar()
{
	let numeroIngresado;
	let mensajeSalida;

	numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");

	numeroIngresado = parseInt(numeroIngresado);

	while (numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("ingrese nuevamente un número entre 0 y 9 inclusive.");
	}

	mensajeSalida = `Correcto, ingresó ${numeroIngresado}.`;
	txtIdNumero.value = mensajeSalida;
	
}//FIN DE LA FUNCIÓN