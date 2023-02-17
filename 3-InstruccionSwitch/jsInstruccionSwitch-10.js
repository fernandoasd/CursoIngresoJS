/******************************************************************************
 Guia 3 - Ejercicio 10 - Instrucción Switch Unicamente
 Fernando Malinowski
*******************************************************************************/

// Enunciado:
// una agencia de viajes nos piden informar si hacemos viajes a lugares según la
//  estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar
// en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
// en Verano: Se viaja a Mar del plata y Cataratas solamente
// en Otoño: Se viaja a todos los destinos.
// primavera: solo no se viaja a Bariloche

// Con Switch
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let mensaje;
	let casoNegativo;
	let casoAfirmativo;

	estacionIngresada =txtIdEstacion.value;
	destinoIngresado =txtIdDestino.value;

	casoAfirmativo = `Se viaja a`;
	casoNegativo =  `No se viaja a`;

	console.log(estacionIngresada + " " + destinoIngresado);

	switch(estacionIngresada){
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					mensaje = casoAfirmativo;
					break;
				default:
					mensaje = casoNegativo;
			}
			break;

		case "Verano":
			switch (destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = casoAfirmativo;
					break;
				default:
					mensaje = casoNegativo;
			}
			break;

		case "Otoño":
				mensaje = casoAfirmativo;
			break;

		case "Primavera":
			switch (estacionIngresada)
			{
				case "Bariloche":
					mensaje = casoNegativo;
					break;
				default:
					mensaje = casoAfirmativo;
			}
			break;
	}

	alert(`${mensaje} ${destinoIngresado} en ${estacionIngresada}. `);

}//FIN DE LA FUNCIÓN



/*
// Con Switch + If
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let mensaje;
	let casoNegativo;
	let casoAfirmativo;


	estacionIngresada =txtIdEstacion.value;
	destinoIngresado =txtIdDestino.value;

	casoAfirmativo = `Se viaja a`;
	casoNegativo =  `No se viaja a`;

	console.log(estacionIngresada + " " + destinoIngresado);


	switch(estacionIngresada){
		case "Invierno":
			if (destinoIngresado == "Bariloche")
			{
				mensaje = casoAfirmativo;
			}
			 else 
			{
				mensaje = casoNegativo;
			}
		break;

		case "Verano":
			if (destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas")
			{
				mensaje = casoAfirmativo;
			}	
			else
			{
				mensaje = casoNegativo;
			}
		break;

		case "Otoño":
				mensaje = casoAfirmativo;
		break;


		case "Primavera":
			if (destinoIngresado == "Bariloche")
			{
				mensaje = casoNegativo;
			}
			else 
			{
				mensaje = casoAfirmativo;
			}
		break;

	}

	alert(`${mensaje} ${destinoIngresado} en ${estacionIngresada}. `);

}//FIN DE LA FUNCIÓN
*/