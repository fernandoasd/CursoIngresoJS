/******************************************************************************
 TP ER/S Ejercicio 3
 Fernando Malinowski
*******************************************************************************/

/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaIngresada;
    let fahrenheitACentigrados;

    temperaturaIngresada = txtIdTemperatura.value;
    temperaturaIngresada = parseInt(temperaturaIngresada);
    fahrenheitACentigrados = (temperaturaIngresada - 32) * (5/9);

    fahrenheitACentigrados =  fahrenheitACentigrados.toFixed(2);

    alert(temperaturaIngresada + " grados Fahrenheit equivalen a " + fahrenheitACentigrados + " grados centígrados.");
}


function CentigradosFahrenheit () 
{
    let temperaturaIngresada;
    let centigradosAFahrenheit;

    temperaturaIngresada = txtIdTemperatura.value;
    temperaturaIngresada = parseInt(temperaturaIngresada);
    centigradosAFahrenheit = (temperaturaIngresada * (9/5)) + 32;

    centigradosAFahrenheit = centigradosAFahrenheit.toFixed(2);

    alert(temperaturaIngresada + " grados centígrados equivalen a " + centigradosAFahrenheit + " grados Fahrenheit.");
}
