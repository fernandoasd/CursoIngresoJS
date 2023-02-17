/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var primerNumero;
var segundoNumero;
var operadorRandom;
var operadorAritmetico;
var resultadoCorrecto;




function comenzar()
{
    // random entre 1 y 10 txtIdOperador
    primerNumero = Math.random()*10+1;
    segundoNumero = Math.random()*10+1;
    operadorRandom = Math.random()*4+1;

    //tomo solo numeros enteros
    primerNumero = Math.floor(primerNumero);
    segundoNumero = Math.floor(segundoNumero);
    operadorRandom = Math.floor(operadorRandom);

    //salida por cuadro de texto
    txtIdPrimerNumero.value = primerNumero;
    txtIdSegundoNumero.value = segundoNumero;

    switch (operadorRandom)
    {
        case 1:
            operadorAritmetico = "+";
            break;

        case 2:
             operadorAritmetico = "-";
            break;

        case 3: 
             operadorAritmetico = "*";
            break;

        default :
             operadorAritmetico = "/";
    }

    // salida de operador matematico por cuadro de texto
    txtIdOperador.value = operadorAritmetico;

    // borra respuesta previa
    txtIdRespuesta.value = "";



}//FIN DE LA FUNCIÓN


function Responder()
{
    // entrada de respuesta y parseo
    respuesta = txtIdRespuesta.value;
    respuesta = parseInt(respuesta);

    resultadoCorrecto = resultado();

	
    if (respuesta == resultadoCorrecto )
    {
        alert(`Correcto!! ${primerNumero} ${operadorAritmetico} ${segundoNumero} = ${resultadoCorrecto}`);
        console.log(`Corresto! Respuesta = ${resultadoCorrecto}`);
        comenzar();
    }
    else
    {
        alert(`Mal!! ${primerNumero} ${operadorAritmetico} ${segundoNumero} = ${resultadoCorrecto}`);
        console.log(` Mal! Respuesta = ${resultadoCorrecto}`);
        comenzar();
    }

}//FIN DE LA FUNCIÓN


function resultado()
{
    let resultado;

    switch (operadorRandom)
    {
        case 1: //suma
            resultado = primerNumero + segundoNumero;
            break;

        case 2: //resta
            resultado = primerNumero - segundoNumero;
            break;

        case 3: //multiplicacion
            resultado = primerNumero * segundoNumero;
            break;

        default : //division
            // los numeros RANDOM nunca son cero, asiq ue no hay indeterminación
            resultado = primerNumero / segundoNumero;
    }

    resultado = resultado.toFixed(0);
    
    console.log(`Resultado : ${resultado}`)

    // devuelve el resultado
    return resultado;

}