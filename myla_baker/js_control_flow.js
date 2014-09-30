function calculateExponent(b, e) {
	var result = 1;
    for (var i=0; i < e; i++) {
    result = result * b;
    };
    console.log(result);
};

calculateExponent(2,5);