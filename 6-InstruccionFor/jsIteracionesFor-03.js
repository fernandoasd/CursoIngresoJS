function mostrar()
{
	var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
	repeticiones=repeticiones+1;
	console.log("repeticiones " + repeticiones);
	for(var i=1; i<repeticiones; i++){
		alert("Hola UTN FRA " + i);
	}
	
}//FIN DE LA FUNCIÓN