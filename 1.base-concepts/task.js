function solveEquation(a, b, c) {
  let res = []
	let D = Math.pow(b, 2) - 4 * a * c
	if( D == 0){
    res.push( -b / ( 2 * a ))
  }
	else if(D > 0) {
		res.push((-b + Math.sqrt(D)) / (2 * a))
    res.push((-b - Math.sqrt(D)) / (2 * a))
	}
	return res
}
