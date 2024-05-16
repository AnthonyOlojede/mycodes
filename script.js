const firstName = 'Ade';
console.log(firstName);

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
console.log(calcAge(1991));

const age = (myBrithYear) => 2024 - myBrithYear;
console.log(age(1970));

const myBrithYear = 1997;
function calcAg(myBrithYear) {
  return 2024 - myBrithYear;
}

const age1 = calcAg(1970);
const age2 = calcAg(1973);
console.log(age1, age2);

let beat = 1;
while (beat <= 10) {
  console.log(`I love bus # ${beat}`);
  beat++;
}

let tony = ['canada', 1970, 'lagos', 2];

for (let i = 0; i < tony.length; i++) {
  console.log(typeof tony[i], tony[i]);
  if (tony === 'number') {
    console.log(`👍`);
  }
}

const calTip = function (bill) {
  return bill * 0.1;
};

const bills = [20, 20, 20];
const tips = [];
const totals = [];
for (i = 0; i < bills.length; i++) {
  const tip = calTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(tips, totals);

const CalcCommission = (prem, rate) => prem * rate;

console.log(CalcCommission(50000, 0.2));

// calculate max and min value in an array
const temp = [20, 10, 1, 2];
const tempDiff = function () {
  for (let i = 0; i < temp.length - 1; temp++) {
    let max = temp[0];
    let min = temp[0];
    if (temp[i] < max) max = temp[i];
    if (temp[i] > min) min = temp[i];
    return min;
  }
};

console.log(tempDiff(temp));

//const yourName = prompt(`what is your name?`);
// console.log(yourName

//console.log(document.querySelector('#commit').textContent);
const number = Math.trunc(Math.random()*10) +1;
console.log(number);