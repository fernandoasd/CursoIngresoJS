/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function dateAndTime(){

	let dateAndTimeP;
	let buttonDateAndTime;
	let contador;

	dateAndTimeP = document.getElementById("dateAndTime");
	buttonDateAndTime = document.getElementById("buttonDateAndTime");

	if (dateAndTimeP.innerHTML === ("")){ // si esta vacio

		dateAndTimeP.innerHTML = Date();
		buttonDateAndTime.innerHTML = "Hide Date and Time.";
		buttonDateAndTime.style = "background:#f50056;"; //rojo
		console.log("se muestra date and time");

	} else {

	 dateAndTimeP.innerHTML = ""; // si aparece el Date and Time
	 buttonDateAndTime.innerHTML = "Show Date and Time.";
	 buttonDateAndTime.style = "background:#1BA045;"; //verde
	 console.log("se quita date and time");

	}

}

function changeImage(){

	let image = document.getElementById("bulbId");

		if (image.src.match("bulbon")) {

			image.src = "./img/pic_bulboff.gif";
			console.log("Bulb off");

		} else {

			image.src = "./img/pic_bulbon.gif";
			console.log("Bulb on");
		}
}

function crearObjeto(){

	let nombre;
	let edad;
	let estadoCivilIngresado;
	let altura;
	let colorFavorito;

	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;
	estadoCivilIngresado = estadoCivil.value;
	altura = txtIdAltura.value;
	colorFavorito = txtIdColorFavorito.value;

	edad = parseInt(edad);
	altura = parseInt(altura);

	var persona = new Person(nombre, edad, estadoCivilIngresado, altura, colorFavorito);

	// var person = {
	// 	name: nombre,
	// 	age: edad,
	// 	civilStatus: estadoCivilIngresado,
	// 	height: altura,
	// 	favoriteColor: colorFavorito,
	// };

 	console.log(persona);

 function Person (name, age, civilStatus, height, favoriteColor) {

		this.name = name;
		this.age = age;
		this.civilStatus = civilStatus;
		this.height = height;
		this.favoriteColor = favoriteColor;
	}
}


// ARRAY

function  createArray() 
{
	
	let primerArray;
	// 1-This tyntax declares an Array() with elements:

	primerArray = new Array("primery", "second", "thrird", "forth", "fifth" );

	console.log(primerArray);

	// 2- You can also declares the Array() first, them tell it the number of elements it will store
	//, and add the elements later:

	primerArray = new Array(3);
	primerArray[0] = "Hola";
	primerArray[1] = " , Esto es ";
	primerArray[2] = "un array.";

	console.log(primerArray);

	// 3-You can declare a Array() and no pass any arguments with the Array() constructor.
	// You can add many elements as you need.

	primerArray = new Array();
	primerArray[0] = "Hola";
	primerArray[1] = " , esto es ";
	primerArray[2] = "un array";
	primerArray[3] = " dinámico.";

	console.log(primerArray);

	// 4-For greater simplicity, readability, and execution speed, you can also declare Array();
	// using the array literal Syntax:

	primerArray = ["Esta es ", " la forma mas", " simple de declarar", "un Array()"];
	console.log(primerArray);
}


