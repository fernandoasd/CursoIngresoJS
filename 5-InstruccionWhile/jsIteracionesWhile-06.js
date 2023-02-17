/******************************************************************************
 Guia 4 - Ejercicio 06 - Instrucción While
 Fernando Malinowski
*******************************************************************************/

// Enunciado:
// Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.


function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador=0;
	acumulador=0;

	while (contador < 5 )
	{
		numeroIngresado = prompt(`-Ingrese un número. \n(${contador + 1} de 5)`);
		numeroIngresado = parseInt(numeroIngresado);
		
		while (isNaN(numeroIngresado)) //valida que no ingrese NaN
		{
			alert(`-${numeroIngresado} no es un caracter válido. Por favor ingrese un número.`); //mensaje de error

			numeroIngresado = prompt(`-Ingrese un número. \n(${contador + 1} de 5)`);

			numeroIngresado = parseInt(numeroIngresado); //lo parseo para que si ingresa "" -> isNaN("") -> true
		}

		acumulador+=numeroIngresado;
		contador++;
	}
	
	txtIdSuma.value=`Suma acumulada: ${acumulador}.`;
	txtIdPromedio.value=`Promedio: ${acumulador/5}.`;

}//FIN DE LA FUNCIÓN