/******************************************************************************
 
 Guia 1  Ejercicio 5
 Fernando Malinowski

*******************************************************************************/

/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

function mostrar()
{	
	let Nombre;

	Nombre = document.getElementById("txtIdNombre").value;

	let Edad;

	Edad = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " + Nombre + " y tiene " + Edad + " años.");
}

