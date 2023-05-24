const ages = [12, 14, 18, 20, 15];
const ages2 = [11, 16, 19];
const ages3 = [23, 27, 29, 31];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 7, ...ages3];
console.log(allAges2);

const businessman = 650;
const minister = 450;
const sochib = 300;
const takaPoisa = [650, 450, 300];

//const maximum = Math.max(businessman, minister, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);