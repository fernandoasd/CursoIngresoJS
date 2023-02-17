/******************************************************************************
 Guia 2  Ejercicio 1
 Fernando Malinowski
*******************************************************************************/

//Enunciado:
// Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".

function mostrar()
{
	// declaración de variables
	let edadIngresada;

	// entrada de edad  
	edadIngresada = txtIdEdad.value;

	// parseo de datos
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada == 15){
		alert("Niña bonita");
	}

}//FIN DE LA FUNCIÓN