/******************************************************************************
 Guia 4 - Ejercicio 08 - Instrucción While
 Fernando Malinowski
*******************************************************************************/
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "si";

	while (respuesta == "si" )
	{
		numeroIngresado = prompt(`-Ingrese un número.`);
		numeroIngresado = parseInt(numeroIngresado);
		
		while (isNaN(numeroIngresado)) //valida que no ingrese NaN
		{
			alert(`-${numeroIngresado} no es un caracter válido. Por favor ingrese un número.`); //mensaje de error

			numeroIngresado = prompt(`-Ingrese un número.`);
			numeroIngresado = parseInt(numeroIngresado); //lo parseo para que si ingresa "" -> isNaN("") -> true
		}

		if (numeroIngresado > 0) // si es POSITIVO...
		{
			console.log(`${numeroIngresado}`);
			sumaPositivos += numeroIngresado;
		}
		else
		{
			console.log(`${numeroIngresado}`); //si es NEGATIVO...
			multiplicacionNegativos *= numeroIngresado;
		}

		txtIdSuma.value=`Suma de numeros positivos: ${sumaPositivos}.`;
		txtIdProducto.value=`Producto de numeros negativos: ${multiplicacionNegativos}.`;

		respuesta = prompt(`¿Desea ingresar otro número? si/no`);
	}


}//FIN DE LA FUNCIÓN