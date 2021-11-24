const args = process.argv.splice(2);
//console.log(args);


let total = 0;
function SumOfNumbers() {
  for (let i = 0; i < args.length; i++) {
    total += Number(args[i]);
  }
  console.log(total);
}

SumOfNumbers();

