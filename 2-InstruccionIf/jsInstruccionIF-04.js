/******************************************************************************
 Guia 2  Ejercicio 4
 Fernando Malinowski
*******************************************************************************/

// Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .

function mostrar()
{
	// declaración de variables
	let edadIngresada;

	// entrada de edad  
	edadIngresada = txtIdEdad.value;

	// parseo de datos
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada > 12 && edadIngresada < 18 ){
		alert("Es adolescente");
	}

}//FIN DE LA FUNCIÓN