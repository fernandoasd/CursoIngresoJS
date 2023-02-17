/******************************************************************************
 Guia 1  Ejercicio 8
 Fernando Malinowski
*******************************************************************************/

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto()
{
	// defición de variables
	let numeroUno;
	let numeroDos;
	let resultado;

	// entrada de datos
	numeroUno = txtIdNumeroDividendo.value;
	numeroDos = txtIdNumeroDivisor.value;

	// parseo de datos
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	// operación
	resultado = numeroUno%numeroDos;

	// salida de datos
	alert("El resto es " + resultado);
}
