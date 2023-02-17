/******************************************************************************
 Guia 4 - Ejercicio 03 - Instrucción While
 Fernando Malinowski
*******************************************************************************/

/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

function mostrar()
{
	let claveIngresada;
	let claveCorrecta;
	let boolean;

	claveCorrecta = "utn750"
	boolean = false;

	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != claveCorrecta)
	{
		claveIngresada = prompt("Clave incorrecta, ingrese la clave nuevamente.");
	}

	alert(`Bienvenido/a !!!`);



}//FIN DE LA FUNCIÓN
