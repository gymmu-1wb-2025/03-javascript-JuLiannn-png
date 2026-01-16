const number = Number(process.argv[2]);
const secondNumber = Number(process.argv[3]);
const solution = number / secondNumber;

if (solution === number) {
	console.log("Ja ist teilbar");
} else {
	console.log("Ist nicht teilbar");
}
