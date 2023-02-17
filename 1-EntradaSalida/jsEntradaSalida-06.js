/******************************************************************************
 Guia 1  Ejercicio 6
 Fernando Malinowski
*******************************************************************************/
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{
	let numeroUno;
	let numeroDos;
	let sumaTotal;

	numeroUno =document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	sumaTotal = numeroUno+numeroDos;
	alert("El resultado de la suma es " + sumaTotal);
}

