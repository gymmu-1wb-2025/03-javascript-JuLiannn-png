const myname = process.argv[2];
const myage = Number(process.argv[3]); //das process.argv ist Text. Wenn man 16 schreibt wäre das Text. Und die Zahl 4 würde einfach dahinter stehen (164). Man schreibt Number sodass 16 als Zahl gelesen wird.

console.log(`Hallo ${myname} dein Alter ist ${myage + 4}.`);
