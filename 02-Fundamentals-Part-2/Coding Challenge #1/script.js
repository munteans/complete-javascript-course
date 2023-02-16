"use strict";
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avg1, avg2) {
  if (avg1 > 2 * avg2) {
    console.log(`Dolphins win (${avg1} vs. ${avg2})`);
  } else if (avg2 > 2 * avg1) {
    console.log(`Koalas win (${avg2} vs. ${avg1})`);
  }
}

checkWinner(avgDolphins, avgKoalas);
