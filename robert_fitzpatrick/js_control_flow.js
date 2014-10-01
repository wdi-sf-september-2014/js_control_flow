var calculateExponent = function(base, exponent){
	if (exponent === 0) {
		return 1;
	}	else {
		return base * calculateExponent(base, exponent -1);
	}
};

console.log(calculateExponent(5,10));