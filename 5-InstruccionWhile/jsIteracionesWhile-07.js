/******************************************************************************
 Guia 4 - Ejercicio 07 - Instrucción While
 Fernando Malinowski
*******************************************************************************/

/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
	let respuesta;

	contador=0;
	acumulador=0;
	respuesta=`si`;

	while (respuesta == `si` )
	{
		numeroIngresado = prompt(`-Ingrese un número. \n(${contador+1})`);
		numeroIngresado = parseInt(numeroIngresado);
		
		while (isNaN(numeroIngresado)) //valida que no ingrese NaN
		{
			alert(`-${numeroIngresado} no es un caracter válido. Por favor ingrese un número.`); //mensaje de error

			numeroIngresado = prompt(`-Ingrese un número. \n(${contador+1})`);
			numeroIngresado = parseInt(numeroIngresado); //lo parseo para que si ingresa "" -> isNaN("") -> true
		}

		acumulador+=numeroIngresado;
		contador++;

		respuesta = prompt(`¿Desea con todo su corazón ingresar otro número? si/no`);
	}

	promedio = acumulador/contador;
	promedio = promedio.toFixed(2); // Hasta 2 cifras decimales

	txtIdSuma.value=`Suma acumulada: ${acumulador}.`;
	txtIdPromedio.value=`Promedio: ${promedio}.`;

}//FIN DE LA FUNCIÓN