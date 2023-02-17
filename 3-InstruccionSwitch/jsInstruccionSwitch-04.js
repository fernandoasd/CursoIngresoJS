/******************************************************************************
 Guia 3 - Ejercicio 04 - Instrucción 'Switch'
 Fernando Malinowski
*******************************************************************************/

// Enunciado:
// al seleccionar un mes informar.
// si tiene 28 días.
// si tiene 30 días.
// si tiene 31 días.


function mostrar()
{
	//tomo el mes

	let mesDelAño;
	let mensaje;

	mesDelAño =txtIdMes.value;
	
	switch(mesDelAño )
	{
		case "Febrero":
			mensaje = "Tiene 28 días";
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Tiene 30 días";
			break;

		default:
			mensaje = `Tiene 31 días.`;
	}

	// salida de datos
	alert(mensaje);

}//FIN DE LA FUNCIÓN