function cargar_producto() {
	//Almacenamiento de valores
	//Valor del ID
	let idn1 = document.getElementById("idn1").value;
	//Descripción
	let idd1 = document.getElementById("idd1").value;
	//Precio
	let idp1 = document.getElementById("idp1").value;
	//Variables finales
	let idpf = document.getElementById("idp");
	let iddf = document.getElementById("idd");
	let idpff = document.getElementById("idpe");
	
	//Mostrar en consola el paso de parametros
	console.log(idn1);
	console.log(idd1);
	console.log(idp1);
	
	//Despliegue de la información en la tabla
	idpf.innerHTML=idn1;
	iddf.innerHTML=idd1;
	idpff.innerHTML=idp1;
}
function totalClick(click) {
	var subtotal=0;
	var totalClicks = document.getElementById('totalClicks');
	var subtotalf = document.getElementById("h5style");
	var valuesum = parseInt(totalClicks.innerText) + click;
	totalClicks.innerText = valuesum;
	subtotal=valuesum*10;
	subtotalf.innerHTML="SubTotal: "+subtotal;
	//Comprobar si la consola da el resultado correcto
	//console.log(subtotal);


	//Evitar los valores negativos
	if(valuesum < 1) {
		totalClicks.innerText=1;
		
		alert('El valor no puede ser menor que 1');
	}
}