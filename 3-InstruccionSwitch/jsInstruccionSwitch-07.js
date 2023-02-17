/******************************************************************************
 Guia 3 - Ejercicio 07 - Instrucción 'Switch'
 Fernando Malinowski
*******************************************************************************/

// Enunciado:
// Al selecionar un destino , indicar el punto cardinal de nuestro pais 
// en donde se encuentra Norte, Sur, Este u Oeste

function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado =txtIdDestino.value;

	
	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "Oeste";
			break;

		case "Cataratas":
			mensaje = "Norte";
			break;

		case "Mar del plata":
			mensaje = "Este";
			break;

		default:
			mensaje = "Sur";
	}

	//salida de datos
	alert(mensaje);

}//FIN DE LA FUNCIÓN