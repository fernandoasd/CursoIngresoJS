/******************************************************************************
 Guia 2  Ejercicio 6
 Fernando Malinowski
*******************************************************************************/

//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
// o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

function mostrar()
{
	// declaración de variables
	let edadIngresada;

	// entrada de edad  
	edadIngresada = txtIdEdad.value;

	// parseo de datos
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada > 17){
		alert("Es mayor de edad");
	} else {
		if(edadIngresada > 12){
			alert("Es adolescente");
		} else {
			alert("Es un niño");
		}
	}

}//FIN DE LA FUNCIÓN