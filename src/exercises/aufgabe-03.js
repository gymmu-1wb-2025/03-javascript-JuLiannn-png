function max(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}

const numbers = max(Number(process.argv[2]));
console.log(numbers);
