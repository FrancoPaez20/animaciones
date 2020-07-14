function scrollAnimation(){

	//accedo a todos los elementos que quiero animar mediante una unica clase.
	let elemento = document.getElementsByClassName('elemento');

	//transformo el HTMLColection a un array.
	let arrayElemento = Array.from(elemento);

	//calculo el alto de la pantalla (el valor que divide puede variar dependiendo el elemento).
	let windowHeight = window.innerHeight / 1.2;

	//a cada elemento del array creado ke aplico la siguiente funcion.
	arrayElemento.forEach(x =>{ 

		//guardo le valor numero de cada elemento en una variable AUX.
		let aux = x.getBoundingClientRect().top; 

		//si la altura que hay desde el TOP del elemento a animar hasta el TOP de la ventana es MENOR a la altura de la panralla dividida por un valor X pasa esto.
		if(aux < windowHeight){

			//agrego la clase que lleva la animacion.
			x.classList.add('fade-in-bottom');
		}
	})

}

window.addEventListener('scroll', scrollAnimation);