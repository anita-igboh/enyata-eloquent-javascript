
// Fizz Buzz(Chapter2)
for (i = 0; i <= 100; i++){
    let x = '';
    if (i % 3 == 0) x +='Fizz';
    if (i % 5 == 0) x += 'Buzz';
    console.log(i || x);
}
