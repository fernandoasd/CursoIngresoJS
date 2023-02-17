/******************************************************************************
TP Nº 8 Piedra, papel o tijera 2.0 (IF/SWITCH) 
 Fernando Malinowski
 07/02/2022
*******************************************************************************/

// Enunciado:
// 3. Piedra, Papel o Tijera (v 2.0):
// Ahora debemos informar cuantas veces se ganó, perdió o empató desde la última recarga de página

var eleccionMaquina;
var ContadorDeEmpates=0; //txtIdEmpatadas
var ContadorDeGanadas=0; //txtIdGanadas
var ContadorDePerdidas=0; //txtIdPerdidas
var objetoMaquina;



function comenzar()
{
    //debugger;

	// salida por cuadros de texto
	txtIdGanadas.value = `Juegos ganados: ${ContadorDeGanadas}` ;
	txtIdEmpatadas.value = `Juegos empatados: ${ContadorDeEmpates}`;
	txtIdPerdidas.value = `Juegos perdidos: ${ContadorDePerdidas}`;

    //Genero el número RANDOM entre 1 y 3
    eleccionMaquina = (Math.random()*3)+1;

    //tomamos el valor entero del numero RANDOM
    eleccionMaquina = Math.floor(eleccionMaquina);

    console.log(`Elección máquina: ${eleccionMaquina}`);

    //selecciona el correspondiente objetoMaquina segun el numero aleatorio eleccionMaquina
    if (eleccionMaquina == 1)
    {
        objetoMaquina = "piedra";
    } 
    else
    {
        if (eleccionMaquina == 2)
        {
            objetoMaquina = "papel";
        }
        else
        {
            objetoMaquina = "tijera";
        }
    }

    console.log(`Objeto máquina : ${objetoMaquina}`);

}//FIN DE LA FUNCIÓN


function piedra() // 1
{
    console.log(`Usuario : Piedra`);

    if (eleccionMaquina == 3)
    {
		ContadorDeGanadas++;
        alert(`Felicidades, GANÓ contra ${objetoMaquina}`);
    }
    else 
    {
        if (eleccionMaquina == 2)
        {
			ContadorDePerdidas++;
            alert(`PERDIÓ contra ${objetoMaquina}`);
        } 
        else 
        {
			ContadorDeEmpates++;
            alert(`EMPATÓ contra ${objetoMaquina}`);
        }
    }


    //Comienza el juego de nuevo!
    comenzar();

}//FIN DE LA FUNCIÓN


function papel() // 2
{
    console.log(`Usuario : Papel`);

    if (eleccionMaquina == 1)
    {
		ContadorDeGanadas++;
        alert(`Felicidades, GANÓ contra ${objetoMaquina}`);
    } 
    else 
    {
        if (eleccionMaquina == 3)
        {
			ContadorDePerdidas++;
            alert(`PERDIÓ contra ${objetoMaquina}`);
        } 
        else 
        {
			ContadorDeEmpates++;
            alert(`EMPATÓ contra ${objetoMaquina}`);
        }
    }

    //Comienza el juego de nuevo!
    comenzar();

}//FIN DE LA FUNCIÓN


function tijera() // 3
{
    console.log(`Usuario : Tijera`);

    if (eleccionMaquina == 2)
    {
		ContadorDeGanadas++;
        alert(`Felicidades, GANÓ contra ${objetoMaquina}`);
    } 
    else 
    {
        if (eleccionMaquina == 1)
        {
			ContadorDePerdidas++;
            alert(`PERDIÓ contra ${objetoMaquina}`);
        } 
        else 
        {
			ContadorDeEmpates++;
            alert(`EMPATÓ contra ${objetoMaquina}`);
        }
    }

    //Comienza el juegode nuevo!
    comenzar();

}//FIN DE LA FUNCIÓN