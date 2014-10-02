function calculateExponent(b, e) {
	var result = 1;
	if (e < 0) {
    result= (1.0/(result * b));
  } else {
    for (var i=0; i < e; i++) {
      result = result * b;
    }
  };
  return result;
};

calculateExponent(2,-1); 