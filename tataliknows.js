const magic_word = ['T', 'A', 'T', 'A', 'L', 'I', 'K', 'N', 'O', 'W', 'S'];
const magic_n = magic_word.length
let answer = "";
let magic_activated = true;
let counter = 0;

function process_key(e){
	e = e || window.event;
	let key_code = e.keyCode;
	let char = String.fromCharCode(key_code);
	/*
		key codes
			8: backspace
			32: space
			48-90: numbers and letters
			186: semi-colon
			191: question mark
	*/
	
	if(magic_activated){
		if(key_code === 186){
			//semi-colon deactivates the magic
			magic_activated = false;
		}else if((key_code >= 48 && key_code <= 90) || key_code === 32){
			answer += char;
			document.getElementById("question").value += magic_word[counter % magic_n].toUpperCase();
			counter++;
		}else if (key_code === 8){
			answer = answer.substr(0, answer.length - 1)
			char_delete();
		}
	}else {
		if(key_code === 8){
			char_delete();
		}else if(key_code === 191){
			document.getElementById("question").value += '?';
			show_answer()
		}else if((key_code >= 48 && key_code <= 90) || key_code === 32){
			document.getElementById("question").value += char.toUpperCase();
		}
	}
}

function char_delete(){
	let question = document.getElementById("question").value
	document.getElementById("question").value = question.substr(0, question.length - 1);			
}

function clean_up(){
	document.getElementById("question").value = "";
	document.getElementById("answer").value = "";
	reset_variables();
}

function show_answer(){
	document.getElementById("answer").value = answer;
	reset_variables();
}

function reset_variables(){
	counter = 0;
	magic_activated = true;
	answer = ""
}