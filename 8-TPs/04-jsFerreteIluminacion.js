/******************************************************************************
TP Nº 4 Ferrete Iluminación (IF/SWITCH) 
 Fernando Malinowski
 07/02/2022
*******************************************************************************/

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
 */

function CalcularPrecio () 
{
    //declaración de variables
 	let cantidadLamparas;
    let marcaLampara;
    let precioConDescuentoAplicado;
    let descuento;
    let impuestoIIBB;
    let multiplicadorDescuento;

    // inicialización
    const UNIDADLAMPARA = 35;
    const MULTIPLICADORIIBB = 0.1;
    descuento = 0;
    impuestoIIBB = 0;

    // entrada de datos
    cantidadLamparas = txtIdCantidad.value;
    marcaLampara = Marca.value;

    //parseo de datos
    cantidadLamparas = parseInt(cantidadLamparas);

    // Comienzo defición del descuento a aplicar

    // START A ----------------------------------------- A
    if (cantidadLamparas>5) 
    {  
        descuento = 50;
    } 
    // END A ----------------------------------------- A
    else 
    // debugger;
    {
        if (cantidadLamparas == 5) // START B ----------------------------------------- B
        { 
            descuento = 30;
            if (marcaLampara == "ArgentinaLuz")
            {
                descuento = 40;
            }
        } // END B ----------------------------------------- B
         
        else 
        {
            if (cantidadLamparas == 4) // START C ----------------------------------------- C
            {
                descuento = 20;
                console.log("descuento: " + descuento);
                if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
                {
                    descuento = 25;
                    console.log("descuento: " + descuento);
                }
            } // END C ----------------------------------------- C
            
            else 
            { 
                if (cantidadLamparas == 3) // START D ----------------------------------------- D
                {
                    if(marcaLampara == "ArgentinaLuz")
                    {
                        descuento = 15;
                    }
                    else
                    {
                        if(marcaLampara == "FelipeLamparas")
                        {
                            descuento = 10;
                        }
                        else
                        {
                            descuento = 5;
                        }
                    }
                } // END D ----------------------------------------- D
            }
        } 
    } 
    // Fin defición del descuento a aplicar

    //cálculo del precio con descuento aplicado
    multiplicadorDescuento = (1-(descuento/100));
    precioConDescuentoAplicado = cantidadLamparas * UNIDADLAMPARA * multiplicadorDescuento;

    //salida por consola
    console.log("Marca: " + marcaLampara + " Cantidad: " + cantidadLamparas);
    console.log("Descuento: " + descuento);


    // Comienzo logica para saber si aplica IIBB
    if (precioConDescuentoAplicado > 120)
    { // E ----------------------------------------- E ( Aplica IIBB )

        impuestoIIBB = precioConDescuentoAplicado*MULTIPLICADORIIBB;

        // SALIDA POR ALERT()
        alert("Usted pagará $ " + impuestoIIBB + " de IIBB.");

    } 

    //salida de datos por cuadro de texto
    txtIdprecioDescuento.value = precioConDescuentoAplicado +  impuestoIIBB;

    //salida por consola
    console.log("Aplica pago IIBB por : $" + impuestoIIBB);
    console.log("Multiplicador de descuento: " + multiplicadorDescuento);
    console.log(cantidadLamparas + " * " + UNIDADLAMPARA + " * " + multiplicadorDescuento + 
    " + " + impuestoIIBB + "(IIBB) " + " = " + (precioConDescuentoAplicado+impuestoIIBB));

} //FIN DE FUNCIÓN
