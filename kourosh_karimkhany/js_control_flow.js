//Your code here
var result = 0;
var exponator = function(base, exponent) {
	result = base;
	for (var i = 1; i < exponent; i++) {
		result *= base; 
	}
	return result;
}

console.log(exponator(11, 3));