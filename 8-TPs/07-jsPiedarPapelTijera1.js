/******************************************************************************
TP Nº 7 Piedra, papel o tijera 1.0 (IF/SWITCH) 
 Fernando Malinowski
 07/02/2022
*******************************************************************************/

/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var objetoMaquina;

function comenzar()
{
    //debugger;

    //Genero el número RANDOM entre 1 y 3
    eleccionMaquina = (Math.random()*3)+1;

    //tomamos el valor entero del numero generado
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
        alert(`Felicidades, GANÓ contra ${objetoMaquina}`);
    }
    else 
    {
        if (eleccionMaquina == 2)
        {
            alert(`PERDIÓ contra ${objetoMaquina}`);
        } 
        else 
        {
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
        alert(`Felicidades, GANÓ contra ${objetoMaquina}`);
    } 
    else 
    {
        if (eleccionMaquina == 3)
        {
            alert(`PERDIÓ contra ${objetoMaquina}`);
        } 
        else 
        {
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
        alert(`Felicidades, GANÓ contra ${objetoMaquina}`);
    } 
    else 
    {
        if (eleccionMaquina == 1)
        {
            alert(`PERDIÓ contra ${objetoMaquina}`);
        } 
        else 
        {
            alert(`EMPATÓ contra ${objetoMaquina}`);
        }
    }

    //Comienza el juegode nuevo!
    comenzar();

}//FIN DE LA FUNCIÓN