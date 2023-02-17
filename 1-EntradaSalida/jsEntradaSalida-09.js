/******************************************************************************
 Guia 1  Ejercicio 9
 Fernando Malinowski
*******************************************************************************/

/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	// declaración de variables
	let sueldo;
	let aumentoPorcentual;
	let resultado;

	//inicialización de variables
	aumentoPorcentual = 10;

	// entrada de datos
	sueldo = txtIdSueldo.value;

	// parseo de datos
	sueldo = parseFloat(sueldo);

	// cálculo del aumento
	resultado = sueldo*(1+(aumentoPorcentual/100));

	// salida de datos por cuadro de texto
	document.getElementById("txtIdResultado").value=resultado;
}
