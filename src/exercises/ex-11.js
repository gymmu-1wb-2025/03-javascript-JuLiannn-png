function f(x) {
	return 4 * x - 1;
}

process.argv.forEach(function (entry) {
	const x = Number(entry);
	if (isNaN(x)) {
		// mache nichts
	} else {
		console.log(f(x));
	}
});
