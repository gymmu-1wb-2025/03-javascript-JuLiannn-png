const myweight = Number(process.argv[2]);
const myheight = Number(process.argv[3]);

console.log(` Mein BMI ist ${myweight / (myheight * myheight)}.`);
