var calculateExponent = function (base, exponent) {
	var result = base;
	for(var i = 1 ; i < exponent ; i++) {
		result *= base;
	}
	return result;
}

// examples with the result in the console

console.log("2^3 = " + calculateExponent(2,3));
	// result => 2^3 = 8

console.log("5^4 = " + calculateExponent(5,4));
	// result => 5^4 = 625

// example with the result in an alert window
// requesting numbers to the user
var base = prompt("Enter the base:");
var exponent = prompt("Enter the exponent:");
// calculate
var result = base + "^" + exponent + " = " + calculateExponent(base,exponent);
// showing the result
alert(result);

