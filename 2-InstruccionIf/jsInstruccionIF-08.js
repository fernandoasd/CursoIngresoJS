/******************************************************************************
 Guia 2  Ejercicio 8
 Fernando Malinowski
*******************************************************************************/

// Enunciado:
// Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
// pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'

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

	if(edadIngresada > 17 && estadoCivilIngresado == "Soltero"){
		alert("Es soltero y no es menor.");
	}

}//FIN DE LA FUNCIÓN