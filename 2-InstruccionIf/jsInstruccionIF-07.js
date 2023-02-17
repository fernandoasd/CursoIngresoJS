/******************************************************************************
 Guia 2  Ejercicio 7
 Fernando Malinowski
*******************************************************************************/

// Enunciado:
// Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente 
// mensaje: 'Es muy pequeño para NO ser soltero.'

function mostrar()
{
	// declaración de variables
	let edadIngresada;
	let estadoCivilIngresado;

	// entrada de datos
	edadIngresada = txtIdEdad.value;
	estadoCivilIngresado=estadoCivil.value;

	// parseo de datos
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada <18 && estadoCivilIngresado != "Soltero" ){
		alert("Es muy pequeño para NO ser soltero.");
	}

}//FIN DE LA FUNCIÓN