/******************************************************************************
 TP  Ejercicio 12
 Fernando Malinowski
 Div I - 2023
*******************************************************************************/


/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() 
{
	// DECLARATION OF VARIABLES
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let sueldoBrutoIngresado;
	let numeroLegajoIngresado;
	let nacionalidadIngresada;
	let legajoValido;
	let legajoLength;
	let nacionalidadValidada;


	do { // AGE INPUT
		edadIngresada = prompt(`Ingrese edad: entre 18 y 90 años inclusive.`);
		edadIngresada = parseInt(edadIngresada);
	}
	while (isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90);

	txtIdEdad.value = `Edad validada: ${edadIngresada}`; // VALIDATED AGE OUTPUT


	do { // GNDER INPUT
		sexoIngresado = prompt(`Ingrese sexo: “M” para masculino y “F” para femenino.`);
	}
	while (sexoIngresado != "M" && sexoIngresado != "F");

	switch (sexoIngresado) {
		case "M":
			sexoIngresado = "Masculino";
			break;
		default:
			sexoIngresado = "Femenino";
	}
	txtIdSexo.value = `Sexo validado: ${sexoIngresado}`; // VALIDATED GENDER OUTPUT


	do { // CIVIL STATUS INPUT
		estadoCivilIngresado = prompt(`Ingrese estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos.`);
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}
	while (isNaN(estadoCivilIngresado) || estadoCivilIngresado > 4 || estadoCivilIngresado < 1);

	switch (estadoCivilIngresado) {
		case 1:
			estadoCivilIngresado = "Soltero";
			break;
		case 2:
			estadoCivilIngresado = "Casado";
			break;
		case 3:
			estadoCivilIngresado = "Divorciado";
			break;
		default:
			estadoCivilIngresado = "Viudo";
	}
	txtIdEstadoCivil.value = `Estado civil validado: ${estadoCivilIngresado}`; // VALIDATED CIVIL STATUS OUTPUT

	
	do { // GROSS SALARY INPUT
		sueldoBrutoIngresado = prompt(`ingrese sueldo bruto no menor a $8.000.`);
		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
	}
	while (isNaN(sueldoBrutoIngresado) || sueldoBrutoIngresado < 8000);

	txtIdSueldo.value = `Sueldo bruto validado: $${sueldoBrutoIngresado}`; // VALIDATED GROSS SALARY OUTPUT

	do {  // DOCKET INPUT
		numeroLegajoIngresado = prompt(`Ingrese numero de legajo de 4 cifras, sin ceros a la izquierda.`);
		numeroLegajoIngresado = parseInt(numeroLegajoIngresado);

		legajoLength = numeroLegajoIngresado.toString();
		legajoLength = legajoLength.length;

		if (legajoLength != 4) {
			legajoValido = false;
			console.log(legajoValido);
		} else {
			legajoValido = true;
		}
	}
	while (isNaN(numeroLegajoIngresado) || legajoValido == false);

	txtIdLegajo.value = `Numero de legajo validado: ${numeroLegajoIngresado}`; // VALIDATED DOCKET OUTPUT

	do { // NATIONALITY INPUT
		nacionalidadIngresada = prompt(`Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.`);

		switch (nacionalidadIngresada) {
			case "A":
			case "E":
			case "N":
				nacionalidadValidada = true;
				break;
			default:
				nacionalidadValidada = false;
		}
	}
	while (nacionalidadValidada == false);

	switch(nacionalidadIngresada)
	{
		case "A":
			nacionalidadIngresada = "Argentino";
			break;
		case "E":
			nacionalidadIngresada = "Extranjero";
			break;
		default:
			nacionalidadIngresada = "Nacionalizado";
	}
	txtIdNacionalidad.value = `Nacionalidad validada: ${nacionalidadIngresada}`; // VALIDATED NATIONALITY OUTPUT


} // END FUNCTION