/******************************************************************************
 Guia 1  Ejercicio 10
 Fernando Malinowski
*******************************************************************************/

/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	// declaración de variables
	let importe;
	let descuento;
	let resultado;

	// inicializo variable: descuento porcentual
	descuento = 25;

	// entrada de datos
	importe = txtIdImporte.value;
	importe = parseInt(importe);
	
	// cuantas
	resultado = importe*(1-(descuento/100));

	// salida de datos
	document.getElementById("txtIdResultado").value=resultado;
}
