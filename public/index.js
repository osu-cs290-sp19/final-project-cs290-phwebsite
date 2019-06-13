


function showModal(){
//	event.stopPropagation();
	var modal = document.getElementById('add-equ-modal');
	var backdrop = document.getElementById('modal-backdrop');
        modal.classList.remove('hidden');
	backdrop.classList.remove('hidden');
}

function close() {
//        event.stopPropagation();
        var equ = document.getElementById('equation-input');
        equ.value = "";
        var vari = document.getElementsByClassName('equ-var-input');
        for (var i = 0; i < vari.length; i++){
		vari[i].value = "";}
        var modal = document.getElementById('add-equ-modal');
        var backdrop = document.getElementById("modal-backdrop");
        modal.classList.add('hidden');
        backdrop.classList.add('hidden');
 }


/*x[0].addEventListener('click', function(event) {
        event.stopPropagation();
        var equ = document.getElementById('equation-input');
        equ.value = "";
        var vari = document.getElementsByClassName('equ-var-input');
        for (var i = 0; i < vari.length; i++){
                vari[i].value = "";}
        var modal = document.getElementById('add-equ-modal');
        var backdrop = document.getElementById("modal-backdrop");
        modal.classList.add('hidden');
        backdrop.classList.add('hidden');
 });

function insertEqu(equation,variables){
	var equElem = document.createElement('article');
	equElem.classList.add('equation');

	var equContentElem = document.createElement('div');
	equContentElem.classList.add('equation-content');
	equElem.appendChild(equContentElem);

	var equTextElem = document.createElement('div');
	equTextElem.classList.add('equation-text');
	var str1 = '<img src="http://latex.codecogs.com/svg.latex?'
	var image = str1.concat(equation,'" border="0"/>');
	equTextElem.innerHTML = image;
	equContentElem.appendChild(equTextElem);

	var varList = document.createElement('ul');
	varList.classList.add('equ-var-input');
	for (var i = 0; i < variables.length; i++){
		var varTextNode = document.createTextNode(variables[i].value);
		var varTextElem = document.createElement('li');
		varTextElem.classList.add('variable');
		varTextElem.appendChild(varTextNode);
		equTextElem.appendChild(varTextElem);} 

		var equContainer = document.querySelector('main.equation-container');
		equContainer.appendChild(equElem);
}

var accept = document.getElementsByClassName('modal-accept');
accept[0].addEventListener('click', function(event) {
	event.stopPropagation();
	var equationText = document.getElementById('equation-input').value;
	var vars = document.getElementsByClassName('equ-var-input');
	if (equationText.value == "")
		alert("Equation input is empty");
	else{
		insertEqu(equationText,vars);}
	var equ = document.getElementById('equation-input');
        equ.value = "";
        var vari = document.getElementsByClassName('equ-var-input');
        for (var i = 0; i < vari.length; i++){
                vari[i].value = "";}
        var modal = document.getElementById('add-equ-modal');
        var backdrop = document.getElementById("modal-backdrop");
        modal.classList.add('hidden');
        backdrop.classList.add('hidden');
});
*/



function getsubjectIdFromURL() {
  var path = window.location.pathname;
  var pathParts = path.split('/');
  if (pathParts[1] === "subjects") {
    return pathParts[2];
  } else {
    return null;
  }
}


function handleModalAcceptClick() {
  var variables = ["", "", "", ""];
  var equation = document.getElementById('equation-input').value.trim();
  var vars = document.getElementsByClassName('equ-var-input')
  for(var i=0; i<vars.length; i++) {
	variables[i] = vars[i].value.trim();
  }
  

  if (!equation) {
    alert("You must fill in the equation box!!");
  } else {

    var postRequest = new XMLHttpRequest();
    var requestURL = '/subjects/' + getsubjectIdFromURL()  + '/addEqu';
    postRequest.open('POST', requestURL);

    var requestBody = JSON.stringify({
      Equation: equation,
      variables: variables
    });

    postRequest.addEventListener('load', function (event) {
      if (event.target.status === 200) {
        var equationsTemplate = Handlebars.templates.equationsTemplate;
        var newEquationHTML = equationsTemplate({
          equationText: equation,
          variable1: variables[0],
	  variable2: variables[1], 
          variable3: variables[2],
	  variable4: variables[3]
        });
	console.log("http://latex.codecogs.com/svg.latex?" + equation);
	console.log(newEquationHTML);
        var equationContainer = document.querySelector('.equation-container');
        equationContainer.insertAdjacentHTML('beforeend', newEquationHTML);
      } else {
        alert("Error storing equation: " + event.target.response);
      }
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(requestBody);

    close();

  }

}




function search() {
	console.log("search clicked");
	event.stopPropagation();
	var searchInput = document.getElementById('navbar-search-input');
	var arrayEqus = document.getElementsByClassName('equation');
	var arrayEqusText = document.getElementsByClassName('equation-text');
	console.log(arrayEqusText);
	for (var i = 0; i<arrayEqusText.length; i++){
		var string1 = arrayEqusText[i].innerHTML;
		if (string1.includes(searchInput.value,45) === false){
		arrayEqus[i].classList.add('hidden');}
		else if (string1.includes(searchInput.value,45) === true){
                arrayEqus[i].classList.remove('hidden');}
		}
}





window.addEventListener('DOMContentLoaded', function () {

  var createNewEquation = document.getElementById('add-equ-button');
  if (createNewEquation) {
	console.log("in add button function");
    createNewEquation.addEventListener('click', showModal);
  }

  var accept = document.getElementsByClassName('modal-accept-button');
  if (accept[0]) {
    accept[0].addEventListener('click', handleModalAcceptClick);
  }

  var cancel = document.getElementsByClassName('modal-cancel-button');
  if(cancel[0]) {
	console.log("in cancel");
	cancel[0].addEventListener('click', close);
  }

  var x = document.getElementsByClassName('modal-close-button');
  if(x[0]) {
	x[0].addEventListener('click', close);
  }

  var search = document.getElementById('navbar-search-button');
  if(search) {
	search.addEventListener('click', function() {
        event.stopPropagation();
        var searchInput = document.getElementById('navbar-search-input');
        var arrayEqus = document.getElementsByClassName('equation');
        var arrayEqusText = document.getElementsByClassName('equation-text');
        for (var i = 0; i<arrayEqusText.length; i++){
                var string1 = arrayEqusText[i].innerHTML;
                if (string1.includes(searchInput.value,45) === false){
                arrayEqus[i].classList.add('hidden');}
                else if (string1.includes(searchInput.value,45) === true){
                arrayEqus[i].classList.remove('hidden');}
                }

  	});

   }
       
});
