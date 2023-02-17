/******************************************************************************
 Guia 3 - Ejercicio 09 - Instrucción Switch + If
 Fernando Malinowski
*******************************************************************************/

// Enunciado:
// una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 
// por cada estadia como base, se pide el ingreso de una estacion del año y localidad
// para vacacionar para poder calcular el precio final

// en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento
//  del 10% Mar del plata tiene un descuento del 20%

// en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aument
// o del 10% Mar del plata tiene un aumento del 20%

// en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del
//  10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento


// Con Switch-if
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let precioBase;
	let precioFinal;
	let mensaje;
	let porcentaje;
	let numberConPunto;

	estacionIngresada =txtIdEstacion.value;
	destinoIngresado =txtIdDestino.value;

	precioBase=15000;
	precioFinal=0;

	
	console.log(estacionIngresada + " " + destinoIngresado);

	
	switch(estacionIngresada)
	{
		case "Invierno":
			if(destinoIngresado == "Bariloche")
			{
				porcentaje = 20;
			}
			else
			{
				if(destinoIngresado == "Mar del plata")
				{
					porcentaje = -20;
				}
				else
				{
					porcentaje = -10;
				}
			}
			break;

		case "Verano":
			if(destinoIngresado == "Bariloche")
			{
				porcentaje = -20;
			}
			else
			{
				if(destinoIngresado == "Mar del plata")
				{
					porcentaje = 20;
				}
				else
				{
					porcentaje = 10;
				}
			}
			break;

		default: //Otoño y Primavera
			if(destinoIngresado == "Cordoba")
			{
				porcentaje = 0;
			}
			else
			{
				porcentaje = 10;
			}
			break;
	}


	precioFinal = precioBase + (precioBase * porcentaje/100);

	console.log(`porcentaje= ${porcentaje}`);

	numberConPunto = Intl.NumberFormat("de-DE").format(precioFinal);

	mensaje = `Precio final: $${numberConPunto}`;

	alert(mensaje);//salida de datos
	

}//FIN DE LA FUNCIÓN



/*

	// Con Switch

function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let precioBase;
	let precioFinal;
	let mensaje;
	let porcentaje;
	let numberConPunto;

	estacionIngresada =txtIdEstacion.value;
	destinoIngresado =txtIdDestino.value;

	precioBase=15000;
	precioFinal=0;

	
	console.log(estacionIngresada + " " + destinoIngresado);

	
	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 20;
					break;

				case "Mar del plata":
					porcentaje = -20;
					break;

				default:
					porcentaje = -10;
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = -20;
					break;
				
				case "Mar del plata":
					porcentaje = 20;
					break;

				default:
					porcentaje = 10;
			}
			break;

		default: //Otoño y Primavera
			switch(destinoIngresado)
			{
				case "Cordoba":
					porcentaje = 0;
					break;

				default:
					porcentaje = 10;
			}
			break;
	}


	precioFinal = precioBase + (precioBase * porcentaje/100);

	numberConPunto = Intl.NumberFormat("de-DE").format(precioFinal);

	mensaje = `Precio final: $${numberConPunto}`;

	alert(mensaje);//salida de datos
	

}//FIN DE LA FUNCIÓN
*/

