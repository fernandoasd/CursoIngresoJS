/******************************************************************************
 Guia 3 - Ejercicio 03 - Instrucción 'Switch'
 Fernando Malinowski
*******************************************************************************/

// Enunciado:
// al seleccionar un mes a informar.
// si es Febrero: " Este mes no tiene más de 29 días."
// si NO es Febrero: "Este mes tiene 30 o más días"


function mostrar()
{
	
	let mesDelAño;
	let mensaje;


	//tomo el mes
	mesDelAño =txtIdMes.value;

	switch(mesDelAño){
		case "Febrero":
			mensaje = "Este mes no tiene mas de 29 días.";
			break;

		default:
			mensaje = "Este mes tiene 30 o más días.";
	}
	
	alert(mensaje);


}//FIN DE LA FUNCIÓN