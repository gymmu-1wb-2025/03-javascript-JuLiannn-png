console.log(`Du hast ${process.argv.length} Kommandozeilenargumente`);

for (let i = 0; i < process.argv.length; i++) {
	console.log(process.argv[i]); // setzen Sie hier einen Breakpoint, und schauen Sie was mit i passiert und was mit process.argv[i].
}
