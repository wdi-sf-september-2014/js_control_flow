var calculateExponent = function(num1,num2) {
	//The easy way
	//console.log(Math.pow(num1, num2));
    
    //The long way
    var value = num1;
	for (var i = 1; i <= num2-1; i++) {
		value = value * num1;
	}
	console.log(value);
}

calculateExponent(2,10);