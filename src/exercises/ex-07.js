const number = Number(process.argv[2]);
const secondNumber = Number(process.argv[3]);
const solution = number % 3;

if (solution === 0) {
	console.log("Ja ist teilbar");
} else {
	console.log("Ist nicht teilbar");
}
