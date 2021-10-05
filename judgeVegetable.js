// const judgeVegetable = function (vegetables, metric) {
//   // console.log(vegetables[0].submitter);
//   let winner = '';
//   if (metric === 'redness') {
//     // console.log(`You're judging redness`);

//     if ((vegetables[0].redness > vegetables[1].redness) && (vegetables[0].redness > vegetables[2].redness)) {
//       winner = vegetables[0].submitter;
//     } else if ((vegetables[1].redness > vegetables[0].redness) && (vegetables[1].redness > vegetables[2].redness)) {
//       winner = vegetables[1].submitter;
//     } else if ((vegetables[2].redness > vegetables[0].redness) && (vegetables[2].redness > vegetables[1].redness)) {
//       winner = vegetables[2].submitter;
//     }
//   } else if (metric === 'plumpness') {
//     // console.log(`You're judging plumpness`);
//     if ((vegetables[0].plumpness > vegetables[1].plumpness) && (vegetables[0].plumpness > vegetables[2].plumpness)) {
//       winner = vegetables[0].submitter;
//     } else if ((vegetables[1].plumpness > vegetables[0].plumpness) && (vegetables[1].plumpness > vegetables[2].plumpness)) {
//       winner = vegetables[1].submitter;
//     } else if ((vegetables[2].plumpness > vegetables[0].plumpness) && (vegetables[2].plumpness > vegetables[1].plumpness)) {
//       winner = vegetables[2].submitter;
//     }
//   } 
//   return winner;
// }

const judgeVegetable = function (vegetables, metric) {
  let value = 0;
  let winner = "";
  for (let veg of vegetables) {
    if (veg[metric] > value) {
      winner = veg["submitter"];
      value = veg[metric];
    }
  }
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'
// console.log(typeof(winner));
console.log(judgeVegetable(vegetables, metric));