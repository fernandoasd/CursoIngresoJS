/******************************************************************************
 Guia 3 - Ejercicio 01 - Instrucción 'Switch'
 Fernando Malinowski
*******************************************************************************/

// Enunciado:
// al seleccionar un mes informar.
// si es Enero: "que comiences bien el año!!!."
// si es Marzo: "a clases!!!."
// si es Julio: "se vienen las vacaciones!!!."
// si es Diciembre: "Felices fiesta!!!."

function mostrar()
{
	
	let mesDelAño;
	let mensaje;
	
	// entrada de datos
	mesDelAño =txtIdMes.value;


	switch(mesDelAño)
	{
		case "Enero":
			mensaje = "Que comience bien el año!";
			break;

		case "Marzo":
			mensaje = "A clases!";
			break;

		case "Julio":
			mensaje = "Se vienen las vacaciones!";
			break;

		case "Diciembre":
			mensaje = "Felices fiestas!";
			break;
	}

	//salida de datos
	alert(mensaje);


}//FIN DE LA FUNCIÓN