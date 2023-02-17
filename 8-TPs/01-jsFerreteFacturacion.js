/******************************************************************************
 TP ER/S Ejercicio 1
 Fernando Malinowski
*******************************************************************************/


/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
	let precioUno;

    let precioDos;

    let precioTres;

    let subtotal;


    precioUno = txtIdPrecioUno.value;

    precioDos = txtIdPrecioDos.value;

    precioTres = txtIdPrecioTres.value;


    precioUno = parseFloat(precioUno);

    precioDos = parseFloat(precioDos);

    precioTres = parseFloat(precioTres);


    subtotal = precioUno + precioDos + precioTres;


    alert("La suma es: " + subtotal);
}
function Promedio () 
{
    let precioUno;

    let precioDos;

    let precioTres;

    let subtotal;

    let promedio;


    precioUno = txtIdPrecioUno.value;

    precioDos = txtIdPrecioDos.value;

    precioTres = txtIdPrecioTres.value;


    precioUno = parseFloat(precioUno);

    precioDos = parseFloat(precioDos);

    precioTres = parseFloat(precioTres);


    subtotal = precioUno + precioDos + precioTres;

    promedio = subtotal / 3;


    alert("El promedio es: " + promedio);
}

function PrecioFinal () 
{
    let precioUno;

    let precioDos;

    let precioTres;

    let subtotal;
    
    let IVA;

    let precioTotal;

    let impuesto;


    IVA = 21;


    precioUno = txtIdPrecioUno.value;

    precioDos = txtIdPrecioDos.value;

    precioTres = txtIdPrecioTres.value;


    precioUno = parseFloat(precioUno);

    precioDos = parseFloat(precioDos);

    precioTres = parseFloat(precioTres);


    subtotal = precioUno + precioDos + precioTres;

    impuesto = subtotal*(IVA/100);

    precioTotal = subtotal + impuesto;


    alert("  -Subtotal: $" + subtotal + "\n  -Impuestos: $" + impuesto + "\n  -Precio total: $" + precioTotal);
}