let List = [];
function prime_factors(num) {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      List.push(i);
    }
  }
}

prime_factors(28);
console.log(List);

for (let i = 0; i < List.length; i++) {
  console.log(List[i]);
}
