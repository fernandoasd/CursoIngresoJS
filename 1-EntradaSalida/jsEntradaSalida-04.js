/******************************************************************************
 
 Guia 1  Ejercicio 3
 Fernando Malinowski

*******************************************************************************/

/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()

{
	let NombreIngresado;

	NombreIngresado = prompt("Ingrese su nombre","Fernando Malinowski");

	document.getElementById("txtIdNombre").value=NombreIngresado;

}

