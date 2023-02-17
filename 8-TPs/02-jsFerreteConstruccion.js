/******************************************************************************
 TP ER/S Ejercicio 2
 Fernando Malinowski
*******************************************************************************/

/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let perimetro;
    let cantidadAlambre;

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);


    perimetro = largoTerreno*2 + anchoTerreno*2;
    cantidadAlambre = perimetro*3;
    cantidadAlambre = cantidadAlambre.toFixed(2);

    alert("Se necesitan " + cantidadAlambre + " metros de alambre para hacer un alambrado de 3 filas de alambre.");
    
}
function Circulo () 
{
    let radioTerreno;
    let perimetro;
    let cantidadAlambre;

    radioTerreno = txtIdRadio.value;
    radioTerreno = parseInt(radioTerreno);

    perimetro = 2*Math.PI*radioTerreno;
    cantidadAlambre = perimetro*3;
    cantidadAlambre = cantidadAlambre.toFixed(2);

    alert("Se necesitan " + cantidadAlambre + " metros de alambre para hacer un alambrado de 3 filas de alambre.");
    
}
function Materiales () 
{
    let largoTerreno;
    let anchoTerreno;
    let cantidadCemento;
    let cantidadCal;
    let superficie;

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    superficie = largoTerreno * anchoTerreno;
    cantidadCemento = superficie*2;
    cantidadCal = superficie*3;

    alert("Se necesitan: \n" + cantidadCemento + " bolsas de cemento y \n" + cantidadCal + " bolsas de cal \npara hacer un contrapiso de una superficie de " + superficie + " metros cuadrados.");
    
}