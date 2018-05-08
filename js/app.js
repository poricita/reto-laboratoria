function clickLoginButton() {
	if (userName.value) {
	var name = document.getElementById('userName'); // le entrega valor a name
	document.getElementById('welcomeMessage').innerHTML = '¡Bienvenid@, ' + name.value + '!'; //  imprime el mensaje en html
    document.getElementById('buttonsYesNo').style.display = 'block'  //  muestra opciones de si o no para jugar
    document.getElementById('login').style.display = 'none'  // desaparece el input para poner nombre
    } else {
	alert('No se ha ingresado un nombre');
	return false;
	}
}

//buttonLogin.addEventListener('click', clickLoginButton);  (no se necesita)

function clickYesButton() {
	document.getElementById('questions').style.display = 'block'  // hace aparecer las preguntas
    document.getElementById('buttonsYesNo').style.display = 'none'
}

//buttonYes.addEventListener('click', clickYesButton); (no se necesita)

function clickNoButton() {
	alert('Qué lastima, te esperamos a la próxima '); // envía alert por seleccionar "no"
}

function clickSendAnswers() {
	var questionOne = ''; //  para definir el valor de la primera pregunta
	if (document.getElementById('optionOne').checked) {
		questionOne = document.getElementById('optionOne').value;
	}
	if (document.getElementById('optionTwo').checked) {
		questionOne = document.getElementById('optionTwo').value;
	}
	if (document.getElementById('optionThree').checked) {
		questionOne = document.getElementById('optionThree').value;
	}
	var questionTwo = ''; // para definir el valor de la segunda pregunta
	if (document.getElementById('optionFour').checked) {
		questionTwo = document.getElementById('optionFour').value;
	}
	if (document.getElementById('optionFive').checked) {
		questionTwo = document.getElementById('optionFive').value;
	}
	if (document.getElementById('optionSix').checked) {
		questionTwo = document.getElementById('optionSix').value;
	}
	var questionThree = ''; // para definir el valor de la tercera pregunta
	if (document.getElementById('optionSeven').checked) {
		questionThree = document.getElementById('optionSeven').value;
	}
	if (document.getElementById('optionEight').checked) {
		questionThree = document.getElementById('optionEight').value;
	}
	if (document.getElementById('optionNine').checked) {
		questionThree = document.getElementById('optionNine').value;
	}
	var questionOnePoints = ''; // checkea respuestas correctas
	if (questionOne === '1') {
		questionOnePoints = 1;	
	}
	else {
		questionOnePoints = 0;
	}

	var questionTwoPoints = '';
	if (questionTwo === '1') {
		questionTwoPoints = 1;
	}
	else {
		questionTwoPoints = 0;
	}

	var questionThreePoints = '';
	if (questionThree === '1') {
		questionThreePoints = 1;
	}
	else {
		questionThreePoints = 0;
	}
	var correctAnswers = questionOnePoints + questionTwoPoints + questionThreePoints; // suma puntos

	document.getElementById('points').innerHTML = 'Tu puntaje es de ' + correctAnswers + ' puntos.'; // entrega el resultado
	document.getElementById('questions').style.display ='none'
}