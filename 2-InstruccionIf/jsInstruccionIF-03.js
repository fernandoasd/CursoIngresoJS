/******************************************************************************
 Guia 2  Ejercicio 3
 Fernando Malinowski
*******************************************************************************/

//Enunciado:
// Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

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
		} else {
			alert("Usted es menor de edad");
		}

}//FIN DE LA FUNCIÓN