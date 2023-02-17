/******************************************************************************
 Guia 4 - Ejercicio 09 - Instrucción While
 Fernando Malinowski
*******************************************************************************/

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	// declarar letiables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	//iniciar variables
	banderaDelPrimero = true;

	do
	{
	numeroIngresado = prompt(`-Ingrese un número.`);
	numeroIngresado = parseInt(numeroIngresado);
	
	while (isNaN(numeroIngresado)) //valida que no ingrese NaN
	{
		alert(`${numeroIngresado} no es un caracter válido. Por favor ingrese un número.`); //mensaje de error
		numeroIngresado = prompt(`-Ingrese un número.`);
		numeroIngresado = parseInt(numeroIngresado); //lo parseo para que si ingresa "" -> isNaN("") -> true
	}
		
	if (banderaDelPrimero || numeroIngresado > numeroMaximo)
	{
		numeroMaximo = numeroIngresado;
		console.log(`Nuevo maximo= ${numeroMaximo}`);
	}
	if(banderaDelPrimero || numeroIngresado < numeroMaximo)
	{
		numeroMinimo = numeroIngresado;
		console.log(`Nuevo minimo= ${numeroMinimo}`);
		banderaDelPrimero = false;
	}
	
	respuesta=prompt("¿Desea continuar? si/no");
	}

	while(respuesta == "si");

	txtIdMaximo.value = `El máximo: ${numeroMaximo}`;
	txtIdMinimo.value = `El mínimo: ${numeroMinimo}`;

}//FIN DE LA FUNCIÓN