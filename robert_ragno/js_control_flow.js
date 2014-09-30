var calculateExponent = function(num1,num2) {
	//The easy way
	//console.log(Math.pow(num1, num2));
    
    //The long way
    var value = num1;
    var total;
	for (var i = 1; i <= num2-1; i++) {
  
		total = value * num1;
        value = total;
	}
	console.log(value);
}

calculateExponent(2,10);