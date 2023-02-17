/******************************************************************************
 Guia 3 - Ejercicio 08 - Instrucción 'Switch'
 Fernando Malinowski
*******************************************************************************/

// Enunciado:
// Al seleccionar un destino informar si hace FRIO o CALOR en ese destino


function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace Frio";
			break;

		case "Cataratas":
		case "Mar del plata":
			mensaje ="Hace Calor";
			break;
	}

	alert(mensaje); //salida de datos

}//FIN DE LA FUNCIÓN