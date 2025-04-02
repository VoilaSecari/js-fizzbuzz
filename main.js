//Stampa numeri da 1 a 100 (for)
//multipli di 3 = Fizz
//multipli di 5 = Buzz
//multipli di 3 e 5 = FizzBuzz

//partenza
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz " + i);
  else if (i % 3 === 0) console.log("Fizz " + i);
  else if (i % 5 === 0) console.log("Buzz " + i);
  else console.log(i);
}
