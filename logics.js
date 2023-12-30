function display() {
	var x = document.getElementById("selection").value;
	document.getElementById("display").innerHTML = "You selected:" + x;
}

function f2c (tmp) {
	tmp = parseFloat(tmp);
	document.getElementById("outputCelcius").innerHTML=(tmp-32)/1.8;
}

function c2f (tmp) {
	tmp = parseFloat(tmp);
	document.getElementById("outputCelcius").innerHTML=(tmp*1.8)+32;
}

function calc() {
	var x = document.getElementById("selection").value;
	if (x.localCompare("Fahrenheit_to_Celsius")) {

		f2c();
	}
	else {

		c2f();

	}
}

function clearAll() {
    document.getElementById("selection").reset();
}