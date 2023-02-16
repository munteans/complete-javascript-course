const value = 430;
const tip = value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
console.log(
  `The bill was ${value}, the tip was ${tip}, and the total value ${
    value + tip
  }`
);
