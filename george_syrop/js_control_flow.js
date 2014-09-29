function powerOf(base,exponent) {
    if (base == 1) {
        return 1;
	}
	if (exponent === 0) {
		return 1;
	}
	else {
        var count = 0;
		var newNum = 1;
        while (count < exponent) {
			newNum *= base;
			count ++;
		}
        return newNum;
	}

}

//tests
console.log(powerOf(9,0));
console.log(powerOf(2,3));
console.log(powerOf(1,25));
console.log(powerOf(4,4));