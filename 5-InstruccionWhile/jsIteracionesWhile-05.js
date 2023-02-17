/******************************************************************************
 Guia 4 - Ejercicio 05 - Instrucción While
 Fernando Malinowski
*******************************************************************************/

/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("Ingrese su sexo:\n   -f para femenino.\n   -m para masculino. ");

	while (sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Caracter Incorrecto! \nIngrese su sexo \n   -F para femenino. \n   -M para masculino. ");
	}


	if(sexoIngresado == "f") //el if es solo para la salida por el textbox
	{
		txtIdSexo.value = `Su sexo ingresado es femenino.`;
	}
	else
	{
		txtIdSexo.value = `Su sexo ingresado es masculino.`;
	}

}//FIN DE LA FUNCIÓN