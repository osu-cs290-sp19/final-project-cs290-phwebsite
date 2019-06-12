

var createNewEquation = document.getElementById('add-equ-button');
createNewEquation.addEventListener('click', function(event){
	event.stopPropagation();
	var modal = document.getElementById('add-equ-modal');
	var backdrop = document.getElementById('modal-backdrop');
        modal.classList.remove('hidden');
	backdrop.classList.remove('hidden');
});

var cancel = document.getElementsByClassName('modal-cancel');
var x = document.getElementsByClassName('modal-close-button');

cancel[0].addEventListener('click', function(event) {
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


x[0].addEventListener('click', function(event) {
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

var search = document.getElementById('navbar-search-button');
search.addEventListener('click', function(event) {
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


