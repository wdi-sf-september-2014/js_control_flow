function calculateExponent(x, y) {
    var xx = x;
	for (var i = 0; i<y-1; i++) {
		x*=xx;
	}
    console.log(x);
}