function double(number) {
	return number * 2;
}

const result = double(Number(process.argv[2]));
console.log(result);
