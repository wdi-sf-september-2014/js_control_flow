function powerOf(base,exponent) {
    if (base == 1) {
        return 1;
	}
	if (exponent === 0) {
		return 1;
	}
	else {
		var newNum = 1;
        for (var i = 0; i < exponent; i++) {
        	newNum *= base;
        }
        return newNum;
	}

}

console.log(powerOf(9,0));
console.log(powerOf(2,3));
console.log(powerOf(1,25));
console.log(powerOf(4,4));