/******************************************************************************
TP Nº 5 Adivina el número 1.0 (IF/SWITCH) 
 Fernando Malinowski
 07/02/2022
*******************************************************************************/

/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;



function comenzar() 
{
  let numeroIngresado;

  // inicializo el contador en 0
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
	console.log("Numero Secreto: " + numeroSecreto);
  
  // salida de intentos en cuadro de texto
  txtIdIntentos.value = contadorIntentos;


}

function verificar()
{
  let diferencia;

	numeroIngresado = txtIdNumero.value;

  numeroIngresado = parseInt(numeroIngresado);

  if(numeroIngresado != numeroSecreto ) //si los numeros NO coinciden
  {
    contadorIntentos++;
    txtIdIntentos.value = contadorIntentos;

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
  else //si los numeros coinciden
  {
    contadorIntentos++;
    alert(`Usted es un ganador!!! y en solo ${contadorIntentos} intentos`)

  }
	
}