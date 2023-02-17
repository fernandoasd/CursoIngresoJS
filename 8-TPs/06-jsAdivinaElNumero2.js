/******************************************************************************
TP Nº 6 Adivina el número 2.0 (IF/SWITCH) 
 Fernando Malinowski
 07/02/2022
*******************************************************************************/

/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var diferencia;
var adivinoOk;

adivinoOk = false;

// inicializo el contador en 0


function comenzar()
{
	let numeroIngresado;

	adivinoOk = false;

	// se reinicia el cantador
	contadorIntentos = 0;

	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = (Math.random()*100)+1;

	//tomamos el valor entero del numero generado
	numeroSecreto = Math.floor(numeroSecreto);

	// Esta lineas de codigo sirven para controlar cuantas veces sale 100 
	//como numero secreto con 100 generaciones de numeros random

	// for (let i=0; i <99; i++  )
	// {
	//   numeroSecreto = Math.random()*101;
	//   numeroSecreto = Math.floor(numeroSecreto);
	//
	//   if(numeroSecreto==100)
	//   {
	//       contadorIntentos++;
	//       console.log(numeroSecreto);
	//   }
	//  }
	//  console.log(`Contador ${contadorIntentos}`);


	// salida del numero random por consola
	console.log(`Numero Secreto: ` + numeroSecreto);
	
	// salida de intentos en cuadro de texto
	txtIdIntentos.value = contadorIntentos;

}

function verificar()
{

	numeroIngresado = txtIdNumero.value;

	numeroIngresado = parseInt(numeroIngresado);

	if(numeroIngresado != numeroSecreto ) //si los numeros NO coinciden
	{
		// con un intento fallido aumenta el contador en 1
		contadorIntentos++;

		if (numeroIngresado > numeroSecreto) // el nº ingresado es mayor
		{
		distancia = numeroIngresado - numeroSecreto;
		alert(`Se pasó ${distancia} del número secreto`);
		}
		else // el  ingresado es menor
		{
		distancia = numeroSecreto - numeroIngresado;
		alert(`Falta ${distancia} para el número secreto`);
		}
	}
	else // START si los numeros coinciden
	{
		// con un intento valido aumenta el contador en 1

		// If para que solo si es la primera vez que adivina aumenta el contador en 1
		// y una vez que adivinó no siga aumentando el contador por mas que le de a verificar
		if (adivinoOk == false)
		{
			contadorIntentos++;
			adivinoOk = true;
			console.log(adivinoOk);
		}
		
		// mnesaje según la cantidad de intentos
		if (contadorIntentos > 10 )
		{
			alert(`${contadorIntentos} intentos, Afortunado en el amor!!`);
		}
		else
		{
			if (contadorIntentos >5 )
			{
				alert(`Falta técnica`);
			}
			else
			{
				if (contadorIntentos == 5)
				{
					alert(`${contadorIntentos} intentos. Usted está en la media`);	
				}
				else
				{
					if (contadorIntentos == 4)
					{
						alert(`${contadorIntentos} intentos, Excelente técnica`);
					}
					else
					{
						if (contadorIntentos == 3)
						{
							alert(`Esto es suerte`);
						}
						else
						{
							if (contadorIntentos == 2)
							{
								alert(`${contadorIntentos} intentos. Excelente percepción`);
							}
							else
							{
								if (contadorIntentos == 1)
								{
									alert(`${contadorIntentos} intentos. Usted es un Psíquico`);
								}
							}
						}
					}
				}
			}
		}

	} // END si los numeros coinciden
	
	console.log(`Intentos ${contadorIntentos}`);

	// con cada intento se actualiza la salida de cantidad de intentos por cuadro de texto
	txtIdIntentos.value = contadorIntentos;

} // FIN DE LA FUNCIÓN 