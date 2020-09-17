const a = 1;
let b = 2;
var c = 3;
const fn = (...num) => {
  let sum = 0;
  num.forEach((items) => (sum += items));
  return sum;
};

exports.a = a;
exports.b = b;
module.exports.c = c;
module.exports.fun = fn;

// 原本exports和module.exports指向同一空间，
// 当module.exports改变时，
// 则以改变后的module.exports为准

// module.exports = {
//   a: "hhhh",
// };
