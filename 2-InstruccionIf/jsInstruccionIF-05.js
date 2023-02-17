/******************************************************************************
 Guia 2  Ejercicio 5
 Fernando Malinowski
*******************************************************************************/

// Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function mostrar()
{
	// declaración de variables
	let edadIngresada;

	// entrada de edad  
	edadIngresada = txtIdEdad.value;

	// parseo de datos
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada < 13 || edadIngresada > 17 ){
		alert("No es adolescente");
	}

}//FIN DE LA FUNCIÓN