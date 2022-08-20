let numbers = document.querySelectorAll('.num');
let displaybox = document.querySelector('.displaybox');
let answerbox = document.querySelector('.answerbox');

displaybox.innerText = ' ';

let operators = ['+','-','*','/','.'];

for(let number = 0; number < numbers.length; number++){
	numbers[number].addEventListener('click',function(){
		var currentnumber = this.getAttribute('data');

		let display = displaybox.innerText;
		let last = display.slice(display.length-1,display.length);

		if(operators.includes(currentnumber)){
			if(displaybox.innerText === ''){
				window.alert('type in a number before an operator');
			}else if(operators.includes(last)){
				window.alert('two operators cannot be continuous');
			}else{
				displaybox.innerText += `${currentnumber}`;
			}
		}else{
			displaybox.innerText += `${currentnumber}`;
		}

		if(answerbox.innerText !== '='){
			displaybox.innerText = '';
			answerbox.innerText = '=';
		}

	});
}

answerbox.innerText = '=';


function calculate(){

	let display = displaybox.innerText;
	let last = display.slice(display.length-1,display.length);

	if(operators.includes(last)){
		window.alert('statement cannot end with operator');
	}else{
		let answer = eval(displaybox.innerText);
		if(answer < 1){
			let standardanswer = answer.toFixed(3);
			answerbox.innerText = standardanswer + "=";	
		}else{
			let standardanswer = answer;
			answerbox.innerText = standardanswer + "=";
		}
	}
}

function clearall(){
	if(displaybox.innerText != ''){
		displaybox.innerText = '';
		answerbox.innerText = '=';
	}else{
		window.alert('nothing has been typed yet');
	};
}

function deleteone(){
	let order = displaybox.innerText;
	displaybox.innerText = order.slice(0 , order.length-1);
}

function negative(){

	let display = displaybox.innerText;
	let last = display.slice(display.length-1,display.length);
	// console.log(last);
	if(last === '-'){
		window.alert('cannot calculate several negative');
	}else{
		displaybox.innerText += '-';
	}
}

