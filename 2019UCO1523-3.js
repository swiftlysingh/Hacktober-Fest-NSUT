function factorial(){
	var num = prompt("Enter a number: ")
	alert("factorial of "+num + " is "+ fact(num))
}
function fact(num){
	if(num <=1){
		return 1;
	}
	else{
		return num*fact(num-1);
	}
}

function date(){
	alert(Date());
}

function mul(){
	var a;
	var num = prompt("Enter a number");
	var answer = new String("Table of "+num+" is \n");
	for(var i=1;i<=10; i++){
		a = num * i;
		var temp = new String(num + " * "+i+" = "+ a +"\n");
		answer = answer.concat(temp);
	}
	alert(answer);
}

function sumofele(){
	var answer=0;
	var num= prompt("Enter a number");
	answer = parseInt(num);
	var ch = confirm("Do you want to enter second number: ");
	while (ch == true){
		var num2 = prompt("Enter a number: ");
		answer = answer+parseInt(num2);
		ch = confirm("Do you want to enter another number?");
	}
	alert("Sum of all numebers is " + answer);
}
