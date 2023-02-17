/******************************************************************************
 Guia 2  Ejercicio 2
 Fernando Malinowski
*******************************************************************************/

//Enunciado:
//Al ingresar una edad debemos informar solo si la persona es mayor de edad

function mostrar()
{
	// declaración de variables
	let edadIngresada;

	// entrada de edad  
	edadIngresada = txtIdEdad.value;

	// parseo de datos
	edadIngresada = parseInt(edadIngresada);

	if ( edadIngresada > 17 ){
		alert("Es mayor de edad");
	}

}//FIN DE LA FUNCIÓN