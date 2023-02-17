/******************************************************************************
 Guia 4 - Ejercicio 10 - Instrucción While
 Fernando Malinowski
*******************************************************************************/

/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos). */

function mostrar()
{
	//declaramos variables
	let continuar;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let banderaDelPrimero;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let resto;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPosNeg;

	//Inicializamos variables
	contadorNegativos = 0;
	contadorPositivos = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;
	diferenciaPosNeg = 0;
	continuar = "si";
	banderaDelPrimero = "es el primero";

	do  // continuar
	{
		numeroIngresado = prompt("-Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);

		while (isNaN(numeroIngresado)) //valida que no ingrese NaN
		{
			numeroIngresado = prompt(`-${numeroIngresado} no es un caracter válido.Ingrese un número.`);
			numeroIngresado = parseInt(numeroIngresado); //lo parseo para que si ingresa "" -> isNaN("") -> true
		}
		

		if (numeroIngresado ==  0) //contador de ceros
		{ 
			contadorCeros++;
		}
			else
			{
				if (numeroIngresado < 0) //contador negativos
				{
					sumaNegativos += numeroIngresado;
					contadorNegativos++;
				}
				else // contador numeros positivos
				{
				sumaPositivos += numeroIngresado;
				contadorPositivos++;
				}

			}
		

		if(banderaDelPrimero == "es el primero") //bandera max min
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = "no es el primero";
			console.log(`Primer número= ${numeroIngresado}`);
		}
		else
		{
			if (numeroIngresado > numeroMaximo) //nuevo maximo
			{
				numeroMaximo = numeroIngresado;
				console.log(`Nuevo maximo= ${numeroMaximo}`);
			}
			else //nuevo minimo
			{
				numeroMinimo = numeroIngresado;
				console.log(`Nuevo minimo= ${numeroMinimo}`);
			}
		}

		resto = numeroIngresado % 2; 
		if (resto == 0) //contador nº pares
		{
			contadorPares++;
		}

		if (contadorPositivos > 0)// promedio positivos
		{
			promedioPositivos = sumaPositivos / contadorPositivos;
		}

		if (contadorNegativos > 0)// promedio negativos
		{
			promedioNegativos = sumaNegativos / contadorNegativos;
		}

		diferenciaPosNeg = sumaPositivos + sumaNegativos; //diferencia entre positivos y negativos

		continuar= prompt("¿Desea continuar? si/no");
	}//fin del do-while
	while(continuar == "si");
	
	document.write(`1-La suma de negativos es ${sumaNegativos}. <br>`);
	document.write(`2-La suma de positivos es ${sumaPositivos}. <br>`);
	document.write(`3-La cantidad de positivos es ${contadorPositivos}. <br>`);
	document.write(`4-La cantidad de negativos es ${contadorNegativos}. <br>`);
	document.write(`5-La cantidad de ceros es ${contadorCeros}. <br>`);
	document.write(`6-La cantidad de números pares es ${contadorPares}. <br>`);
	document.write(`7-El promedio de números positivos es ${promedioPositivos}. <br>`);
	document.write(`8-El promedio de números negativos es ${promedioNegativos}. <br>`);
	document.write(`9-La diferencia entre positivos y negativos es ${diferenciaPosNeg}. <br>`);
	

}//FIN DE LA FUNCIÓN

